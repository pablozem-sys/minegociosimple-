import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { CheckCircle, Circle, X, Package, TrendingUp, User, PartyPopper } from 'lucide-react'

const STORAGE_KEY = 'zimplex_onboarding_dismissed'

export default function OnboardingChecklist() {
  const { products, sales, transferDetails, setActiveTab } = useApp()
  const [dismissed, setDismissed] = useState(() => localStorage.getItem(STORAGE_KEY) === '1')

  if (dismissed) return null

  const steps = [
    {
      id: 'producto',
      icon: Package,
      title: 'Agrega tu primer producto',
      desc: 'Crea los productos o servicios que vendes',
      done: products.length > 0,
      tab: 'productos',
      cta: 'Ir a Productos',
    },
    {
      id: 'venta',
      icon: TrendingUp,
      title: 'Registra tu primera venta',
      desc: 'Lleva el control de cuánto vendiste hoy',
      done: sales.length > 0,
      tab: 'ventas',
      cta: 'Ir a Ventas',
    },
    {
      id: 'perfil',
      icon: User,
      title: 'Completa tus datos de pago',
      desc: 'Agrega tu cuenta para recibir transferencias',
      done: !!(transferDetails?.bank),
      tab: 'perfil',
      cta: 'Ir a Perfil',
    },
  ]

  const completedCount = steps.filter(s => s.done).length
  const allDone = completedCount === steps.length

  const handleDismiss = () => {
    localStorage.setItem(STORAGE_KEY, '1')
    setDismissed(true)
  }

  if (allDone) {
    return (
      <div className="bg-gradient-to-r from-[#4ADE80] to-[#3B82F6] rounded-2xl p-4 mb-5 flex items-center gap-3 shadow-lg shadow-green-100">
        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
          <PartyPopper size={20} className="text-white" />
        </div>
        <div className="flex-1">
          <p className="text-white font-bold text-sm">¡Tu negocio está listo!</p>
          <p className="text-white/80 text-xs mt-0.5">Completaste todos los pasos de configuración</p>
        </div>
        <button onClick={handleDismiss} className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center active:scale-95">
          <X size={14} className="text-white" />
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-sm font-bold text-gray-900">Configura tu negocio</p>
          <p className="text-xs text-gray-400 mt-0.5">{completedCount} de {steps.length} pasos completados</p>
        </div>
        <button onClick={handleDismiss} className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center active:scale-95">
          <X size={14} className="text-gray-400" />
        </button>
      </div>

      {/* Barra de progreso */}
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4">
        <div
          className="h-1.5 rounded-full transition-all duration-500"
          style={{
            width: `${(completedCount / steps.length) * 100}%`,
            background: 'linear-gradient(90deg, #4ADE80, #6366F1)',
          }}
        />
      </div>

      <div className="space-y-2">
        {steps.map((step) => {
          const Icon = step.icon
          return (
            <div
              key={step.id}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                step.done ? 'bg-gray-50 opacity-60' : 'bg-indigo-50/50'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                step.done ? 'bg-emerald-100' : 'bg-white border border-gray-200'
              }`}>
                {step.done
                  ? <CheckCircle size={16} className="text-emerald-500" />
                  : <Icon size={15} className="text-[#6366F1]" />
                }
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold ${step.done ? 'line-through text-gray-400' : 'text-gray-900'}`}>
                  {step.title}
                </p>
                {!step.done && <p className="text-xs text-gray-400 mt-0.5">{step.desc}</p>}
              </div>
              {!step.done && (
                <button
                  onClick={() => setActiveTab(step.tab)}
                  className="flex-shrink-0 text-xs font-semibold text-[#6366F1] bg-white border border-indigo-100 px-3 py-1.5 rounded-xl active:scale-95 transition-all whitespace-nowrap"
                >
                  {step.cta}
                </button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
