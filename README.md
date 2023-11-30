# Welcome to the Dexa coding interview

This is meant to be a collaborative "open book" exercise. Please use any apps, 
tools, AI, etc that you would normally use while programming.

We have also included a few helpful services/tools to save you time. More 
details below.

## Task

Build a simple clone of [Perplexity](https://www.perplexity.ai/).

When the user submits a new search, they should be presented with the search 
results from Google, as well as an AI generated response to their query, based 
on the retrieved Google search results.

## Setup

1. Use npm to install dependencies
2. Add required environment variables
3. Run `npm run dev` to start the dev server

## Documentation

- Remix: https://remix.run/docs/en/2.3.1
- Dexter (for OpenAI): https://github.com/dexaai/dexter/tree/master
- SerpAPI (for Google search): https://github.com/serpapi/serpapi-javascript

## Services

These are helpful services that we have already configured for you. Find the 
code in `/app/services/`.

- OpenAI: use GPT 3.5
- SerpAPI: get Google search results for a query
