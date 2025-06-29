"use client";

import { useState, useRef, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Loader2, User, Bot } from "lucide-react";
import { getFaqAnswer } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

const faqs = [
    {
        question: "How long does AI implementation take?",
        answer: "Rapid deployment is one of our key features. Depending on the complexity, a solution can be deployed in days, not months. We focus on no-code/low-code solutions for quick turnarounds."
    },
    {
        question: "Is AI automation secure?",
        answer: "Absolutely. We prioritize enterprise-grade security in all our solutions. This includes automated security monitoring, toxic content detection, and ensuring compliance with privacy standards."
    },
    {
        question: "Will this integrate with our existing tools?",
        answer: "Yes, our core service is creating seamless integrations. We support a wide range of platforms like Gmail, Slack, Notion, HubSpot, and more, ensuring the AI agents work within your current ecosystem."
    },
    {
        question: "What kind of ROI can we expect?",
        answer: "Our clients typically see significant ROI through cost reduction in staffing, massive time savings on manual tasks, and increased efficiency. Use our AI ROI Calculator on this page to get a personalized estimate!"
    }
];

const KNOWLEDGE_BASE = faqs.map(faq => `Q: ${faq.question}\nA: ${faq.answer}`).join('\n\n');

interface Message {
    sender: 'user' | 'bot';
    text: string;
}

const FaqSection = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const response = await getFaqAnswer({ question: input, knowledge: KNOWLEDGE_BASE });

    setIsLoading(false);

    if (response.error) {
        toast({
            title: "Error",
            description: response.error,
            variant: "destructive",
        });
        const errorMessage: Message = { sender: 'bot', text: 'Sorry, I had trouble getting an answer. Please try again.' };
        setMessages(prev => [...prev, errorMessage]);
    } else if (response.success) {
        const botMessage: Message = { sender: 'bot', text: response.success.answer };
        setMessages(prev => [...prev, botMessage]);
    }
  };

  return (
    <section id="faq" className="py-20 lg:py-32 bg-transparent">
      <div className="container px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Have questions? We have answers. If you don't find what you're looking for, ask our AI bot!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
          
          <div className="flex flex-col h-[500px] rounded-lg border border-white/10 bg-black/20 p-4">
            <h3 className="font-semibold mb-2 text-center">Ask our AI Assistant</h3>
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto space-y-4 pr-2">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.sender === 'bot' && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Bot className="w-5 h-5 text-primary-foreground" /></div>}
                        <div className={`max-w-xs md:max-w-md rounded-lg p-3 ${msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                            <p className="text-sm">{msg.text}</p>
                        </div>
                         {msg.sender === 'user' && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center"><User className="w-5 h-5" /></div>}
                    </div>
                ))}
                {isLoading && (
                    <div className="flex items-start gap-2 justify-start">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center"><Bot className="w-5 h-5 text-primary-foreground" /></div>
                        <div className="max-w-xs md:max-w-md rounded-lg p-3 bg-secondary">
                            <Loader2 className="w-5 h-5 animate-spin" />
                        </div>
                    </div>
                )}
            </div>
            <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-background"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
