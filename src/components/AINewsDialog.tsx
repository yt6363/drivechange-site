"use client";

import { useState } from "react";

interface NewsItem {
  title: string;
  url: string;
  content: string;
  published_date?: string;
}

export default function AINewsDialog() {
  const [open, setOpen] = useState(false);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    setOpen(true);
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/news");
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setNews(data.results || []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={fetchNews}
        className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--navy)] px-6 py-3 rounded-sm font-semibold text-sm tracking-wide transition-colors"
      >
        Latest AI News
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div className="relative bg-white rounded-sm shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]">
              <div>
                <h2 className="text-lg font-semibold text-[var(--navy)]">
                  Latest AI News This Week
                </h2>
                <p className="text-xs text-[var(--slate)] mt-0.5">
                  Powered by Tavily
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-[var(--slate)] hover:text-[var(--navy)] p-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto p-6 space-y-4">
              {loading && (
                <div className="flex items-center justify-center py-12">
                  <div className="w-6 h-6 border-2 border-[var(--gold)] border-t-transparent rounded-full animate-spin" />
                  <span className="ml-3 text-[var(--slate)] text-sm">
                    Fetching latest news...
                  </span>
                </div>
              )}

              {error && (
                <div className="text-center py-12">
                  <p className="text-[var(--slate)] text-sm mb-3">{error}</p>
                  <button
                    onClick={fetchNews}
                    className="text-sm text-[var(--gold-dark)] font-medium hover:underline"
                  >
                    Try again
                  </button>
                </div>
              )}

              {!loading && !error && news.length === 0 && (
                <p className="text-center py-12 text-[var(--slate)] text-sm">
                  No news found.
                </p>
              )}

              {!loading &&
                news.map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-[var(--border)] rounded-sm p-4 hover:border-[var(--gold)]/40 transition-colors group"
                  >
                    <h3 className="font-semibold text-[var(--navy)] text-sm group-hover:text-[var(--gold-dark)] transition-colors leading-snug">
                      {item.title}
                      <svg className="w-3.5 h-3.5 inline ml-1.5 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </h3>
                    <p className="text-xs text-[var(--slate)] mt-2 leading-relaxed line-clamp-2">
                      {item.content}
                    </p>
                    {item.published_date && (
                      <p className="text-[10px] text-[var(--slate)]/60 mt-2">
                        {item.published_date}
                      </p>
                    )}
                  </a>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
