import type { SearchResult } from '~/services/serpapi';

interface SnippetProps {
  snippetHighlightedWords: string[];
  snippetText: string;
}

function Snippet({ snippetHighlightedWords, snippetText }: SnippetProps) {
  const regex = new RegExp(`(${snippetHighlightedWords.join('|')})`, 'gi');
  const parts = snippetText.split(regex);
  return <p>
    {parts.map((part, index) =>
      snippetHighlightedWords.includes(part.toLowerCase()) ? (
        <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>) : part,
    )}
  </p>;
}

interface GoogleResultProps {
  searchResult: SearchResult;
}

function GoogleResult({ searchResult }: GoogleResultProps) {
  const { snippet_highlighted_words: snippetHighlightedWords, snippet, link, title } = searchResult;
  return <div>
    <a href={link} style={{ fontSize: 'large' }}>{title}</a>
    <Snippet snippetHighlightedWords={snippetHighlightedWords ?? []} snippetText={snippet} />
  </div>
}

interface GoogleResultsProps {
  searchResults: SearchResult[];
}

export function GoogleResults({ searchResults }: GoogleResultsProps) {
  return searchResults.length > 0 ? (
    <>
      <h1>Google Results:</h1>
      {searchResults.map((searchResult, index) => {
        return <GoogleResult searchResult={searchResult} key={index} />;
      })}
    </>
  ) : null;
}
