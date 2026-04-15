export const PLANS = {
  free: {
    maxProducts: 3,
    maxMonthlySales: 20,
    features: {
      whatsappOrders: false,
    },
  },
  pro: {
    maxProducts: Infinity,
    maxMonthlySales: Infinity,
    features: {
      whatsappOrders: true,
    },
  },
}

export const UPGRADE_URL_BASE =
  'https://zimplexapp.lemonsqueezy.com/checkout/buy/aa87c828-1e44-484a-948b-a55f2f129f81'

export const getPlanLimits = (plan) => PLANS[plan] ?? PLANS.free
export const hasFeature = (plan, feature) =>
  (PLANS[plan] ?? PLANS.free).features[feature] ?? false
