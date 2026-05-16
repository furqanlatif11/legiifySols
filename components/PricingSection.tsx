import React from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
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
  const plans: PricingPlan[] = [
    {
      name: "Basic",
      price: 100,
      minPrice: 80,
      maxPrice: 100,
      description: "Good for freelancers and solopreneurs",
      features: [
        "Up to 50 transactions",
        "Monthly summary",
        "Email support",
      ],
      onInquire: () => onInquire("Basic"),
    },
    {
      name: "Starter",
      price: 199,
      minPrice: 100,
      maxPrice: 199,
      description: "Perfect for small businesses",
      features: [
        "Up to 200 transactions",
        "Monthly reports",
        "Email support",
        "Basic analytics",
      ],
      onInquire: () => onInquire("Starter"),
    },
    {
      name: "Growth",
      price: 399,
      minPrice: 200,
      maxPrice: 399,
      description: "For scaling enterprises",
      features: [
        "Higher volume transactions",
        "Priority support",
        "Advanced financial insights",
        "Custom reporting",
        "Quarterly strategy sessions",
      ],
      isPopular: true,
      onInquire: () => onInquire("Growth"),
    },
    {
      name: "Pro",
      price: 599,
      minPrice: 400,
      maxPrice: 599,
      description: "Advanced features for growing teams",
      features: [
        "Up to 2,000 transactions",
        "Dedicated support",
        "Advanced analytics",
        "Integration assistance",
      ],
      onInquire: () => onInquire("Pro"),
    },
    {
      name: "Enterprise",
      price: 1199,
      minPrice: 600,
      maxPrice: 1199,
      description: "Full enterprise package with premium services",
      features: [
        "Unlimited transactions",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 premium support",
        "Strategic consulting",
      ],
      onInquire: () => onInquire("Enterprise"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-200">
            <p className="text-emerald-700 font-black uppercase tracking-widest text-xs">
              💰 Transparent Pricing
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-emerald-950 tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-2xl text-slate-600 font-bold">
            Starting as low as{" "}
            <span className="text-emerald-600">$80</span>
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative rounded-[2rem] overflow-hidden transition-all duration-300 ${
                plan.isPopular
                  ? "md:scale-105 md:ring-2 md:ring-emerald-400 shadow-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200"
                  : "bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-xl"
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-3 text-center">
                  <div className="flex items-center justify-center gap-2 font-black uppercase tracking-widest text-xs">
                    <Zap className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`p-10 ${plan.isPopular ? "pt-20" : ""}`}>
                {/* Plan Name */}
                <h3 className="text-2xl font-black text-emerald-950 mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 font-medium mb-6 text-sm">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  {plan.isCustom ? (
                    <div className="text-4xl font-black text-emerald-600 mb-2">
                      Custom
                    </div>
                  ) : (
                    <>
                      {plan.minPrice !== undefined && plan.maxPrice !== undefined ? (
                        <span className="text-4xl font-black text-emerald-950">
                          ${plan.minPrice} - ${plan.maxPrice}
                        </span>
                      ) : (
                        <span className="text-5xl font-black text-emerald-950">
                          ${plan.price}
                        </span>
                      )}
                      <span className="text-slate-500 font-bold text-sm ml-2">
                        /month
                      </span>
                    </>
                  )}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={plan.onInquire}
                  className={`w-full py-4 px-6 rounded-xl font-black uppercase tracking-widest text-sm transition-all duration-300 mb-10 ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white shadow-lg hover:shadow-emerald-600/50"
                      : "bg-slate-100 hover:bg-emerald-50 text-emerald-950 border-2 border-slate-200 hover:border-emerald-300"
                  }`}
                >
                  {plan.isCustom ? "Schedule Consultation" : "Get Started"}
                </motion.button>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.isPopular
                          ? "text-emerald-600"
                          : "text-slate-400"
                      }`} />
                      <span className="text-slate-700 font-medium text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-slate-200"
        >
          <p className="text-slate-600 font-medium">
            All plans include a{" "}
            <span className="text-emerald-600 font-black">free consultation</span> with our strategists to ensure the right fit for your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
