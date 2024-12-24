export const NEWS_API = {
  BASE_URL: 'https://newsapi.org/v2',
  DEFAULT_COUNTRY: 'jp',
  DEFAULT_PAGE_SIZE: 12,
  REVALIDATE_TIME: 3600, // 1 hour
} as const;

export const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=60';