import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const MP_ACCESS_TOKEN = Deno.env.get('MP_ACCESS_TOKEN')!
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

serve(async (req) => {
  if (req.method === 'GET') return new Response('ok', { status: 200 })
  try {
    const body = await req.json()
    console.log('MP webhook:', JSON.stringify(body))
    if (body.type !== 'subscription_preapproval') return new Response('ignored', { status: 200 })
    const subscriptionId = body.data?.id
    if (!subscriptionId) return new Response('no id', { status: 200 })
    const mpRes = await fetch(`https://api.mercadopago.com/preapproval/${subscriptionId}`, {
      headers: { 'Authorization': `Bearer ${MP_ACCESS_TOKEN}` },
    })
    if (!mpRes.ok) {
      console.error('MP error:', mpRes.status)
      return new Response('mp error', { status: 200 })
    }
    const subscription = await mpRes.json()
    console.log('Status:', subscription.status)
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
    if (subscription.status === 'authorized') {
      const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
      const { data: pending } = await supabase
        .from('profiles')
        .select('id')
        .eq('plan', 'free')
        .gte('upgrade_pending_since', twoHoursAgo)
        .order('upgrade_pending_since', { ascending: false })
        .limit(1)
        .single()
      if (!pending) {
        console.error('No hay usuarios con upgrade pendiente')
        return new Response('no pending user', { status: 200 })
      }
      await supabase.from('profiles').update({
        plan: 'pro',
        upgrade_pending_since: null,
        updated_at: new Date().toISOString()
      }).eq('id', pending.id)
      console.log('Plan Pro activado para userId:', pending.id)
    }
    return new Response('ok', { status: 200 })
  } catch (err) {
    console.error('Error:', err.message)
    return new Response('error', { status: 500 })
  }
})
