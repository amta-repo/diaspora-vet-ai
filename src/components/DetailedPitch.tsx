import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, TrendingUp, Users, FileCheck, Zap } from "lucide-react";

interface DetailedPitchProps {
  onCTAClick: () => void;
}

export const DetailedPitch = ({ onCTAClick }: DetailedPitchProps) => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Pitch */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your Investment Guardian for African Opportunities
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              As a diaspora investor, you've felt it—the excitement of contributing to Africa's growth, 
              followed by the fear of being scammed or making an uninformed decision. DIADDA exists to 
              change that narrative forever.
            </p>
          </div>

          {/* The Problem */}
          <div className="bg-muted/50 rounded-2xl p-8 mb-12 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-destructive" />
              The Challenge You Face
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>You're approached with "guaranteed returns" on land, real estate, or business ventures—but how do you verify legitimacy from thousands of miles away?</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Document fraud is rampant: fake land titles, forged CAC registrations, and manipulated financial statements.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Traditional due diligence is expensive, time-consuming, and often requires you to physically be there.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>You lack the local expertise to assess market viability, regulatory compliance, and project credibility.</span>
              </p>
            </div>
          </div>

          {/* The Solution */}
          <div className="mb-12 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              How DIADDA Solves This
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              DIADDA is your AI-powered investment copilot—combining cutting-edge artificial intelligence 
              with deep African market intelligence to give you institutional-grade due diligence at a 
              fraction of the cost.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <FileCheck className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Instant Document Verification</h4>
                <p className="text-sm text-muted-foreground">
                  Upload land titles, business registrations, contracts, and financial statements. 
                  Our AI cross-references official databases and flags inconsistencies or red flags.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <TrendingUp className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-semibold text-foreground mb-2">AI Risk Scoring</h4>
                <p className="text-sm text-muted-foreground">
                  Get a comprehensive risk score (0-100) based on financial viability, market potential, 
                  regulatory compliance, and promoter credibility.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <Users className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Market Intelligence</h4>
                <p className="text-sm text-muted-foreground">
                  Access real-time data on property values, business performance benchmarks, and sector 
                  trends across African markets.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <Shield className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Investment Copilot</h4>
                <p className="text-sm text-muted-foreground">
                  Ask questions, compare projects, and receive AI-guided recommendations tailored to 
                  your investment goals and risk tolerance.
                </p>
              </div>
            </div>
          </div>

          {/* Why It Matters */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mb-12 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">Why This Matters Now</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">$3.2B+ annually</strong> flows from the diaspora 
                  into African investments—but up to 40% face issues due to inadequate due diligence.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Traditional due diligence</strong> costs $5,000-$50,000 
                  and takes weeks. DIADDA delivers results in minutes for a fraction of the cost.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">AI + African expertise</strong>—we're not just 
                  another AI tool. Our models are trained on African regulatory frameworks, market dynamics, 
                  and fraud patterns.
                </p>
              </div>
            </div>
          </div>

          {/* Real-World Scenarios */}
          <div className="mb-12 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">Real-World Use Cases</h3>
            <div className="space-y-4">
              <div className="bg-card rounded-xl p-6 border-l-4 border-primary">
                <h4 className="font-semibold text-foreground mb-2">🏡 Real Estate Investment</h4>
                <p className="text-sm text-muted-foreground">
                  You're offered a land deal in Lagos. DIADDA verifies the Certificate of Occupancy, 
                  checks for encumbrances, assesses market value vs. asking price, and flags if the 
                  promoter has a history of disputes.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border-l-4 border-primary">
                <h4 className="font-semibold text-foreground mb-2">🌾 Agricultural Venture</h4>
                <p className="text-sm text-muted-foreground">
                  A farm cooperative seeks $50k for expansion. DIADDA analyzes their CAC documents, 
                  financial statements, soil reports, and market demand for their crops—giving you a 
                  clear go/no-go recommendation.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border-l-4 border-primary">
                <h4 className="font-semibold text-foreground mb-2">💼 SME Equity Investment</h4>
                <p className="text-sm text-muted-foreground">
                  A tech startup in Nairobi wants you to invest. DIADDA reviews their cap table, 
                  financial projections, founder backgrounds, and sector growth trends—helping you 
                  negotiate better terms.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="bg-muted/50 rounded-2xl p-8 mb-12 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4">Built by Diaspora, for Diaspora</h3>
            <p className="text-muted-foreground mb-4">
              Our founding team includes diaspora investors who've been burned, AI engineers from leading 
              tech companies, and African legal/financial experts. We understand your pain because we've 
              lived it.
            </p>
            <p className="text-muted-foreground">
              DIADDA is not about blocking opportunities—it's about empowering you to invest confidently, 
              support legitimate projects, and grow wealth while contributing to Africa's development.
            </p>
          </div>

          {/* Final CTA */}
          <div className="text-center animate-fade-in">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Invest with Confidence?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our waitlist to be among the first to access DIADDA. Early adopters get exclusive 
              benefits including free project vetting credits and priority onboarding.
            </p>
            <Button 
              size="lg" 
              onClick={onCTAClick}
              className="text-lg px-8 py-6 h-auto"
            >
              Join the Waitlist Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
