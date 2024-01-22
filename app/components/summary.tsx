interface SummaryProps {
  summary: string;
}

export default function Summary({ summary }: SummaryProps) {
  if (summary.length === 0) {
    return null;
  }

  return <><h1>
    Summary
  </h1>
    <p>{summary}</p>
  </>;
}
