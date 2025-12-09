import { BadgeCheck, DollarSign, Check, Globe } from "lucide-react";
import BenefitCard from "./BenefitCard";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <BadgeCheck className="w-8 h-8" />,
      title: "Verified Guides, Tasks & Offers",
      highlight: "All Fast Cash guides, tasks, and jobs are",
      description: "verified and ready to go! (10/Dec/2025)",
    },
    {
      icon: "€$£",
      title: "Super Fast Payouts!",
      highlight: "Get paid almost instantly upon",
      description: "successful completion of your task! (No waiting!)",
    },
    {
      icon: "$300+",
      title: "Many High Paying Tasks & Guides",
      highlight: "Earn up to $300 in one hour",
      description: "with daily high-paying task drops and guides!",
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: "No Experience Needed",
      highlight: "No experience is needed",
      description: "as each task has step-by-step (click-by-click) instructions!",
    },
    {
      icon: "WORLD\nWIDE",
      title: "Worldwide Available",
      highlight: "All tasks, guides, offers, and jobs are",
      description: "available worldwide! (All countries!)",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-primary text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            BENEFITS
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Make your first{" "}
            <span className="text-gradient-lime">$1,000 Online</span> with Fast Cash!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              highlight={benefit.highlight}
              description={benefit.description}
              className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
