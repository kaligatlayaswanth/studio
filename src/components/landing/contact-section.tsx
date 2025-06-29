import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32">
        <div className="container px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Ready to Automate Everything?
                    </h2>
                    <p className="text-muted-foreground md:text-xl">
                        Book a free, no-obligation consultation to get your personalized AI audit. Discover how much time and money you can save.
                    </p>
                     <p className="font-semibold text-lg">See AI in Action - Book a Demo!</p>
                </div>
                <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                     <form className="space-y-4">
                        <Input type="text" placeholder="Your Name" />
                        <Input type="email" placeholder="Work Email" />
                        <Input type="text" placeholder="Company Name" />
                        <Textarea placeholder="Tell us about your automation needs..." />
                        <Button type="submit" className="w-full">Book My Free Consultation</Button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection;
