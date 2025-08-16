import { GradientCard } from "./gradient-card"

const pricingPlans = [
  {
    title: "Starter",
    description: "Perfect for small projects and personal use",
    price: "$9",
    gradient: "blue" as const,
    features: ["Up to 5 projects", "Basic components", "Community support", "Basic templates"],
  },
  {
    title: "Professional",
    description: "Ideal for growing businesses and teams",
    price: "$29",
    gradient: "purple" as const,
    badge: "Most Popular",
    featured: true,
    features: [
      "Unlimited projects",
      "Advanced components",
      "Priority support",
      "Premium templates",
      "Custom themes",
      "Team collaboration",
    ],
  },
  {
    title: "Enterprise",
    description: "For large organizations with custom needs",
    price: "$99",
    gradient: "green" as const,
    features: [
      "Everything in Professional",
      "Custom components",
      "Dedicated support",
      "White-label solution",
      "Advanced analytics",
      "SLA guarantee",
    ],
  },
]

export function PricingTable() {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {pricingPlans.map((plan, index) => (
        <GradientCard
          key={index}
          title={plan.title}
          description={plan.description}
          price={plan.price}
          gradient={plan.gradient}
          badge={plan.badge}
          featured={plan.featured}
          features={plan.features}
        />
      ))}
    </div>
  )
}
