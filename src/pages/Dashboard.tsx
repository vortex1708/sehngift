import Header from "@/components/Header";
import OfferCard from "@/components/OfferCard";
import Logo from "@/components/Logo";
import appleLogo from "@/assets/apple-logo.png";
import walmartLogo from "@/assets/walmart-logo.jpeg";
import netflixLogo from "@/assets/netflix-logo.jpeg";
import targetLogo from "@/assets/target-logo.png";
import crumblLogo from "@/assets/crumbl-logo.jpeg";

const Dashboard = () => {
  const handleOfferClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const offers = [
    {
      id: 1,
      image: appleLogo,
      category: "GIFT CARD",
      title: "Apple $1,000 Gift Card",
      value: "$1,000",
      isPopular: true,
      variant: "green" as const,
      url: "https://gloffers.org/aff_c?offer_id=1168&aff_id=14896",
      bgClass: "bg-white",
    },
    {
      id: 2,
      image: walmartLogo,
      category: "GIFT CARD",
      title: "Walmart $750 Gift Card",
      value: "$750",
      isPopular: false,
      variant: "lime" as const,
      url: "https://gloffers.org/aff_c?offer_id=1157&aff_id=14896",
      bgClass: "bg-[#0071ce]",
    },
    {
      id: 3,
      image: netflixLogo,
      category: "JOB",
      title: "Netflix Reviewer Job",
      value: "$200/hr",
      isPopular: true,
      variant: "green" as const,
      url: "https://trkio.org/aff_c?offer_id=2216&aff_id=14896",
      bgClass: "bg-black",
    },
    {
      id: 4,
      image: targetLogo,
      category: "GIFT CARD",
      title: "Target $750 Gift Card",
      value: "$750",
      isPopular: false,
      variant: "lime" as const,
      url: "https://glctrk.org/aff_c?offer_id=1381&aff_id=14896",
      bgClass: "bg-white",
    },
    {
      id: 5,
      image: crumblLogo,
      category: "GIFT CARD",
      title: "Crumbl Cookies $100 Gift Card",
      value: "$100",
      isPopular: false,
      variant: "lime" as const,
      url: "https://glctrk.org/aff_c?offer_id=1176&aff_id=14896",
      bgClass: "bg-[#fce4ec]",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                imageBgClass={offer.bgClass}
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
            © 2025 FastCash.cc - All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;