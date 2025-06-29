'use server';

/**
 * @fileOverview AI-Driven FAQ Chatbot flow.
 *
 * - faqChatbot - A function that handles the FAQ chatbot interaction.
 * - FAQChatbotInput - The input type for the faqChatbot function.
 * - FAQChatbotOutput - The return type for the faqChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FAQChatbotInputSchema = z.object({
  question: z.string().describe('The user question for the FAQ chatbot.'),
  knowledge: z
    .string()
    .optional()
    .describe(
      'Existing knowledge base content (e.g., FAQs, documentation) to provide context for answering the question.'
    ),
  additionalContext: z
    .string()
    .optional()
    .describe(
      'Any additional relevant context provided by the user to help answer the question.'
    ),
});
export type FAQChatbotInput = z.infer<typeof FAQChatbotInputSchema>;

const FAQChatbotOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question.'),
});
export type FAQChatbotOutput = z.infer<typeof FAQChatbotOutputSchema>;

export async function faqChatbot(input: FAQChatbotInput): Promise<FAQChatbotOutput> {
  return faqChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'faqChatbotPrompt',
  model: 'google/gemma-7b-it',
  input: {schema: FAQChatbotInputSchema},
  output: {schema: FAQChatbotOutputSchema},
  prompt: `You are an AI-driven FAQ chatbot designed to answer user questions based on a provided knowledge base and any additional context the user provides.

Knowledge Base:
{{#if knowledge}}
{{{knowledge}}}
{{else}}
There is no existing knowledge base provided.
{{/if}}

Additional Context:
{{#if additionalContext}}
{{{additionalContext}}}
{{else}}
There is no additional context provided.
{{/if}}

Question: {{{question}}}

Answer the user's question clearly and concisely, referencing the knowledge base and additional context where relevant. If the knowledge base does not contain relevant information, use your own knowledge to provide a helpful answer. If there is no knowledge base or additional context, answer from your own knowledge base.

You MUST respond with a valid JSON object that adheres to the defined output schema.
`,
});

const faqChatbotFlow = ai.defineFlow(
  {
    name: 'faqChatbotFlow',
    inputSchema: FAQChatbotInputSchema,
    outputSchema: FAQChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('The AI model failed to produce a valid JSON output.');
    }
    return output;
  }
);
