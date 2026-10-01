import React from "react";
import { Check } from "lucide-react";

interface PricingPlan {
  name: string;
  price: number;
  description: string;
  transactions: string;
  support: string;
  extras: string[];
  isPopular?: boolean;
  isCustom?: boolean;
  minPrice?: number;
  maxPrice?: number;
  onInquire: () => void;
}

interface PricingSectionProps {
  onInquire: (plan: string) => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onInquire }) => {
  // same prices/tiers/features as before, restructured into comparable rows instead of five separate bullet lists
  const plans: PricingPlan[] = [
    {
      name: "Individual",
      price: 80,
      minPrice: 80,
      description: "Starting from $80 for individuals and solopreneurs",
      transactions: "Up to 50 transactions",
      support: "Email support",
      extras: ["Monthly summary"],
      onInquire: () => onInquire("Individual"),
    },
    {
      name: "Starter",
      price: 199,
      minPrice: 100,
      maxPrice: 199,
      description: "Perfect for small businesses",
      transactions: "Up to 200 transactions",
      support: "Email support",
      extras: ["Monthly reports", "Basic analytics"],
      onInquire: () => onInquire("Starter"),
    },
    {
      name: "Growth",
      price: 399,
      minPrice: 200,
      maxPrice: 399,
      description: "For scaling enterprises",
      transactions: "Higher volume transactions",
      support: "Priority support",
      extras: ["Advanced financial insights", "Custom reporting", "Quarterly strategy sessions"],
      isPopular: true,
      onInquire: () => onInquire("Growth"),
    },
    {
      name: "Pro",
      price: 599,
      minPrice: 400,
      maxPrice: 599,
      description: "Advanced features for growing teams",
      transactions: "Up to 2,000 transactions",
      support: "Dedicated support",
      extras: ["Advanced analytics", "Integration assistance"],
      onInquire: () => onInquire("Pro"),
    },
    {
      name: "Enterprise",
      price: 1199,
      minPrice: 600,
      maxPrice: 1199,
      description: "Full enterprise package with premium services",
      transactions: "Unlimited transactions",
      support: "24/7 premium support",
      extras: ["Dedicated account manager", "Custom integrations", "Strategic consulting"],
      onInquire: () => onInquire("Enterprise"),
    },
  ];

  // union of tier-specific extras, first-appearance order, so the table only lists rows that actually exist in the data above
  const extraRows = Array.from(new Set(plans.flatMap((p) => p.extras)));

  const priceLabel = (plan: PricingPlan) => {
    if (plan.isCustom) return "Custom";
    if (plan.minPrice !== undefined && plan.maxPrice !== undefined) return `$${plan.minPrice}\u2013$${plan.maxPrice}`;
    if (plan.minPrice !== undefined) return `$${plan.minPrice}`;
    return `$${plan.price}`;
  };

  return (
    <section className="py-20 lg:py-28 bg-paper px-6">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brandDeep font-semibold text-xs mb-4">Transparent pricing</p>
          <h2 className="text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.5rem]">Simple, transparent pricing</h2>
          <p className="text-xl text-muted font-medium">
            Starting as low as <span className="text-brand font-semibold">$80</span>
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse" style={{ fontVariantNumeric: "tabular-nums lining-nums" }}>
            <caption className="sr-only">Plan comparison by feature</caption>
            <thead>
              <tr>
                <th scope="col" className="sticky left-0 bg-paper text-left p-4 align-bottom"></th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    scope="col"
                    className={`text-left p-4 align-bottom min-w-[11rem] ${plan.isPopular ? "border-l-2 border-brand" : ""}`}
                  >
                    {plan.isPopular && (
                      <p className="text-brand text-xs font-semibold mb-2">Recommended</p>
                    )}
                    <p className="text-h4 font-semibold text-ink">{plan.name}</p>
                    <p className="text-muted text-small mb-4">{plan.description}</p>
                    <p className="text-h3 font-semibold text-ink mb-4">{priceLabel(plan)}</p>
                    <button
                      onClick={plan.onInquire}
                      className={`w-full py-3 px-4 rounded-control font-semibold text-small transition-colors ${
                        plan.isPopular
                          ? "bg-brand text-white hover:bg-brandDeep"
                          : "border border-ruleStrong text-ink hover:border-brand hover:text-brand"
                      }`}
                    >
                      {plan.isCustom ? "Schedule consultation" : "Get started"}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-rule">
                <th scope="row" className="sticky left-0 bg-paper text-left p-4 font-medium text-ink">Transactions</th>
                {plans.map((plan) => (
                  <td key={plan.name} className={`p-4 text-muted ${plan.isPopular ? "border-l-2 border-brand" : ""}`}>{plan.transactions}</td>
                ))}
              </tr>
              <tr className="border-t border-rule">
                <th scope="row" className="sticky left-0 bg-paper text-left p-4 font-medium text-ink">Support</th>
                {plans.map((plan) => (
                  <td key={plan.name} className={`p-4 text-muted ${plan.isPopular ? "border-l-2 border-brand" : ""}`}>{plan.support}</td>
                ))}
              </tr>
              {extraRows.map((row) => (
                <tr key={row} className="border-t border-rule">
                  <th scope="row" className="sticky left-0 bg-paper text-left p-4 font-medium text-ink">{row}</th>
                  {plans.map((plan) => (
                    <td key={plan.name} className={`p-4 ${plan.isPopular ? "border-l-2 border-brand" : ""}`}>
                      {plan.extras.includes(row) ? (
                        <Check className="w-5 h-5 text-brand" aria-label="Included" />
                      ) : (
                        <span className="text-muted" aria-hidden="true">&mdash;</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-muted font-medium mt-12">
          All plans include a{" "}
          <span className="text-brand font-semibold">free consultation</span> with our strategists to ensure the right fit for individuals and businesses.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
