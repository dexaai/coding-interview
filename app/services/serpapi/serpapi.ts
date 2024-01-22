import type { OrganicResult} from '~/services/serpapi/search-result';

import { getJson } from 'serpapi';
import { EnvVars } from '../env-vars';
import { TopLevelSearchResultsSchema } from '~/services/serpapi/search-result';

/**
 * Use this to get the Google search results for a query.
 * Docs: https://github.com/serpapi/serpapi-javascript
 */

export type SearchResult = OrganicResult;

/** Search Google for the given query using the SerpApi service. */
export async function searchGoogle(query: string): Promise<SearchResult[]> {
  const results = await getJson({
    engine: "google",
    api_key: EnvVars.serpapi(),
    q: query,
  });

  return TopLevelSearchResultsSchema.parse(results).organic_results;
}
