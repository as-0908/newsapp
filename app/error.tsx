"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h2 className="text-2xl font-bold mb-4">エラーが発生しました</h2>
      <p className="text-muted-foreground mb-6">
        {error instanceof Error ? error.message : '申し訳ありませんが、コンテンツの読み込み中にエラーが発生しました。'}
      </p>
      <Button onClick={reset}>もう一度試す</Button>
    </div>
  );
}