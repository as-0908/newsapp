"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { Newspaper } from "lucide-react";
import Link from "next/link";
import { SearchBar } from "@/components/search-bar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="ja">
      <body className={inter.className}>
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <h1 className="flex items-center gap-2">
                <Newspaper className="h-6 w-6" />
                <span className="text-xl font-bold">ポジティブニュース</span>
              </h1>
              <p className="text-sm text-gray-500">
                ポジティブなニュースを集めています
              </p>
              <div className="flex items-center gap-4">
                {pathname !== "/auth/login" && pathname !== "/auth/signup" && (
                  <SearchBar />
                )}
                <div className="flex items-center gap-2">
                  <Link
                    href="/auth/login"
                    className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    ログイン
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    新規登録
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
