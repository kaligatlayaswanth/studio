"use server";

import { z } from "zod";
import { calculateAiSavings, CalculateAiSavingsInput } from "@/ai/flows/ai-cost-calculator";
import { faqChatbot, FAQChatbotInput } from "@/ai/flows/faq-chatbot";

const costCalculatorSchema = z.object({
  currentMonthlyCost: z.number().positive(),
  currentHoursSpent: z.number().positive(),
  hourlyRate: z.number().positive(),
  aiImplementationCost: z.number().positive(),
  aiMonthlyCost: z.number().positive(),
});

export async function getAiSavings(data: CalculateAiSavingsInput) {
  const validatedData = costCalculatorSchema.safeParse(data);
  if (!validatedData.success) {
    return { error: "Invalid input." };
  }
  try {
    const result = await calculateAiSavings(validatedData.data);
    return { success: result };
  } catch (e) {
    return { error: "Failed to calculate savings." };
  }
}

const faqSchema = z.object({
  question: z.string().min(1),
  knowledge: z.string().optional(),
});

export async function getFaqAnswer(data: Pick<FAQChatbotInput, 'question' | 'knowledge'>) {
  const validatedData = faqSchema.safeParse(data);
  if (!validatedData.success) {
    return { error: "Invalid question." };
  }
  try {
    const result = await faqChatbot(validatedData.data);
    return { success: result };
  } catch (e) {
    return { error: "Failed to get an answer." };
  }
}
