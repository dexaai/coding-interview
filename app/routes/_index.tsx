import { json } from '@remix-run/node';
import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { z } from 'zod';
import { zx } from 'zodix';

export const meta: MetaFunction = () => {
  return [{ title: 'Dexa Coding Interview' }];
};

export async function loader(args: LoaderFunctionArgs) {
  const { q } = zx.parseQuery(args.request, {
    q: z.string().optional(),
  });
  const searchResults: unknown[] = [];
  const summary = q?.length ? `TODO: Summary of search results for "${q}"` : '';
  return json({ q, searchResults, summary });
}

export default function Index() {
  const { q, searchResults, summary } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Welcome to the Dexa coding interview!</h1>
      <p>See the readme for instructions.</p>
      <Form method="get">
        <label htmlFor="search">Search</label>
        <input
          type="search"
          name="q"
          id="search"
          defaultValue={q ?? ''}
          placeholder="Search the web"
        />
        <button type="submit">Search</button>
      </Form>
      {summary ? <p>{`Summary: ${summary}`}</p> : null}
    </div>
  );
}
