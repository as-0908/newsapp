if (!process.env.NEWS_API_KEY) {
  throw new Error('NEWS_API_KEY is not defined in environment variables');
}

export const config = {
  newsApi: {
    key: process.env.NEWS_API_KEY,
  },
} as const;