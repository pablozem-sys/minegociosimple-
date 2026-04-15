import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const MP_ACCESS_TOKEN = Deno.env.get('MP_ACCESS_TOKEN')!
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

serve(async (req) => {
  if (req.method === 'GET') {
    return new Response('ok', { status: 200 })
  }

  try {
    const body = await req.json()
    console.log('MP webhook:', JSON.stringify(body))

    if (body.type !== 'subscription_preapproval') {
      return new Response('ignored', { status: 200 })
    }

    const subscriptionId = body.data?.id
    if (!subscriptionId) return new Response('no id', { status: 200 })

    const mpRes = await fetch(`https://api.mercadopago.com/preapproval/${subscriptionId}`, {
      headers: { 'Authorization': `Bearer ${MP_ACCESS_TOKEN}` },
    })

    if (!mpRes.ok) {
      console.error('Error MP:', mpRes.status)
      return new Response('mp error', { status: 200 })
    }

    const subscription = await mpRes.json()
    const userId = subscription.external_reference
    const status = subscription.status

    console.log('Status:', status, '| userId:', userId)

    if (!userId) {
      console.error('Sin external_reference — suscripción antigua sin userId')
      return new Response('no user id', { status: 200 })
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

    if (status === 'authorized') {
      const { error } = await supabase.from('profiles').upsert({
        id: userId,
        updated_at: new Date().toISOString(),
        plan: 'pro',
      }, { onConflict: 'id' })

      if (error) {
        console.error('Error actualizando plan:', error)
        return new Response('update error', { status: 500 })
      }
      console.log('Plan Pro activado para userId:', userId)

    } else if (status === 'cancelled' || status === 'paused') {
      await supabase.from('profiles')
        .update({ plan: 'free', updated_at: new Date().toISOString() })
        .eq('id', userId)
      console.log('Plan revertido a free para userId:', userId)
    }

    return new Response('ok', { status: 200 })

  } catch (err) {
    console.error('Error:', err)
    return new Response('error', { status: 500 })
  }
})
