import { NewsApiParams } from './types';

const API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export async function fetchNews({ query, page = 1, country = 'jp' }: NewsApiParams) {
  const endpoint = query
    ? `${BASE_URL}/everything?q=${query}&page=${page}`
    : `${BASE_URL}/top-headlines?country=${country}&page=${page}`;

  const response = await fetch(`${endpoint}&apiKey=${API_KEY}`, {
    next: { revalidate: 3600 },
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`News API error: ${response.statusText}`);
  }

  return response.json();
}