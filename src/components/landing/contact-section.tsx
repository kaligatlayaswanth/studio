import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32">
        <div className="container px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Automate Everything?
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Get your personalized AI audit and discover how much time and money you can save.
            </p>
            <div className="mt-8">
                <Button asChild size="lg">
                    <a href="mailto:hello@lovable.ai">Get in Touch</a>
                </Button>
            </div>
        </div>
    </section>
  )
}

export default ContactSection;
