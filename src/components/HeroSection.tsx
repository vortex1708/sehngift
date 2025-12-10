import { ArrowRight, Play, Percent, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import FloatingCard from "./FloatingCard";
import { useCountUp } from "@/hooks/useCountUp";

const HeroSection = () => {
  const { count, elementRef } = useCountUp(3722680, 2500);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  return (
    <section className="relative flex flex-col items-center pt-24 pb-8 px-4 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      
      {/* Total Made Counter Section */}
      <div 
        ref={elementRef}
        className="container mx-auto text-center relative z-10 min-h-[50vh] flex flex-col items-center justify-center"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-4">
          Total made by active members so far!
        </h2>
        <p className="text-5xl md:text-7xl lg:text-8xl font-black text-gradient-lime italic">
          ≈${formatNumber(count)}
        </p>
      </div>

      {/* Main Hero Section */}
      <div className="container mx-auto relative z-10 mt-8">
        {/* Opportunities Section */}
        <div className="bg-card/30 border border-border/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-primary tracking-wider">NEW TASKS ADDED DAILY!</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-foreground mb-8">
            Unlimited Possibilities &<br />Opportunities!
          </h2>

          {/* Icon Cards Row */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <div className="w-full md:w-1/3 h-28 rounded-2xl bg-gradient-lime flex items-center justify-center">
              <Play className="w-12 h-12 text-primary-foreground fill-current" />
            </div>
            <div className="w-full md:w-1/3 h-28 rounded-2xl bg-gradient-lime flex items-center justify-center">
              <BadgeCheck className="w-12 h-12 text-primary-foreground" />
            </div>
            <div className="w-full md:w-1/3 h-28 rounded-2xl bg-gradient-green flex items-center justify-center">
              <Percent className="w-12 h-12 text-foreground" />
            </div>
          </div>
        </div>

        {/* Earn Money Card */}
        <div className="bg-card/30 border border-border/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-primary tracking-wider">NEW TASKS ADDED HOURLY</span>
          </div>
          
          <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
            <span className="text-foreground">Earn money</span>{" "}
            <span className="text-muted-foreground">and rewards fast with over 100+ available tasks!</span>
          </h3>

          <div className="mt-8">
            <Button variant="outline" size="lg" asChild className="group border-border/50 bg-card/50">
              <Link to="/dashboard">
                Start Now!
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating Cards Section - More Distinct */}
        <div className="relative py-12">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-3xl" />
          
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="text-gradient-lime">FASTCASH</span>
              <span className="text-muted-foreground text-2xl md:text-3xl align-top">.CC</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4 mb-4">
              Watch YT Videos, Browse Google, Complete Tasks, and more to{" "}
              <span className="text-foreground font-semibold">
                make your first $1,000 and beyond!
              </span>
            </p>

            <div className="mt-8">
              <Button variant="hero" size="xl" asChild className="group">
                <Link to="/dashboard">
                  Access Dashboard
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Floating cards */}
          <div className="relative mt-12 h-64 md:h-80">
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
      </div>
    </section>
  );
};

export default HeroSection;
