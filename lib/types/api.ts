import { Article } from "@/lib/types";

export interface NewsApiParams {
  query?: string;
  page?: number;
  country?: string;
  pageSize?: number;
}

export interface NewsApiError {
  status: string;
  code: string;
  message: string;
}

export interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
  sentimentScore: number;
}


