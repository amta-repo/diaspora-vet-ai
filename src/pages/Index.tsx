import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { WaitlistForm } from "@/components/WaitlistForm";
import { SocialProof } from "@/components/SocialProof";
import { Footer } from "@/components/Footer";

const Index = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    waitlistSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onCTAClick={scrollToWaitlist} />
      
      <main>
        <Hero onCTAClick={scrollToWaitlist} />
        <Features />
        <HowItWorks />
        
        <section id="waitlist" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Join the Waitlist
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Be among the first to experience AI-powered investment due diligence. Early access coming soon.
              </p>
            </div>
            <WaitlistForm />
          </div>
        </section>
        
        <SocialProof />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
