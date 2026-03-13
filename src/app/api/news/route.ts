import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.TAVILY_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Tavily API key not configured" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch("https://api.tavily.com/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        query:
          "AI transformation enterprise strategy governance 2026",
        search_depth: "basic",
        max_results: 6,
        include_domains: [
          "mckinsey.com",
          "hbr.org",
          "bcg.com",
          "weforum.org",
          "mit.edu",
          "reuters.com",
          "techcrunch.com",
          "bloomberg.com",
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Tavily API error: ${response.status}`);
    }

    const data = await response.json();

    const results = (data.results || []).map(
      (r: { title: string; url: string; content: string; published_date?: string }) => ({
        title: r.title,
        url: r.url,
        content: r.content?.slice(0, 200),
        published_date: r.published_date,
      })
    );

    return NextResponse.json({ results }, {
      headers: {
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=7200",
      },
    });
  } catch (error) {
    console.error("Tavily fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
