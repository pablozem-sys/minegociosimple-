import {
  ShoppingBag, ArrowRight, CheckCircle2, TrendingUp, Package,
  MessageCircle, BarChart2, AlertCircle, Zap, DollarSign,
  Star, ChevronRight, X, Check, Heart
} from 'lucide-react'

const SIGNUP_URL  = 'https://minegociosimple.vercel.app/signup'
const LOGIN_URL   = 'https://minegociosimple.vercel.app/login'
const UPGRADE_URL = 'https://minegociosimple.lemonsqueezy.com/checkout/buy/ef3fd402-6b9a-4693-9c4b-5a4974929973'
const VIOLET      = '#7C3AED'
const VIOLET_DARK = '#6D28D9'
const VIOLET_SOFT = '#EDE9FE'
const VIOLET_MED  = '#A78BFA'

// ─── DATA ───────────────────────────────────────────────────────────────────

const problems = [
  { emoji: '😮‍💨', title: 'Vendes todos los días, pero no sabes cuánto ganas realmente', desc: 'A fin de mes no entiendes a dónde fue la plata.' },
  { emoji: '💬',   title: 'Se te pierden pedidos en WhatsApp', desc: 'Entre mensajes, fotos y audios, los pedidos se mezclan y se olvidan.' },
  { emoji: '📦',   title: 'No sabes cuánto stock te queda', desc: 'Un cliente pide y tú no tienes. Ventas perdidas por no llevar el control.' },
  { emoji: '📋',   title: 'Todo lo llevas en tu cabeza o en Excel', desc: 'Y cuando necesitas un dato importante, no está donde deberías buscarlo.' },
]

const solutionBullets = [
  'Registra cada venta en segundos',
  'Ve cuánto ganas día a día',
  'Controla tu stock sin esfuerzo',
  'Ten todo en un solo lugar',
]

const stats = [
  { value: '10s', label: 'Para registrar una venta' },
  { value: '100%', label: 'Desde el celular' },
  { value: '0', label: 'Conocimiento técnico' },
  { value: '$0', label: 'Para empezar hoy' },
]

const steps = [
  { num: 1, title: 'Registra tus ventas', desc: 'Selecciona el producto, la cantidad y confirma. En 10 segundos ya tienes tu venta registrada y el stock actualizado.' },
  { num: 2, title: 'Mira cómo crece tu negocio', desc: 'Tu dashboard te muestra cuánto vendiste hoy, esta semana y este mes. Un vistazo y ya sabes cómo va todo.' },
  { num: 3, title: 'Toma mejores decisiones', desc: 'Con datos reales sabes qué producto vende más, cuándo reponer y cuánto estás ganando de verdad.' },
]

const features = [
  { icon: ShoppingBag, title: 'Registrar ventas', desc: 'Selecciona el producto, la cantidad y el método de pago. Tu stock se actualiza solo. En 10 segundos.', bg: VIOLET_SOFT, color: VIOLET },
  { icon: Package,     title: 'Control de stock', desc: 'Alerta automática cuando un producto está por agotarse. Nunca más perderás una venta por falta de stock.', bg: '#F0FDF4', color: '#059669' },
  { icon: BarChart2,   title: 'Dashboard diario', desc: 'Ventas del día, del mes y gráfico de los últimos 7 días. Un vistazo y ya sabes cómo va tu negocio.', bg: '#F9FAFB', color: '#374151' },
  { icon: MessageCircle, title: 'Pedidos por WhatsApp', desc: 'Crea pedidos y genera el mensaje automático para tu cliente. Un toque y se abre WhatsApp listo para enviar.', bg: '#F0FDF4', color: '#25D366' },
  { icon: Star,        title: 'Metas financieras', desc: '¿Vacaciones? ¿Renovar stock? Define una meta, pon la fecha y ve tu progreso cada día.', bg: '#FFF7ED', color: '#F59E0B' },
  { icon: Zap,         title: '100% desde el celular', desc: 'Sin descargar nada. Se abre en el navegador de tu teléfono y funciona como una app nativa.', bg: VIOLET_SOFT, color: VIOLET },
]

