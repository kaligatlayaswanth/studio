"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAiSavings } from "@/app/actions";
import type { CalculateAiSavingsOutput } from "@/ai/flows/ai-cost-calculator";
import { Loader2, TrendingUp, Clock, BadgeDollarSign, CalendarClock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  currentMonthlyCost: z.coerce.number().min(1, "Must be greater than 0"),
  currentHoursSpent: z.coerce.number().min(1, "Must be greater than 0"),
  hourlyRate: z.coerce.number().min(1, "Must be greater than 0"),
  aiImplementationCost: z.coerce.number().min(1, "Must be greater than 0"),
  aiMonthlyCost: z.coerce.number().min(1, "Must be greater than 0"),
});

type FormData = z.infer<typeof formSchema>;

const CostCalculatorSection = () => {
  const [result, setResult] = useState<CalculateAiSavingsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentMonthlyCost: 1000,
      currentHoursSpent: 40,
      hourlyRate: 50,
      aiImplementationCost: 5000,
      aiMonthlyCost: 200,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setResult(null);
    const response = await getAiSavings(data);
    setIsLoading(false);

    if (response.error) {
      toast({
        title: "Error",
        description: response.error,
        variant: "destructive",
      });
    } else if (response.success) {
      setResult(response.success);
    }
  };

  const ResultCard = ({ icon, title, value, unit, description }: { icon: React.ReactNode, title: string, value: number, unit: string, description: string }) => (
      <Card className="bg-white/5 border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{title}</CardTitle>
              {icon}
          </CardHeader>
          <CardContent>
              <div className="text-2xl font-bold">{value.toLocaleString()} {unit}</div>
              <p className="text-xs text-muted-foreground">{description}</p>
          </CardContent>
      </Card>
  )

  return (
    <section id="calculator" className="py-20 lg:py-32">
      <div className="container px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            AI ROI Calculator
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Estimate your potential time and cost savings with our AI automation.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="bg-black/20 backdrop-blur-sm border-white/10 p-6">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="currentMonthlyCost">Current Monthly Cost ($)</Label>
                  <Input id="currentMonthlyCost" type="number" {...form.register("currentMonthlyCost")} />
                   {form.formState.errors.currentMonthlyCost && <p className="text-destructive text-sm mt-1">{form.formState.errors.currentMonthlyCost.message}</p>}
                </div>
                <div>
                  <Label htmlFor="currentHoursSpent">Monthly Hours Spent</Label>
                  <Input id="currentHoursSpent" type="number" {...form.register("currentHoursSpent")} />
                  {form.formState.errors.currentHoursSpent && <p className="text-destructive text-sm mt-1">{form.formState.errors.currentHoursSpent.message}</p>}
                </div>
                <div>
                  <Label htmlFor="hourlyRate">Average Hourly Rate ($)</Label>
                  <Input id="hourlyRate" type="number" {...form.register("hourlyRate")} />
                  {form.formState.errors.hourlyRate && <p className="text-destructive text-sm mt-1">{form.formState.errors.hourlyRate.message}</p>}
                </div>
                <div>
                  <Label htmlFor="aiImplementationCost">AI Implementation Cost ($)</Label>
                  <Input id="aiImplementationCost" type="number" {...form.register("aiImplementationCost")} />
                  {form.formState.errors.aiImplementationCost && <p className="text-destructive text-sm mt-1">{form.formState.errors.aiImplementationCost.message}</p>}
                </div>
                <div className="sm:col-span-2">
                   <Label htmlFor="aiMonthlyCost">AI Monthly Cost ($)</Label>
                   <Input id="aiMonthlyCost" type="number" {...form.register("aiMonthlyCost")} />
                   {form.formState.errors.aiMonthlyCost && <p className="text-destructive text-sm mt-1">{form.formState.errors.aiMonthlyCost.message}</p>}
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Calculate Savings
              </Button>
            </form>
          </Card>
          <div className="flex flex-col justify-center">
            {isLoading && (
              <div className="flex justify-center items-center h-full">
                <Loader2 className="h-16 w-16 animate-spin text-primary" />
              </div>
            )}
            {result && (
              <div className="space-y-4">
                <Card className="bg-green-500/10 border-accent/50">
                    <CardHeader>
                        <CardTitle className="text-accent">Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{result.summary}</p>
                    </CardContent>
                </Card>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <ResultCard icon={<Clock className="h-4 w-4 text-muted-foreground"/>} title="Time Saved / Month" value={result.estimatedTimeSaved} unit="Hours" description="Estimated reduction in manual work."/>
                    <ResultCard icon={<BadgeDollarSign className="h-4 w-4 text-muted-foreground"/>} title="Cost Savings / Month" value={result.estimatedCostSavings} unit="$" description="Monthly operational cost reduction."/>
                    <ResultCard icon={<CalendarClock className="h-4 w-4 text-muted-foreground"/>} title="ROI Payback Period" value={result.roiMonths} unit="Months" description="Time to recover initial investment."/>
                    <ResultCard icon={<TrendingUp className="h-4 w-4 text-muted-foreground"/>} title="Annual Savings" value={result.estimatedCostSavings * 12} unit="$" description="Projected savings over a year."/>
                </div>
              </div>
            )}
            {!isLoading && !result && (
              <div className="flex flex-col items-center justify-center h-full rounded-lg border-2 border-dashed border-white/20 p-8 text-center">
                <div className="text-primary"><TrendingUp size={48} /></div>
                <h3 className="mt-4 text-lg font-semibold">Your results will appear here.</h3>
                <p className="mt-1 text-sm text-muted-foreground">Fill out the form to see your potential ROI.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculatorSection;
