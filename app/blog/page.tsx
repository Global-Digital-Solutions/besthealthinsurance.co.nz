import Link from "next/link";
import { BLOG_POSTS } from "../../data/blog";

export const metadata = {
  title: "Health Insurance Guides | BestHealthInsurance.co.nz",
  description: "Expert guides on health insurance in New Zealand — coverage types, provider comparisons, cost guides, and practical advice.",
};

export default function BlogPage() {
  const categories = Array.from(new Set(BLOG_POSTS.map((post) => post.category)));

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 border-b border-gray-800 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Health Insurance Guides</h1>
          <p className="text-lg text-gray-400">Expert guides, comparisons, and advice on finding the best health insurance in New Zealand.</p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 lg:py-16 px-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          {BLOG_POSTS[0] && (
            <Link href={`/blog/${BLOG_POSTS[0].slug}/`}>
              <div className="group bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-emerald-500 transition-all cursor-pointer">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">{BLOG_POSTS[0].category}</span>
                    <span className="text-gray-500 text-sm">{BLOG_POSTS[0].readTime}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{BLOG_POSTS[0].title}</h2>
                  <p className="text-gray-400 mb-6 text-lg">{BLOG_POSTS[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{new Date(BLOG_POSTS[0].date).toLocaleDateString("en-NZ", { year: "numeric", month: "long", day: "numeric" })}</span>
                    <span className="text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform">Read Guide →</span>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16 lg:py-20 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`}>
                <div className="group bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-emerald-500 transition-all h-full cursor-pointer flex flex-col">
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-semibold rounded">{post.category}</span>
                      <span className="text-gray-500 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2 flex-1">{post.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <span className="text-gray-500 text-xs">{new Date(post.date).toLocaleDateString("en-NZ", { year: "numeric", month: "short", day: "numeric" })}</span>
                      <span className="text-emerald-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-800 border-t border-gray-700 py-12 lg:py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const count = BLOG_POSTS.filter((p) => p.category === category).length;
              return (
                <div key={category} className="bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg px-4 py-2 cursor-pointer">
                  <span className="text-white font-medium">{category}</span>
                  <span className="text-gray-400 text-sm ml-2">({count})</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
