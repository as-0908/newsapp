import { ArticleCard } from "@/components/ui/article-card";
import { searchNews } from "@/lib/api/news";
// import { Article } from "@/lib/types";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string };
}) {
  if (!searchParams.q) {
    redirect("/");
  }

  const { q: query, page = "1" } = searchParams;
  const { articles } = await searchNews({
    query,
    page: parseInt(page, 10),
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">検索結果</h1>
      <p className="text-muted-foreground mb-8">「{query}」の検索結果</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <ArticleCard key={`${article.url}-${index}`} article={article} />
        ))}
      </div>
    </div>
  );
}
