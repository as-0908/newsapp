// Existing types...
export interface NewsApiParams {
  query?: string;
  page?: number;
  country?: string;
}

export interface NewsApiError {
  error: string;
  status: number;
}

// API Response types
export interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

// Client hooks types
export interface UseNewsQuery {
  query?: string;
  page?: number;
  country?: string;
}

export interface UseNewsResult {
  data: NewsApiResponse | null;
  error: NewsApiError | null;
  isLoading: boolean;
}

export interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}