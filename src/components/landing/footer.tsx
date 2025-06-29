import { BrainCircuit } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10">
            <div className="container px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <BrainCircuit className="w-6 h-6 text-primary" />
                    <span className="font-bold">Repeater</span>
                </div>
                <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Repeater. All rights reserved.</p>
                <div className="flex gap-4">
                     <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a>
                     <a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
