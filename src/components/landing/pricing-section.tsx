import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingTiers = [
    {
        name: "Starter",
        price: "$499",
        period: "/month",
        description: "For startups and small businesses looking to get started with AI.",
        features: [
            "1-2 Automated Workflows",
            "Basic Email & Chatbot Automation",
            "Standard Integrations",
            "Email Support"
        ],
        cta: "Get Started",
        isPopular: false,
    },
    {
        name: "Professional",
        price: "$1,499",
        period: "/month",
        description: "For growing companies ready to scale their operations with AI.",
        features: [
            "Up to 10 Automated Workflows",
            "Advanced AI Agent Customization",
            "Premium Integrations (CRM, etc.)",
            "Priority Support & 24/7 Monitoring"
        ],
        cta: "Choose Professional",
        isPopular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For large organizations with complex, mission-critical automation needs.",
        features: [
            "Unlimited Workflows",
            "Fully Bespoke AI Solutions",
            "Enterprise-Grade Security & Compliance",
            "Dedicated Account Manager"
        ],
        cta: "Contact Sales",
        isPopular: false,
    },
]

const PricingSection = () => {
    return (
        <section id="pricing" className="py-20 lg:py-32">
            <div className="container px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Pricing for Every Stage
                    </h2>
                    <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                        Simple, transparent pricing that scales with your business. No hidden fees.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {pricingTiers.map((tier) => (
                        <Card key={tier.name} className={`flex flex-col bg-black/20 backdrop-blur-sm border-white/10 ${tier.isPopular ? 'border-primary ring-2 ring-primary' : ''}`}>
                            {tier.isPopular && <div className="px-3 py-1 text-sm text-white bg-primary text-center rounded-t-lg font-semibold">Most Popular</div>}
                            <CardHeader>
                                <CardTitle>{tier.name}</CardTitle>
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-bold">{tier.price}</span>
                                    {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
                                </div>
                                <CardDescription>{tier.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <ul className="space-y-2">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-center">
                                            <Check className="h-4 w-4 mr-2 text-accent" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant={tier.isPopular ? "default" : "outline"}>{tier.cta}</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
