import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-transparent pt-20">
      <div className="container z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Transform Your Business with AI Automation
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          From Manual to Magical: We help startups and businesses automate workflows using bespoke AI agents and seamless integrations.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Your Free AI Audit
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
            See AI in Action - Book Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
