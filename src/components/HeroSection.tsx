import { ArrowRight, Play, DollarSign, Percent } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import FloatingCard from "./FloatingCard";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
          <span className="text-gradient-lime">FASTCASH</span>
          <span className="text-muted-foreground text-2xl md:text-3xl align-top">.GG</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
          Watch YT Videos, Browse Google, Complete Tasks, and more to{" "}
          <span className="text-foreground font-semibold">
            make your first $1,000 and beyond!
          </span>
        </p>

        <div className="mt-10">
          <Button variant="hero" size="xl" asChild className="group">
            <Link to="/dashboard">
              Access Dashboard
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Floating cards */}
        <div className="relative mt-16 h-64 md:h-80">
          <FloatingCard 
            icon={<span>€$£</span>}
            variant="green"
            className="absolute left-1/4 -translate-x-1/2 top-0 animate-float -rotate-12"
          />
          <FloatingCard 
            icon={<Play className="w-10 h-10 fill-current" />}
            variant="lime"
            className="absolute left-1/2 -translate-x-1/2 top-4 animate-float-delayed z-10"
          />
          <FloatingCard 
            icon={<Percent className="w-8 h-8" />}
            variant="green"
            className="absolute right-1/4 translate-x-1/2 top-0 animate-float-slow rotate-12"
          />
        </div>

        {/* Partner logos placeholder */}
        <div className="mt-8 flex items-center justify-center gap-8 opacity-50">
          <span className="text-sm font-medium text-muted-foreground">facebook</span>
          <span className="text-sm font-medium text-muted-foreground">TAPMOB</span>
          <span className="text-sm font-medium text-muted-foreground">Spotify</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
