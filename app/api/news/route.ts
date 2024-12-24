import { NextResponse } from 'next/server';
import { fetchNews } from '@/lib/news-service';
import { validateSearchParams } from '@/lib/validators';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    const page = searchParams.get('page') || '1';
    const country = searchParams.get('country') || 'jp';

    const validatedParams = validateSearchParams({ query, page, country });
    
    const data = await fetchNews(validatedParams);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('News API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}