import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.OPENROUTER_API_KEY,
      apiEndpoint: 'https://openrouter.ai/api/v1',
    }),
  ],
});
