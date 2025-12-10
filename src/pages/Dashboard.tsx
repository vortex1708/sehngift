import Header from "@/components/Header";
import OfferCard from "@/components/OfferCard";
import Logo from "@/components/Logo";
import { Apple, ShoppingCart, Tv, Target } from "lucide-react";

const Dashboard = () => {
  const handleOfferClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const offers = [
    {
      id: 1,
      image: <Apple className="w-16 h-16 md:w-24 md:h-24" />,
      category: "GIFT CARD",
      title: "Apple $1,000 Gift Card",
      value: "$1,000",
      isPopular: true,
      variant: "green" as const,
      url: "https://trkfy.org/aff_c?offer_id=1701&aff_id=14896",
    },
    {
      id: 2,
      image: <ShoppingCart className="w-16 h-16 md:w-24 md:h-24" />,
      category: "GIFT CARD",
      title: "Walmart $750 Gift Card",
      value: "$750",
      isPopular: false,
      variant: "lime" as const,
      url: "https://gloffers.org/aff_c?offer_id=1157&aff_id=14896",
    },
    {
      id: 3,
      image: <Tv className="w-16 h-16 md:w-24 md:h-24" />,
      category: "JOB",
      title: "Netflix Reviewer Job",
      value: "$200/hr",
      isPopular: true,
      variant: "green" as const,
      url: "https://trkio.org/aff_c?offer_id=2216&aff_id=14896",
    },
    {
      id: 4,
      image: <Target className="w-16 h-16 md:w-24 md:h-24" />,
      category: "GIFT CARD",
      title: "Target $750 Gift Card",
      value: "$750",
      isPopular: false,
      variant: "lime" as const,
      url: "https://glctrk.org/aff_c?offer_id=1381&aff_id=14896",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 pb-16 px-4">
        <div className="container mx-auto">
          {/* Welcome section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black text-gradient-lime mb-4">
              WELCOME
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Complete tasks daily for a{" "}
              <span className="text-foreground font-semibold">
                chance to be rewarded $3,000 this month!
              </span>
            </p>
          </div>

          {/* Offers grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {offers.map((offer) => (
              <OfferCard
                key={offer.id}
                image={offer.image}
                category={offer.category}
                title={offer.title}
                value={offer.value}
                isPopular={offer.isPopular}
                variant={offer.variant}
                buttonText="Start Now"
                onClick={() => handleOfferClick(offer.url)}
              />
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground text-sm">
              New offers added daily. Check back regularly for more opportunities!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <Logo />
          <p className="text-muted-foreground text-sm mt-4">
            © 2025 FastCash.gg - All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
