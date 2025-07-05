"use client";
import React, { useEffect, useState, useMemo } from "react";

type Article = {
  title: string;
  description: string;
  urlToImage: string;
  source: { name: string };
  author: string;
  publishedAt: string;
  url: string;
};

const CATEGORIES = [
  "Technology",
  "Lifestyle",
  "Development",
  "Photography",
  "Health",
  "Travel",
];

function getCategory(article: Article): string | null {
  const text = `${article.title} ${article.description || ""}`.toLowerCase();
  if (text.match(/tech|ai|software|computer|gadget|robot|digital|app|device|internet/)) return "Technology";
  if (text.match(/lifestyle|life|home|family|fashion|food|culture|living|style/)) return "Lifestyle";
  if (text.match(/develop|web|frontend|backend|programming|code|javascript|react|next\.js|api/)) return "Development";
  if (text.match(/photo|camera|photography|dslr|lens|image|shoot/)) return "Photography";
  if (text.match(/health|diet|nutrition|exercise|fitness|wellness|medicine|doctor/)) return "Health";
  if (text.match(/travel|trip|tour|vacation|journey|explore|destination|hotel|flight/)) return "Travel";
  return null;
}

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
  fetch("/api/news")
    .then((res) => res.json())
    .then((data) => {
      setArticles(data.articles || []);
      setLoading(false);
    })
    .catch(() => {
      setArticles([]);
      setLoading(false);
    });
}, []);

  // Filter articles by search and selected category
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        search.trim() === "" ||
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        (article.description && article.description.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory = selectedCategory
        ? getCategory(article) === selectedCategory
        : true;
      return matchesSearch && matchesCategory;
    });
  }, [articles, search, selectedCategory]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Blog posts */}
      <div className="w-full md:w-2/3">
        <h1 className="text-2xl text-left md:text-3xl font-bold text-center mb-8">
          Latest Blog Posts
        </h1>
        <div className="grid sm:grid-cols-2 gap-6">
          {loading ? (
            <div className="col-span-2 text-center text-gray-400">Loading...</div>
          ) : filteredArticles.length === 0 ? (
            <div className="col-span-2 text-center text-gray-400">No posts found.</div>
          ) : (
            filteredArticles.map((article, idx) => (
              <a
                key={idx}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition"
              >
                {article.urlToImage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-40 object-cover"
                  />
                )}
                <div className="p-4 flex-1 flex flex-col">
                  <span className="inline-block mb-2 text-xs font-medium px-2 py-1 rounded bg-blue-50 text-blue-600 w-fit">
                    {getCategory(article) || "Other"}
                  </span>
                  <h2 className="font-semibold text-lg mb-1">{article.title}</h2>
                  <p className="text-sm text-gray-500 mb-4 flex-1">{article.description}</p>
                  <div className="flex items-center text-xs text-gray-400 gap-2 mt-auto">
                    {article.author && <span>{article.author}</span>}
                    {article.author && <span>·</span>}
                    <span>
                      {new Date(article.publishedAt).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
      {/* Sidebar */}
      <div className="w-full md:w-1/3 flex flex-col gap-6">
        <div className="sticky top-24 flex flex-col gap-6">
          {/* Search Bar */}
          <div className="bg-white rounded-xl shadow p-4 mt-15">
            <div className="flex items-center rounded px-2 py-1">
              <svg
                className="w-5 h-5 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx={11} cy={11} r={8} />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full outline-none bg-transparent text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          {/* Categories */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold mb-4 text-gray-900 text-base">Categories</h2>
            <ul className="space-y-2">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <button
                    className={`text-left w-full px-0 py-1 rounded transition ${
                      selectedCategory === cat
                        ? "font-semibold text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                    onClick={() =>
                      setSelectedCategory(selectedCategory === cat ? null : cat)
                    }
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}