import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const DEFAULT_GRADIENTS = [
  'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
  'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)',
  'linear-gradient(135deg, #0f3460 0%, #e94560 100%)',
  'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
  'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
]

export function GradientBackground({
  children,
  className = '',
  gradients = DEFAULT_GRADIENTS,
  animationDuration = 8,
  animationDelay = 0.5,
  overlay = false,
  overlayOpacity = 0.3,
}) {
  return (
    <div className={cn('w-full relative overflow-hidden', className)}>
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{ background: gradients[0] }}
        animate={{ background: gradients }}
        transition={{
          delay: animationDelay,
          duration: animationDuration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Optional overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  )
}
