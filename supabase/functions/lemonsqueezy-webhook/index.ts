import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const WEBHOOK_SECRET = Deno.env.get('LEMONSQUEEZY_WEBHOOK_SECRET') ?? ''

async function verifySignature(body: string, signature: string): Promise<boolean> {
  if (!WEBHOOK_SECRET) return false
  const enc = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(WEBHOOK_SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(body))
  const digest = Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
  return digest === signature
}

function supabaseAdmin() {
  return createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
  )
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const body = await req.text()
  const signature = req.headers.get('X-Signature') ?? ''

  if (!(await verifySignature(body, signature))) {
    return new Response('Invalid signature', { status: 401 })
  }

  let payload: Record<string, unknown>
  try {
    payload = JSON.parse(body)
  } catch {
    return new Response('Invalid JSON', { status: 400 })
  }

  const event = (payload.meta as Record<string, unknown>)?.event_name as string
  const customData = (payload.meta as Record<string, unknown>)?.custom_data as Record<string, string> | undefined
  const userId = customData?.user_id

  const db = supabaseAdmin()

  // ── Activate Pro ──────────────────────────────────────────────────────────
  if (event === 'order_created') {
    const status = ((payload.data as Record<string, unknown>)?.attributes as Record<string, unknown>)?.status
    if (status === 'paid' && userId) {
      const { error } = await db
        .from('profiles')
        .upsert({ id: userId, plan: 'pro' }, { onConflict: 'id' })
      if (error) {
        console.error('order_created upsert error:', error)
        return new Response('DB error', { status: 500 })
      }
    }
  }

  if (event === 'subscription_created' && userId) {
    const { error } = await db
      .from('profiles')
      .upsert({ id: userId, plan: 'pro' }, { onConflict: 'id' })
    if (error) {
      console.error('subscription_created upsert error:', error)
      return new Response('DB error', { status: 500 })
    }
  }

  // ── Revoke Pro ────────────────────────────────────────────────────────────
  if ((event === 'subscription_cancelled' || event === 'subscription_expired') && userId) {
    await db.from('profiles').update({ plan: 'free' }).eq('id', userId)
  }

  return new Response('OK', { status: 200 })
})