const benefits = [
  { icon: BarChart2,     title: 'Sabes cuánto ganas de verdad', desc: 'Sin estimaciones. Número real, todos los días.', bg: VIOLET_SOFT, color: VIOLET },
  { icon: CheckCircle2,  title: 'Dejas de perder ventas', desc: 'Alerta de stock bajo y pedidos organizados. Ninguna se pierde.', bg: '#F0FDF4', color: '#059669' },
  { icon: ShoppingBag,   title: 'Tienes control de tu negocio', desc: 'Un solo lugar con toda la info. Sin cuadernos, sin Excel.', bg: VIOLET_SOFT, color: VIOLET },
  { icon: Heart,         title: 'Te sientes más tranquilo', desc: 'Saber cómo va tu negocio da paz mental. Dejas de vivir adivinando.', bg: '#FFF7ED', color: '#F59E0B' },
]

const testimonials = [
  { quote: '"Antes vendía todos los días, pero no sabía si realmente estaba ganando plata. Ahora tengo todo claro en un solo lugar."', name: 'María Contreras', role: 'Vende jugos y empanadas, Valparaíso', initial: 'M', color: VIOLET },
  { quote: '"Lo mejor es el control de stock. Me avisaba cuando me quedaba poco y dejé de perder ventas. Muy recomendado."', name: 'Carlos Morales', role: 'Frutas y verduras, Santiago', initial: 'C', color: '#059669' },
  { quote: '"Lo del WhatsApp automático me cambió la vida. Antes escribía el mismo mensaje 20 veces al día. Ahora es un toque y listo."', name: 'Valentina Rojas', role: 'Ropa por encargo, Concepción', initial: 'V', color: VIOLET },
]

const freeFeatures  = ['Registro de ventas', 'Control básico de stock', 'Visualización simple', 'Hasta 100 ventas al mes']
const proFeatures   = ['Ventas ilimitadas', 'Control de stock avanzado', 'Reportes completos', 'Pedidos por WhatsApp', 'Insights automáticos', 'Prioridad en soporte']
const proExcluded   = ['Control de stock avanzado', 'Reportes completos', 'Integración pedidos WhatsApp', 'Soporte prioritario']

const faqs = [
  { q: '¿Necesito descargar una app?', a: 'No. Mi Negocio Simple funciona directo en el navegador de tu celular. Sin descargar nada. Puedes guardarla en tu pantalla de inicio y se comporta como una app normal.' },
  { q: '¿Funciona sin internet?', a: 'Necesitas conexión para sincronizar los datos, pero está optimizada para funcionar bien con conexiones lentas o inestables como las de datos móviles.' },
  { q: '¿Mis datos están seguros?', a: 'Sí. Tus datos se almacenan de forma segura en servidores con encriptación. Solo tú tienes acceso a la información de tu negocio.' },
  { q: '¿Para qué tipo de negocios sirve?', a: 'Para cualquier negocio pequeño que vende productos: frutas, ropa, comida hecha en casa, artesanías, cosméticos, abarrotes y mucho más. Si vendes por WhatsApp, ferias o en tu casa, esto es para ti.' },
  { q: '¿Puedo cancelar en cualquier momento?', a: 'Sí, sin ningún problema. Sin contratos, sin cargos extra. Si cancelas el plan Pro, sigues usando el plan Gratis sin perder tus datos.' },
]

// ─── PHONE MOCKUP ─────────────────────────────────────────────────────────────

