import { ArticleCard } from "@/components/ui/article-card";
import { getTopHeadlines } from "@/lib/api/news";
import { Article } from "@/lib/types";

function getRandomArticles(articles: Article[], count: number): Article[] {
  return articles.sort(() => 0.5 - Math.random()).slice(0, count);
}

export default async function Home() {
  try {
    const response = await getTopHeadlines("お得");

    const { articles } = response;

    const processedArticles = articles.map((article: Article) => ({
      ...article,
      source: {
        id: article.source?.id || null,
        name: article.source?.name || "",
      },
    }));

    const randomArticles = getRandomArticles(
      processedArticles,
      Math.min(9, processedArticles.length)
    );

    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {randomArticles.map((article, index) => (
            <ArticleCard key={`${article.url}-${index}`} article={article} />
          ))}
        </div>
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
