import { ChatModel, createOpenAIClient } from '@dexaai/dexter';
import { EnvVars } from './env-vars';
import type { SearchResult } from './serpapi';

/**
 * Use this to make requests to the OpenAI API.
 * Docs: https://github.com/dexaai/dexter
 */

/** Client for making requests to the OpenAI API. */
const openaiClient = createOpenAIClient({ apiKey: EnvVars.openAI() });

/** Use ChatModel to make requests to the chat completion endpoint. */
const chatModel = new ChatModel({
  client: openaiClient,
  debug: true,
  params: {
    model: 'gpt-3.5-turbo-1106',
  },
});

/** Summarize Google search results using the OpenAI API. */
export async function summarizeSearchResults({ query, searchResults }: {
  query: string;
  searchResults: SearchResult[];
}): Promise<string> {

  const openAIPrompt = `Summarize the internet search results for: "${query}".
   These are the results: 
     * ${searchResults.map(r => r.snippet).join('\n  *')}`;
  const result = await chatModel.run({ messages: [{ 'role': 'user', 'content': openAIPrompt }] });

  return result.message.content ?? '';
}
