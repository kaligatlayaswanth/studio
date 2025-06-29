import { Button } from "@/components/ui/button";
import { BrainCircuit } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between px-4 md:px-8 bg-background/80 backdrop-blur-sm border-b border-white/10">
      <a href="#" className="flex items-center gap-2">
        <BrainCircuit className="w-8 h-8 text-primary" />
        <h1 className="text-xl font-bold text-foreground">Lovable.ai</h1>
      </a>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <a href="#services" className="hover:text-primary transition-colors">Services</a>
        <a href="#integrations" className="hover:text-primary transition-colors">Integrations</a>
        <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
        <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
      </nav>
      <Button>Get Your Free AI Audit</Button>
    </header>
  );
};

export default Header;
