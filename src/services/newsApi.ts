const axios = require('axios/dist/browser/axios.cjs');

import { NEWS_API_BASE_URL, NEWS_API_KEY } from '@/src/config/newsApi.private';

export type NewsArticle = {
  title: string;
  description: string | null;
  urlToImage: string | null;
  publishedAt: string;
  url: string;
  source: {
    name: string;
  };
};

type NewsApiResponse = {
  status: 'ok' | 'error';
  totalResults: number;
  articles: NewsArticle[];
  message?: string;
};

const newsClient = axios.create({
  baseURL: NEWS_API_BASE_URL,
  timeout: 10000,
});

export async function searchNews(query: string): Promise<NewsArticle[]> {
  const trimmedQuery = query.trim();

  if (!trimmedQuery) {
    return [];
  }

  const response = await newsClient.get('/everything', {
    params: {
      q: trimmedQuery,
      language: 'nl',
      sortBy: 'publishedAt',
      pageSize: 20,
      apiKey: NEWS_API_KEY,
    },
  });

  const data = response.data as NewsApiResponse;

  if (data.status !== 'ok') {
    throw new Error(data.message || 'Er ging iets mis bij het ophalen van nieuws.');
  }

  if (data.articles.length > 0) {
    return data.articles;
  }

  // Fallback: if Dutch search returns no results, try again without language filter.
  const fallbackResponse = await newsClient.get('/everything', {
    params: {
      q: trimmedQuery,
      sortBy: 'publishedAt',
      pageSize: 20,
      apiKey: NEWS_API_KEY,
    },
  });

  const fallbackData = fallbackResponse.data as NewsApiResponse;

  if (fallbackData.status !== 'ok') {
    throw new Error(
      fallbackData.message || 'Er ging iets mis bij het ophalen van nieuws.'
    );
  }

  return fallbackData.articles;
}
