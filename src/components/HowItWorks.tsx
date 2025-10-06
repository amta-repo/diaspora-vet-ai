import { Upload, ScanLine, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Documents",
    description: "Simply upload your investment project documents, including land titles, business plans, and contracts.",
    number: "01",
  },
  {
    icon: ScanLine,
    title: "AI Analysis",
    description: "Our AI engine analyzes documents for authenticity, extracts key data, and assesses investment risks.",
    number: "02",
  },
  {
    icon: CheckCircle,
    title: "Get Insights",
    description: "Receive comprehensive reports with risk scores, recommendations, and actionable insights.",
    number: "03",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How DIADDA Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to confident investment decisions
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-16 left-[16.666%] right-[16.666%] h-0.5 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative text-center animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative inline-flex mb-6">
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 h-10 w-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-[var(--shadow-medium)] z-10">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                  
                  {/* Icon Container */}
                  <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border border-border shadow-[var(--shadow-soft)]">
                    <step.icon className="h-12 w-12 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
