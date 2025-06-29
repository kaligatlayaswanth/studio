import {
  Mail,
  BotMessageSquare,
  PenTool,
  FileText,
  UsersRound,
  DatabaseZap,
  KanbanSquare,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <BotMessageSquare className="h-8 w-8" />,
    title: "Customer Support & Chatbots",
    description: "24/7 AI support agents for Telegram, Discord, WhatsApp with knowledge base integration.",
    isStar: true,
  },
  {
    icon: <Mail className="h-8 w-8" />,
    title: "Business Communication",
    description: "AI-powered email management, automated sorting, and multi-language support.",
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "Content Creation",
    description: "Automated blog posts, social media content, and YouTube video analysis with consistent brand voice.",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Document Processing",
    description: "AI-powered PDF analysis, resume screening, and invoice data extraction.",
  },
  {
    icon: <UsersRound className="h-8 w-8" />,
    title: "Sales & CRM Automation",
    description: "Automate lead qualification, meeting prep, and CRM data enrichment for Pipedrive and HubSpot.",
  },
  {
    icon: <DatabaseZap className="h-8 w-8" />,
    title: "Data Analysis & BI",
    description: "Natural language database querying and automated Google Analytics reporting.",
  },
  {
    icon: <KanbanSquare className="h-8 w-8" />,
    title: "Project Management",
    description: "Task automation in Notion, Airtable, and Linear, plus meeting transcriptions.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "Security & Compliance",
    description: "Automated security monitoring, toxic content detection, and risk assessment.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            AI Automation Services
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Scale Smart, Not Hard. We offer a wide range of AI services to automate your business.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden rounded-xl border-white/10 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 ${
                service.isStar ? 'border-primary ring-2 ring-primary shadow-lg shadow-primary/20' : ''
              }`}
            >
              {service.isStar && (
                <div className="absolute top-2 right-2 z-10 rounded-full bg-primary p-1.5 text-primary-foreground">
                  <Star className="h-4 w-4" />
                </div>
              )}
              <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/30 to-accent/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <CardHeader className="relative z-10 flex flex-row items-center gap-4">
                <div className="text-primary">{service.icon}</div>
                <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
