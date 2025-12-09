import { cn } from "@/lib/utils";

interface FloatingCardProps {
  icon: React.ReactNode;
  className?: string;
  variant?: "green" | "lime";
}

const FloatingCard = ({ icon, className, variant = "green" }: FloatingCardProps) => {
  return (
    <div
      className={cn(
        "w-24 h-32 md:w-32 md:h-44 rounded-2xl flex items-center justify-center text-3xl md:text-4xl font-bold shadow-2xl",
        variant === "green" && "bg-gradient-green text-foreground",
        variant === "lime" && "bg-gradient-lime text-primary-foreground",
        className
      )}
    >
      {icon}
    </div>
  );
};

export default FloatingCard;
