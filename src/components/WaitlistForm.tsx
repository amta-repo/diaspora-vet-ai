import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

const countries = [
  "United States", "United Kingdom", "Canada", "Germany", "France", 
  "Netherlands", "Sweden", "Norway", "Australia", "Nigeria", "Kenya", 
  "South Africa", "Ghana", "Other"
];

const investmentInterests = [
  "Real Estate",
  "Small & Medium Enterprises (SME)",
  "Agriculture",
  "Technology",
  "Other"
];

const amountRanges = [
  "Less than $10,000",
  "$10,000 - $50,000",
  "$50,000 - $100,000",
  "Above $100,000"
];

export const WaitlistForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    investmentInterest: [] as string[],
    amountRange: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.consent) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in your email and accept the terms.",
        variant: "destructive",
      });
      return;
    }

    // In production, this would send to backend/Google Sheets/Airtable
    console.log("Waitlist submission:", formData);
    
    setSubmitted(true);
    toast({
      title: "Welcome to the Waitlist! 🎉",
      description: "We'll notify you when early access opens.",
    });
  };

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      investmentInterest: prev.investmentInterest.includes(interest)
        ? prev.investmentInterest.filter(i => i !== interest)
        : [...prev.investmentInterest, interest]
    }));
  };

  if (submitted) {
    return (
      <Card className="max-w-2xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardContent className="p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            You're on the Waitlist!
          </h3>
          <p className="text-muted-foreground mb-6">
            Thank you for joining! We'll notify you as soon as early access opens. 
            Keep an eye on your inbox for updates and exclusive content.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            First 100 users get free vetting credits
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-[var(--shadow-large)]">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name (Optional)</Label>
            <Input
              id="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country of Residence</Label>
            <Select value={formData.country} onValueChange={(value) => setFormData({ ...formData, country: value })}>
              <SelectTrigger id="country">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label>Investment Interest (Select all that apply)</Label>
            <div className="grid sm:grid-cols-2 gap-3">
              {investmentInterests.map((interest) => (
                <div key={interest} className="flex items-center space-x-2">
                  <Checkbox
                    id={interest}
                    checked={formData.investmentInterest.includes(interest)}
                    onCheckedChange={() => toggleInterest(interest)}
                  />
                  <label
                    htmlFor={interest}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {interest}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="amountRange">Investment Amount Range (Optional)</Label>
            <Select value={formData.amountRange} onValueChange={(value) => setFormData({ ...formData, amountRange: value })}>
              <SelectTrigger id="amountRange">
                <SelectValue placeholder="Select amount range" />
              </SelectTrigger>
              <SelectContent>
                {amountRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-start space-x-2 pt-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
              required
            />
            <label
              htmlFor="consent"
              className="text-sm leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              I agree to receive updates about early access, product launches, and relevant investment content. *
            </label>
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full">
            Join the Waitlist
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            By joining, you'll be among the first 100 to receive free project vetting credits when we launch.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
