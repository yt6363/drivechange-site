"use client";

import { useState, useEffect } from "react";

interface NewsItem {
  title: string;
  url: string;
  content: string;
  published_date?: string;
}

export default function IndustryNews() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/news")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => setNews(data.results || []))
      .catch(() => setNews([]))
      .finally(() => setLoading(false));
  }, []);

  if (!loading && news.length === 0) return null;

  return (
    <section className="py-20 sm:py-28 bg-[var(--bg-alt)]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-sm font-medium text-[var(--accent)] tracking-[0.2em] uppercase mb-3">
          Industry
        </p>
        <h2 className="mb-14">
          <span className="block text-xl sm:text-2xl font-serif italic text-[var(--text-muted)]">
            Latest
          </span>
          <span
            className="block text-4xl sm:text-5xl tracking-tight leading-[0.92]"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            AI News
          </span>
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-[var(--border)] rounded w-1/3 mb-4" />
                <div className="h-5 bg-[var(--border)] rounded w-full mb-2" />
                <div className="h-5 bg-[var(--border)] rounded w-2/3 mb-4" />
                <div className="h-3 bg-[var(--border)] rounded w-full mb-1" />
                <div className="h-3 bg-[var(--border)] rounded w-5/6" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {news.map((item, i) => {
              const domain = new URL(item.url).hostname.replace("www.", "");
              return (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-3">
                    {domain}
                  </p>
                  <h3 className="text-[15px] font-semibold leading-snug mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed line-clamp-3">
                    {item.content}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[var(--accent)] text-xs font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read article
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
