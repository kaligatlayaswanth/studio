'use server';

/**
 * @fileOverview A flow that calculates the potential time and cost savings of AI automation.
 *
 * - calculateAiSavings - A function that handles the AI cost calculation process.
 * - CalculateAiSavingsInput - The input type for the calculateAiSavings function.
 * - CalculateAiSavingsOutput - The return type for the calculateAiSavings function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CalculateAiSavingsInputSchema = z.object({
  currentMonthlyCost: z
    .number()
    .describe('The current monthly cost of the task being automated.'),
  currentHoursSpent: z
    .number()
    .describe('The current number of hours spent on the task per month.'),
  hourlyRate: z.number().describe('The average hourly rate of the employee.'),
  aiImplementationCost: z
    .number()
    .describe('The estimated cost to implement the AI solution.'),
  aiMonthlyCost: z.number().describe('The estimated monthly cost of the AI solution.'),
});
export type CalculateAiSavingsInput = z.infer<typeof CalculateAiSavingsInputSchema>;

const CalculateAiSavingsOutputSchema = z.object({
  estimatedTimeSaved: z
    .number()
    .describe('The estimated time saved per month in hours.'),
  estimatedCostSavings: z
    .number()
    .describe('The estimated cost savings per month.'),
  roiMonths: z
    .number()
    .describe('The number of months to recover the AI implementation cost.'),
  summary: z.string().describe('A summary of the cost savings analysis.'),
});
export type CalculateAiSavingsOutput = z.infer<typeof CalculateAiSavingsOutputSchema>;

export async function calculateAiSavings(
  input: CalculateAiSavingsInput
): Promise<CalculateAiSavingsOutput> {
  return calculateAiSavingsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'calculateAiSavingsPrompt',
  model: 'alibaba/qwen-2-7b-instruct',
  input: {schema: CalculateAiSavingsInputSchema},
  output: {schema: CalculateAiSavingsOutputSchema},
  prompt: `You are an expert in cost-benefit analysis for AI automation.
Based on the provided inputs, calculate the estimated time saved, cost savings, and the return on investment (ROI) timeframe.

Inputs:
- Current Monthly Cost: {{{currentMonthlyCost}}}
- Current Hours Spent: {{{currentHoursSpent}}}
- Hourly Rate: {{{hourlyRate}}}
- AI Implementation Cost: {{{aiImplementationCost}}}
- AI Monthly Cost: {{{aiMonthlyCost}}}

Calculation Instructions:
1.  **Estimated Time Saved**: Assume AI automation reduces the "Current Hours Spent" by 75%. Calculate the total hours saved per month.
2.  **Estimated Cost Savings**: This is the "Current Monthly Cost" minus the "AI Monthly Cost".
3.  **ROI (Months)**: This is the "AI Implementation Cost" divided by the "Estimated Cost Savings". If "Estimated Cost Savings" is zero or negative, set "roiMonths" to 999.
4.  **Summary**: Provide a concise, optimistic summary of the cost savings analysis, highlighting the key benefits of AI automation.

You MUST respond with a valid JSON object that adheres to the defined output schema. All numerical outputs should be rounded to two decimal places.
`,
});

const calculateAiSavingsFlow = ai.defineFlow(
  {
    name: 'calculateAiSavingsFlow',
    inputSchema: CalculateAiSavingsInputSchema,
    outputSchema: CalculateAiSavingsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('The AI model failed to produce a valid JSON output.');
    }
    return output;
  }
);
