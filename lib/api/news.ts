import { number } from 'zod';
import { config } from '../config';
import { NEWS_API } from '../constants';
import { NewsApiParams, NewsApiResponse } from '../types/api';

export class NewsApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message);
    this.name = 'NewsApiError';
  }
}

async function fetchFromNewsApi(endpoint: string, params: Record<string, string>) {
  const queryString = new URLSearchParams({
    ...params,
    apiKey: config.newsApi.key,
  }).toString();

  const response = await fetch(`${NEWS_API.BASE_URL}${endpoint}?${queryString}`, {
    next: { revalidate: NEWS_API.REVALIDATE_TIME },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new NewsApiError(
      data.message || 'Failed to fetch news',
      response.status,
      data.code
    );
  }

  if (data.status === 'error') {
    throw new NewsApiError(data.message, 400, data.code);
  }

  return data;
}

export async function getTopHeadlines(query?: string) {
  try {
    return fetchFromNewsApi(
      query ? '/everything' : '/top-headlines',
      query
        ? { q: query, language: 'jp' }
        : { country: 'jp' }
    );
  } catch (error) {
    console.error('News API error:', error);
    throw error;
  }
}

export async function searchNews({
  query,
  page = 1,
  pageSize = NEWS_API.DEFAULT_PAGE_SIZE,
}: Omit<NewsApiParams, 'country'> & { query: string }): Promise<NewsApiResponse> {
  return fetchFromNewsApi('/everything', {
    q: query,
    page: String(page),
    pageSize: String(pageSize),
  });
}