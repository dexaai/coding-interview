import { getJson } from 'serpapi';
import { EnvVars } from './env-vars';

/**
 * Use this to get the Google search results for a query.
 * Docs: https://github.com/serpapi/serpapi-javascript
 */

// @TODO: Add a type for the search result.
export type SearchResult = unknown;

/** Search Google for the given query using the SerpApi service. */
export async function searchGoogle(query: string): Promise<SearchResult[]> {
  // @TODO: Use the SerpApi SDK to perform a Google search.
  return [];
}
