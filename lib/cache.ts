type CacheItem = {
  score: number;
  timestamp: number;
};

const cache = new Map<string, CacheItem>();
const CACHE_DURATION = 1000 * 60 * 60 * 24; // 24時間

export async function getCachedSentiment(text: string): Promise<number | null> {
  const cached = cache.get(text);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.score;
  }
  return null;
}

export async function setCachedSentiment(text: string, score: number): Promise<void> {
  cache.set(text, {
    score,
    timestamp: Date.now(),
  });
} 