import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lang = (searchParams.get('lang') ?? 'en-US')

  const translations = (await import(`../../../../messages/${lang}.json`)).default

  return NextResponse.json(translations)
}