import { Flame } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface OfferCardProps {
  image: string;
  category: string;
  categoryColor?: "green" | "lime";
  title: string;
  value?: string;
  isPopular?: boolean;
  buttonText?: string;
  variant?: "green" | "lime";
  onClick?: () => void;
  imageBgClass?: string;
}

const OfferCard = ({
  image,
  category,
  categoryColor = "green",
  title,
  value,
  isPopular,
  buttonText = "Start Now",
  variant = "green",
  onClick,
  imageBgClass,
}: OfferCardProps) => {
  return (
    <div className="bg-gradient-card border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 group">
      {/* Image section */}
      <div
        className={cn(
          "relative h-48 md:h-56 flex items-center justify-center p-6",
          imageBgClass || (variant === "green" ? "bg-gradient-green" : "bg-gradient-lime")
        )}
      >
        {isPopular && (
          <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold">
            <Flame className="w-3 h-3" />
            POPULAR
          </span>
        )}
        
        <img 
          src={image} 
          alt={title}
          className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
          style={{ maxHeight: '140px' }}
        />
      </div>

      {/* Content section */}
      <div className="p-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold",
              categoryColor === "green" && "bg-accent/50 text-primary",
              categoryColor === "lime" && "bg-primary/20 text-primary"
            )}
          >
            <span className={cn(
              "w-2 h-2 rounded-full",
              categoryColor === "green" && "bg-primary",
              categoryColor === "lime" && "bg-primary"
            )} />
            {category}
          </span>
          {value && (
            <span className="text-foreground font-bold">{value}</span>
          )}
        </div>

        <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">
          {title}
        </h3>

        <Button 
          variant="lime" 
          size="lg" 
          className="w-full md:w-auto"
          onClick={onClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default OfferCard;