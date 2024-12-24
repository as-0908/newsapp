import { Article } from "./index";

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


