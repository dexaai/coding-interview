export class EnvVars {
  /** Get the SerpApi API key from the environment. */
  static serpapi(): string {
    const key = process.env.SERPAPI_API_KEY;
    if (!key) {
      throw new Error('Missing SERPAPI_KEY environment variable');
    }
    return key;
  }
  /** Get the OpenAI API key from the environment. */
  static openAI(): string {
    const key = process.env.OPENAI_API_KEY;
    if (!key) {
      throw new Error('Missing OPENAI_API_KEY environment variable');
    }
    return key;
  }
}
