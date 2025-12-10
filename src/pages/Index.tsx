import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import Logo from "@/components/Logo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        
        {/* Footer */}
        <footer className="py-8 border-t border-border/50">
          <div className="container mx-auto px-4 text-center">
            <Logo />
            <p className="text-muted-foreground text-sm mt-4">
              © 2025 FastCash.cc - All rights reserved
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
