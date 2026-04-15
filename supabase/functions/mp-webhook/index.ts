import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const MP_ACCESS_TOKEN = Deno.env.get('MP_ACCESS_TOKEN')!
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

serve(async (req) => {
  // MercadoPago envía GET para validar el endpoint
  if (req.method === 'GET') {
    return new Response('ok', { status: 200 })
  }

  try {
    const body = await req.json()
    console.log('MP webhook recibido:', JSON.stringify(body))

    // MP envía notificaciones de tipo preapproval (suscripción)
    if (body.type !== 'subscription_preapproval' && body.action !== 'updated') {
      return new Response('ignored', { status: 200 })
    }

    const subscriptionId = body.data?.id
    if (!subscriptionId) {
      return new Response('no id', { status: 200 })
    }

    // Obtenemos los detalles de la suscripción desde la API de MP
    const mpRes = await fetch(`https://api.mercadopago.com/preapproval/${subscriptionId}`, {
      headers: { 'Authorization': `Bearer ${MP_ACCESS_TOKEN}` },
    })

    if (!mpRes.ok) {
      console.error('Error al obtener suscripción de MP:', mpRes.status)
      return new Response('mp error', { status: 200 })
    }

    const subscription = await mpRes.json()
    console.log('Suscripción MP:', subscription.status, subscription.payer_email)

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

    if (subscription.status === 'authorized') {
      // Activar plan Pro — buscar usuario por email
      const payerEmail = subscription.payer_email
      if (!payerEmail) {
        console.error('Sin email del pagador')
        return new Response('no email', { status: 200 })
      }

      // Buscar el usuario en Supabase auth por email
      const { data: users, error: userError } = await supabase.auth.admin.listUsers()
      if (userError) {
        console.error('Error listando usuarios:', userError)
        return new Response('user error', { status: 200 })
      }

      const user = users.users.find(u => u.email?.toLowerCase() === payerEmail.toLowerCase())
      if (!user) {
        console.error('Usuario no encontrado para email:', payerEmail)
        return new Response('user not found', { status: 200 })
      }

      // Actualizar plan a pro en profiles
      const { error: updateError } = await supabase
        .from('profiles')
        .upsert({ id: user.id, plan: 'pro' })

      if (updateError) {
        console.error('Error actualizando plan:', updateError)
        return new Response('update error', { status: 500 })
      }

      console.log('Plan Pro activado para:', payerEmail)

    } else if (subscription.status === 'cancelled' || subscription.status === 'paused') {
      // Cancelar suscripción — volver a plan free
      const payerEmail = subscription.payer_email
      if (payerEmail) {
        const { data: users } = await supabase.auth.admin.listUsers()
        const user = users?.users.find(u => u.email?.toLowerCase() === payerEmail.toLowerCase())
        if (user) {
          await supabase.from('profiles').upsert({ id: user.id, plan: 'free' })
          console.log('Plan revertido a free para:', payerEmail)
        }
      }
    }

    return new Response('ok', { status: 200 })

  } catch (err) {
    console.error('Error en webhook:', err)
    return new Response('error', { status: 500 })
  }
})
