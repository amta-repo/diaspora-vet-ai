import { Users, Gift } from "lucide-react";

export const SocialProof = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left space-y-4 animate-fade-in">
              <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border shadow-[var(--shadow-soft)]">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Investors on Waitlist</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Join hundreds of diaspora investors who are ready to make smarter investment decisions in Africa.
              </p>
            </div>
            
            <div className="text-center md:text-left space-y-4 animate-fade-in-delay">
              <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <Gift className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold text-foreground">Early Adopter Bonus</div>
                  <div className="text-sm text-muted-foreground">First 100 users get free credits</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Be among the first 100 users to access DIADDA and receive complimentary project vetting credits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
