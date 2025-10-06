import { Brain, FileCheck, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI Risk Scoring",
    description: "Automatically score projects based on credibility, financial viability, and market potential using advanced AI algorithms.",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    icon: FileCheck,
    title: "Document Verification",
    description: "Scan land titles, CAC documents, and contracts for authenticity. Detect potential red flags before you invest.",
    gradient: "from-secondary/10 to-secondary/5",
  },
  {
    icon: Compass,
    title: "Investment Copilot",
    description: "Get AI-powered guidance to compare projects, understand risks, and make informed investment decisions with confidence.",
    gradient: "from-accent/10 to-accent/5",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Smart Tools for Smarter Investments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leverage AI-powered due diligence to minimize risks and maximize returns on your African investments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-border bg-gradient-to-br from-card to-card/50 hover:shadow-[var(--shadow-large)] transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
