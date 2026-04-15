import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const MP_ACCESS_TOKEN = Deno.env.get('MP_ACCESS_TOKEN')!
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const MP_PLAN_ID = '1d44657e88c94c5d91ccc04db531ebef'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Verificar JWT de Supabase para obtener el usuario autenticado
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401, headers: corsHeaders })
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
    const { data: { user }, error: authError } = await supabase.auth.getUser(authHeader.replace('Bearer ', ''))

    if (authError || !user) {
      return new Response(JSON.stringify({ error: 'Usuario no válido' }), { status: 401, headers: corsHeaders })
    }

    // Crear suscripción en MP con external_reference = userId
    const mpRes = await fetch('https://api.mercadopago.com/preapproval', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        preapproval_plan_id: MP_PLAN_ID,
        reason: 'Zimplex Pro',
        external_reference: user.id,
        payer_email: user.email,
        back_url: 'https://zimplex.app',
        auto_recurring: {
          frequency: 1,
          frequency_type: 'months',
          transaction_amount: 4990,
          currency_id: 'CLP',
        },
        status: 'pending',
      }),
    })

    const subscription = await mpRes.json()

    if (!mpRes.ok) {
      console.error('Error MP:', JSON.stringify(subscription))
      return new Response(JSON.stringify({ error: 'Error creando suscripción' }), { status: 500, headers: corsHeaders })
    }

    return new Response(
      JSON.stringify({ init_point: subscription.init_point }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (err) {
    console.error('Error:', err)
    return new Response(JSON.stringify({ error: 'Error interno' }), { status: 500, headers: corsHeaders })
  }
})