function PhoneMockup() {
  const bars = [55, 70, 40, 85, 60, 75, 100]
  return (
    <div className="mx-auto" style={{ maxWidth: 260, background: 'white', borderRadius: 32, padding: 8, boxShadow: '0 24px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05)' }}>
      <div style={{ background: '#FAF8FF', borderRadius: 26, overflow: 'hidden' }}>
        {/* Status bar */}
        <div className="flex justify-between px-4 pt-3 pb-1">
          <span className="text-xs font-semibold text-gray-600">9:41</span>
        </div>
        {/* Header */}
        <div className="bg-white px-4 pb-3 border-b border-gray-100">
          <p className="text-xs text-gray-400">Buenos días</p>
          <p className="text-base font-bold text-gray-900">Dashboard</p>
        </div>
        {/* KPI cards */}
        <div className="grid grid-cols-2 gap-2 p-3">
          {[
            { label: 'Ventas Hoy', value: '$48.000', sub: '↑ 12%', subColor: '#7CD09B' },
            { label: 'Ventas Mes', value: '$820k',   sub: '↑ 8%',  subColor: '#7CD09B' },
            { label: 'Pedidos',    value: '3',        sub: 'pendientes', subColor: '#F59E0B', valueColor: '#F59E0B' },
            { label: 'Stock bajo', value: '2',        sub: 'productos',  subColor: '#94A3B8', valueColor: '#DC4B56' },
          ].map(({ label, value, sub, subColor, valueColor }) => (
            <div key={label} className="bg-white rounded-xl p-3 shadow-sm">
              <p className="text-xs text-gray-400 mb-1">{label}</p>
              <p className="text-base font-bold" style={{ color: valueColor || '#111827' }}>{value}</p>
              <p className="text-xs" style={{ color: subColor }}>{sub}</p>
            </div>
          ))}
        </div>
        {/* Chart */}
        <div className="px-3 pb-2">
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <p className="text-xs text-gray-500 font-medium mb-2">Últimos 7 días</p>
            <div className="flex items-end justify-between gap-1" style={{ height: 40 }}>
              {bars.map((h, i) => (
                <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 6 ? VIOLET : VIOLET_SOFT }} />
              ))}
            </div>
          </div>
        </div>
        {/* CTA button */}
        <div className="px-3 pb-4">
          <div className="w-full py-3 rounded-xl text-center text-sm font-semibold text-white" style={{ background: VIOLET }}>
            + Registrar venta
          </div>
        </div>
        {/* Bottom nav */}
        <div className="bg-white border-t border-gray-100 flex justify-around py-2 px-2">
          {['Inicio', 'Ventas', 'Stock', 'Pedidos', 'Metas'].map((label, i) => (
            <div key={label} className="flex flex-col items-center gap-0.5">
              {i === 0 && <div className="w-1.5 h-1.5 rounded-full" style={{ background: VIOLET }} />}
              <span className="text-xs font-semibold" style={{ color: i === 0 ? VIOLET : '#9CA3AF' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Badge({ children, style = {} }) {
  return (
    <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: VIOLET_SOFT, color: VIOLET, ...style }}>
      {children}
    </span>
  )
}

function BtnPrimary({ href, onClick, children, style = {} }) {
  const cls = "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-white font-semibold text-base transition-all hover:opacity-90 active:scale-[0.98]"
  const s = { background: VIOLET, boxShadow: `0 12px 32px rgba(124,58,237,0.3)`, ...style }
  if (href) return <a href={href} className={cls} style={s}>{children}</a>
  return <button onClick={onClick} className={cls} style={s}>{children}</button>
}

function BtnSecondary({ href, onClick, children, style = {} }) {
  const cls = "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-base bg-white border-2 border-gray-200 transition-all hover:border-violet-300 hover:bg-violet-50 active:scale-[0.98]"
  const s = { color: VIOLET, ...style }
  if (href) return <a href={href} className={cls} style={s}>{children}</a>
  return <button onClick={onClick} className={cls} style={s}>{children}</button>
}

function Header({ onLogin }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: VIOLET }}>
            <ShoppingBag size={16} color="white" />
          </div>
          <span className="font-bold text-gray-900">Mi Negocio Simple</span>
        </div>
        <div className="hidden md:flex items-center gap-7">
          <a href="#como-funciona" className="text-sm text-gray-500 font-medium hover:text-gray-800 transition-colors">Cómo funciona</a>
          <a href="#beneficios"    className="text-sm text-gray-500 font-medium hover:text-gray-800 transition-colors">Beneficios</a>
          <a href="#precios"       className="text-sm text-gray-500 font-medium hover:text-gray-800 transition-colors">Precios</a>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onLogin} className="hidden md:block text-sm font-medium px-4 py-2 rounded-xl transition-colors hover:bg-gray-50" style={{ color: '#6B7280' }}>
            Entrar
          </button>
          <BtnPrimary href={SIGNUP_URL} style={{ padding: '10px 18px', fontSize: 14, boxShadow: 'none' }}>
            Empezar gratis
          </BtnPrimary>
        </div>
      </div>
    </header>
  )
}

