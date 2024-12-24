"use client";

import { useEffect, useState } from 'react';
import { UseNewsQuery, UseNewsResult, NewsApiResponse, NewsApiError } from '@/lib/types';

export function useNews({ query, page = 1, country = 'jp' }: UseNewsQuery = {}): UseNewsResult {
  const [data, setData] = useState<NewsApiResponse | null>(null);
  const [error, setError] = useState<NewsApiError | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const params = new URLSearchParams();
        if (query) params.append('q', query);
        if (page) params.append('page', String(page));
        if (country) params.append('country', country);

        const response = await fetch(`/api/news?${params}`);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }

        const newsData = await response.json();
        setData(newsData);
      } catch (err) {
        setError({
          error: err instanceof Error ? err.message : 'An error occurred',
          status: 500,
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [query, page, country]);

  return { data, error, isLoading };
}