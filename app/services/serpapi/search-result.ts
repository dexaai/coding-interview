import * as z from "zod";

export const OrganicResultSchema = z.object({
  "title": z.string(),
  "link": z.string(),
  "snippet": z.string(),
  "snippet_highlighted_words": z.union([z.array(z.string()), z.null()]).optional(),
}).passthrough();
export type OrganicResult = z.infer<typeof OrganicResultSchema>;

export const TabSchema = z.object({
  "text": z.string(),
  "link": z.string(),
  "serpapi_link": z.string(),
});
export type Tab = z.infer<typeof TabSchema>;

export const TopLevelSearchResultsSchema = z.object({
  "organic_results": z.array(OrganicResultSchema),
}).passthrough();
export type TopLevelSearchResults = z.infer<typeof TopLevelSearchResultsSchema>;