function MobileCTABar({ onLogin }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex gap-2.5 p-3 bg-white border-t border-gray-100"
      style={{ boxShadow: '0 -4px 24px rgba(0,0,0,0.08)' }}>
      <BtnSecondary onClick={onLogin} style={{ flex: 1, fontSize: 14, padding: '12px 16px' }}>
        Ya tengo cuenta
      </BtnSecondary>
      <BtnPrimary href={SIGNUP_URL} style={{ flex: 1, fontSize: 14, padding: '12px 16px', boxShadow: 'none' }}>
        Empezar gratis
      </BtnPrimary>
    </div>
  )
}

function Hero({ onLogin }) {
  return (
    <section className="pt-20 pb-24 px-5 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124,58,237,0.08) 0%, transparent 60%)' }} />
      <div className="max-w-4xl mx-auto relative">
        <Badge>✦ Hecho para emprendedores como tú</Badge>

        <h1 className="mt-6 font-black text-gray-900 leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}>
          Deja de adivinar<br />cuánto ganas.
          <br /><span style={{ background: `linear-gradient(135deg, ${VIOLET}, ${VIOLET_MED})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Empieza a tener control real.
          </span>
        </h1>

        <p className="mt-5 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
          Registra tus ventas en segundos, controla tu stock y entiende tu negocio sin usar Excel.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <BtnPrimary href={SIGNUP_URL} style={{ fontSize: 17, padding: '16px 32px' }}>
            Empezar gratis <ArrowRight size={18} />
          </BtnPrimary>
          <BtnSecondary onClick={onLogin} style={{ fontSize: 17, padding: '16px 32px' }}>
            Ya tengo cuenta
          </BtnSecondary>
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {['Sin tarjeta de crédito', 'Gratis para empezar', 'Listo en 2 minutos'].map(t => (
            <span key={t} className="flex items-center gap-1.5 text-sm text-gray-400">
              <CheckCircle2 size={14} style={{ color: '#7CD09B' }} />
              {t}
            </span>
          ))}
        </div>

        {/* Phone mockup */}
        <div className="mt-16">
          <PhoneMockup />
        </div>

        {/* Social proof */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[{ bg: VIOLET, l: 'M' }, { bg: VIOLET, l: 'V' }, { bg: '#059669', l: 'C' }, { bg: '#DC2626', l: 'A' }].map(({ bg, l }) => (
                <div key={l} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white" style={{ background: bg }}>{l}</div>
              ))}
            </div>
            <span>+200 emprendedores ya lo usan</span>
          </div>
          <div className="flex items-center gap-1">
            <span style={{ color: '#F59E0B' }}>★★★★★</span>
            <span>4.9 en reseñas</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section className="py-20 px-5" style={{ background: '#FAFAFA' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge style={{ background: '#FFF1F2', color: '#DC4B56' }}>El problema</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">¿Te pasa esto?</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {problems.map(({ emoji, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-5 border-l-4 shadow-sm" style={{ borderLeftColor: '#DC4B56', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <div className="flex items-start gap-3">
                <span className="text-2xl">{emoji}</span>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">{title}</p>
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-lg font-semibold text-gray-700">
          No eres el único. A muchos emprendedores les pasa lo mismo.
        </p>
      </div>
    </section>
  )
}

function Solution() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <Badge>La solución</Badge>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Mi Negocio Simple te ayuda a{' '}
          <span style={{ background: `linear-gradient(135deg, ${VIOLET}, ${VIOLET_MED})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            ordenar tu negocio en minutos.
          </span>
        </h2>

        <div className="mt-8 grid sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto mb-14">
          {solutionBullets.map(text => (
            <div key={text} className="flex items-center gap-3 p-4 rounded-2xl" style={{ background: '#F9FAFB' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: VIOLET_SOFT }}>
                <Check size={14} style={{ color: VIOLET }} strokeWidth={2.5} />
              </div>
              <span className="text-sm font-medium text-gray-700">{text}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-4xl font-black" style={{ color: VIOLET }}>{value}</p>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="py-20 px-5" style={{ background: 'linear-gradient(180deg, #FAF8FF 0%, white 100%)' }} id="como-funciona">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <Badge>Cómo funciona</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Así de simple</h2>
          <p className="mt-2 text-lg text-gray-500">Sin planillas. Sin enredos.</p>
        </div>

        <div className="space-y-8">
          {steps.map(({ num, title, desc }) => (
            <div key={num} className="flex items-start gap-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-base text-white" style={{ background: VIOLET }}>
                {num}
              </div>
              <div className="pt-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-3xl text-center" style={{ background: '#FAF8FF', border: `1.5px solid ${VIOLET_SOFT}` }}>
          <p className="text-xl font-bold text-gray-900 mb-2">¿Cuánto demora en configurarse?</p>
          <p className="text-gray-500 mb-5">
            Menos de <strong style={{ color: VIOLET }}>5 minutos</strong> desde que abres la app hasta tu primera venta registrada.
          </p>
          <BtnPrimary href={SIGNUP_URL}>Quiero empezar ahora</BtnPrimary>
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <Badge>Funcionalidades</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Todo en un solo lugar</h2>
          <p className="mt-3 text-lg text-gray-500 max-w-md mx-auto">Cinco herramientas simples que te dan claridad total sobre tu negocio.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc, bg, color }, i) => (
            <div key={title} className="rounded-2xl p-7 border border-gray-100 transition-all hover:border-violet-200 hover:shadow-md"
              style={i === features.length - 1 ? { background: 'linear-gradient(135deg, #EDE9FE, #F5F3FF)' } : { background: 'white' }}>
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4" style={{ background: bg }}>
                <Icon size={22} style={{ color }} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section className="py-20 px-5" style={{ background: '#FAFAFA' }} id="beneficios">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <Badge>Beneficios</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Lo que cambia cuando empiezas a usarlo</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {benefits.map(({ icon: Icon, title, desc, bg, color }) => (
            <div key={title} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                <Icon size={20} style={{ color }} />
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">{title}</p>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-xl font-bold text-gray-800 mb-6">Tu negocio deja de ser un caos.</p>
          <BtnPrimary href={SIGNUP_URL} style={{ fontSize: 17, padding: '16px 32px' }}>
            Empezar gratis ahora <ArrowRight size={18} />
          </BtnPrimary>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <Badge>Testimonios</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Lo que dicen quienes lo usan</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map(({ quote, name, role, initial, color }, i) => (
            <div key={name} className="bg-white rounded-2xl p-6 border transition-all hover:shadow-md"
              style={{ borderColor: i === 1 ? '#DDD6FE' : '#F3F4F6' }}>
              <div className="flex gap-1 mb-3" style={{ color: '#F59E0B' }}>
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="#F59E0B" />)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: color }}>
                  {initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{name}</p>
                  <p className="text-xs text-gray-400">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="py-20 px-5" style={{ background: '#FAFAFA' }} id="precios">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <Badge>Precios</Badge>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Simple como la app</h2>
          <p className="mt-3 text-lg text-gray-500">Empieza gratis. Actualiza solo si lo necesitas.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {/* Free */}
          <div className="bg-white rounded-3xl p-7 border-2 border-gray-100">
            <p className="text-sm font-semibold text-gray-500 mb-1">Gratis</p>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-4xl font-extrabold text-gray-900">$0</span>
            </div>
            <p className="text-sm text-gray-400 mb-7">Para empezar</p>
            <ul className="space-y-3 mb-7">
              {freeFeatures.map(text => (
                <li key={text} className="flex items-center gap-3 text-sm text-gray-700">
                  <Check size={15} style={{ color: '#7CD09B' }} strokeWidth={2.5} className="shrink-0" />
                  {text}
                </li>
              ))}
              {proExcluded.map(text => (
                <li key={text} className="flex items-center gap-3 text-sm text-gray-300">
                  <X size={15} className="shrink-0" strokeWidth={2} />
                  {text}
                </li>
              ))}
            </ul>
            <p className="text-xs text-center text-gray-400 mb-4">Gratis para siempre</p>
            <BtnSecondary href={SIGNUP_URL} style={{ width: '100%', justifyContent: 'center' }}>
              Empezar gratis
            </BtnSecondary>
          </div>

          {/* Pro */}
          <div className="rounded-3xl p-7 border-2 relative" style={{ background: VIOLET, borderColor: VIOLET, boxShadow: `0 20px 60px rgba(124,58,237,0.3)` }}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="text-xs font-bold px-4 py-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
                Más elegido
              </span>
            </div>
            <p className="text-sm font-semibold mb-1" style={{ color: '#C4B5FD' }}>Pro</p>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-4xl font-extrabold text-white">USD 5</span>
              <span className="mb-1.5" style={{ color: '#C4B5FD' }}>/mes</span>
            </div>
            <p className="text-sm mb-7" style={{ color: '#C4B5FD' }}>Para hacer crecer tu negocio</p>
            <ul className="space-y-3 mb-7">
              {proFeatures.map(text => (
                <li key={text} className="flex items-center gap-3 text-sm text-white">
                  <Check size={15} style={{ color: '#C4B5FD' }} strokeWidth={2.5} className="shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
            <a href={UPGRADE_URL} target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-white font-semibold text-sm transition-all hover:bg-violet-50"
              style={{ color: VIOLET }}>
              Pasar a Pro <ChevronRight size={16} />
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">Empieza gratis. No necesitas tarjeta.</p>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Badge>FAQ</Badge>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">Preguntas frecuentes</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {faqs.map(({ q, a }) => {
            const id = q.replace(/\s/g, '-')
            return (
              <details key={q} className="group py-5">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-gray-800 list-none">
                  {q}
                  <span className="ml-4 shrink-0 transition-transform group-open:rotate-180 text-gray-400">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">{a}</p>
              </details>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FinalCTA({ onLogin }) {
  return (
    <section className="py-24 px-5" style={{ background: '#0F172A' }}>
      <div className="max-w-2xl mx-auto text-center">
        <Badge style={{ background: 'rgba(124,58,237,0.2)', color: VIOLET_MED }}>Empieza hoy</Badge>
        <h2 className="mt-5 text-3xl md:text-4xl font-black text-white leading-tight">
          Empieza hoy a ordenar<br />tu negocio.
        </h2>
        <p className="mt-4 text-lg mb-10" style={{ color: '#94A3B8' }}>
          No necesitas ser experto. Solo necesitas empezar.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
          <BtnPrimary href={SIGNUP_URL} style={{ fontSize: 17, padding: '16px 36px' }}>
            Crear cuenta gratis <ArrowRight size={18} />
          </BtnPrimary>
          <BtnSecondary onClick={onLogin} style={{ fontSize: 17, padding: '16px 36px' }}>
            Ya tengo cuenta
          </BtnSecondary>
        </div>
        <p className="text-sm" style={{ color: '#64748B' }}>Sin tarjeta de crédito · Sin contratos · Gratis para empezar</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: VIOLET }}>
                <ShoppingBag size={14} color="white" />
              </div>
              <span className="font-bold text-gray-900">Mi Negocio Simple</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">La forma más simple de llevar tu negocio. Hecho con ❤️ para microemprendedores.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="font-semibold text-gray-700 mb-3">Producto</p>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#como-funciona" className="hover:text-gray-600 transition-colors">Cómo funciona</a></li>
                <li><a href="#precios" className="hover:text-gray-600 transition-colors">Precios</a></li>
                <li><a href="#faq" className="hover:text-gray-600 transition-colors">Preguntas frecuentes</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-3">Cuenta</p>
              <ul className="space-y-2 text-gray-400">
                <li><a href={SIGNUP_URL} className="hover:text-gray-600 transition-colors">Crear cuenta</a></li>
                <li><a href={LOGIN_URL} className="hover:text-gray-600 transition-colors">Iniciar sesión</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Mi Negocio Simple. Todos los derechos reservados.</p>
          <p className="text-sm text-gray-400">Hecho en 🇨🇱 Chile</p>
        </div>
      </div>
    </footer>
  )
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

export default function Landing({ onLogin }) {
  return (
    <div className="min-h-screen bg-white" style={{ paddingBottom: 72 }}>
      <Header onLogin={onLogin} />
      <MobileCTABar onLogin={onLogin} />
      <Hero onLogin={onLogin} />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA onLogin={onLogin} />
      <Footer />
    </div>
  )
}
