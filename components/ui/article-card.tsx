import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DEFAULT_IMAGE } from "@/lib/constants";
import { Article } from "@/lib/types";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={article.url} target="_blank" rel="noopener noreferrer">
      <Card className="h-full hover:shadow-lg transition-shadow duration-200">
        <CardHeader className="p-0">
          <div className="relative w-full h-48">
            <Image
              src={article.urlToImage || DEFAULT_IMAGE}
              alt={article.title}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2 text-sm text-muted-foreground">
            <span>{article.source.name}</span>
            <span>{format(new Date(article.publishedAt), "PP")}</span>
          </div>
          <h3 className="font-semibold mb-2 line-clamp-2">{article.title}</h3>
          {article.description && (
            <p className="text-sm text-muted-foreground line-clamp-3">
              {article.description}
            </p>
          )}
          <p>感情スコア: {article.sentimentScore}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
