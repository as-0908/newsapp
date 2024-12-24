const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export async function getTopHeadlines(country: string = 'jp', page: number = 1) {
  const response = await fetch(
    `${BASE_URL}/top-headlines?country=${country}&page=${page}&apiKey=${API_KEY}`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }

  return response.json();
}

export async function searchNews(query: string, page: number = 1) {
  const response = await fetch(
    `${BASE_URL}/everything?q=${query}&page=${page}&apiKey=${API_KEY}`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }

  return response.json();
}