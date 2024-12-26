import { ArticleCard } from "@/components/ui/article-card";
import { getTopHeadlines } from "@/lib/api/news";
import { Article } from "@/lib/types";
import { analyzeSentiment } from "@/lib/sentimentAnalysis";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { getCachedSentiment, setCachedSentiment } from "@/lib/cache";

function getRandomArticles(articles: Article[], count: number): Article[] {
  return articles.sort(() => 0.5 - Math.random()).slice(0, count);
}

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  try {
    const currentPage = Number(searchParams.page) || 1;
    const itemsPerPage = 12;
    const response = await getTopHeadlines("お得");

    const { articles } = response;

    const limitedArticles = articles.slice(0, 12);

    const processedArticles = await Promise.all(
      limitedArticles.map(async (article: Article) => {
        const textToAnalyze = article.description || article.title;

        const cachedScore = await getCachedSentiment(textToAnalyze);
        if (cachedScore !== null) {
          return {
            ...article,
            sentimentScore: cachedScore,
          };
        }

        const score = await analyzeSentiment(textToAnalyze);
        await setCachedSentiment(textToAnalyze, score);

        return {
          ...article,
          sentimentScore: score,
        };
      })
    );

    const SENTIMENT_THRESHOLD = 0.4;
    const positiveArticles = processedArticles.filter(
      (article) =>
        article.sentimentScore !== undefined &&
        article.sentimentScore >= SENTIMENT_THRESHOLD
    );

    const totalPages = Math.ceil(positiveArticles.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedArticles = positiveArticles.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedArticles.map((article, index) => (
            <ArticleCard key={`${article.url}-${index}`} article={article} />
          ))}
        </div>
        <Pagination>
          <PaginationContent>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href={`?page=${page}`}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      </div>
    );
  } catch (error) {
    console.error("ニュースの取得に失敗しました:", error);
    return (
      <div className="text-center py-10">
        <p>エラーが発生しました。しばらく経ってから再度お試しください。</p>
      </div>
    );
  }
}
