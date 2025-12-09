import { cn } from "@/lib/utils";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: string;
  className?: string;
}

const BenefitCard = ({ icon, title, description, highlight, className }: BenefitCardProps) => {
  return (
    <div className={cn(
      "bg-gradient-card border border-border/50 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
      className
    )}>
      <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6">
        <span className="text-primary text-2xl font-bold">{icon}</span>
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      
      <p className="text-muted-foreground">
        {highlight && <span className="text-muted-foreground">{highlight} </span>}
        <span className="text-foreground">{description}</span>
      </p>
    </div>
  );
};

export default BenefitCard;
