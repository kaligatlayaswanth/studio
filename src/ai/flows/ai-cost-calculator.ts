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
  model: 'gemma-7b-it',
  input: {schema: CalculateAiSavingsInputSchema},
  output: {schema: CalculateAiSavingsOutputSchema},
  prompt: `You are an expert in cost-benefit analysis, particularly in the context of AI automation.

  Based on the following inputs, calculate the estimated time saved, cost savings, and the return on investment (ROI) timeframe for implementing an AI solution.

  Current Monthly Cost: {{{currentMonthlyCost}}}
  Current Hours Spent: {{{currentHoursSpent}}}
  Hourly Rate: {{{hourlyRate}}}
  AI Implementation Cost: {{{aiImplementationCost}}}
  AI Monthly Cost: {{{aiMonthlyCost}}}

  Provide a concise summary of the cost savings analysis, highlighting the key benefits of AI automation.

  Make sure all numbers in the output are rounded to 2 decimal places.

  Estimated Time Saved: The difference between current hours spent and the AI's impact on reducing those hours.
  Estimated Cost Savings: The difference between the current monthly cost and the AI monthly cost, factoring in the hourly rate.
  ROI (Months): The number of months it takes to recover the initial AI implementation cost, based on the monthly cost savings.
  Summary: A brief explanation of the financial advantages of adopting the AI solution.
  `,
});

const calculateAiSavingsFlow = ai.defineFlow(
  {
    name: 'calculateAiSavingsFlow',
    inputSchema: CalculateAiSavingsInputSchema,
    outputSchema: CalculateAiSavingsOutputSchema,
  },
  async input => {
    const {currentMonthlyCost, currentHoursSpent, hourlyRate, aiImplementationCost, aiMonthlyCost} = input;

    // Calculate estimated time saved (assuming AI reduces hours spent)
    const estimatedTimeSaved = currentHoursSpent * 0.75; // Assuming 75% reduction

    // Calculate estimated cost savings
    const estimatedCostSavings = currentMonthlyCost - aiMonthlyCost;

    // Calculate ROI (in months)
    const roiMonths = aiImplementationCost / estimatedCostSavings;

    const {output} = await prompt({
      ...input,
      estimatedTimeSaved,
      estimatedCostSavings,
      roiMonths,
    });
    return {
      estimatedTimeSaved: parseFloat(estimatedTimeSaved.toFixed(2)),
      estimatedCostSavings: parseFloat(estimatedCostSavings.toFixed(2)),
      roiMonths: parseFloat(roiMonths.toFixed(2)),
      summary: output?.summary ?? 'No summary available.',
    };
  }
);
