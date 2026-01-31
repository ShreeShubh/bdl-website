'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const PER_PAGE = 5

export default function LatestBlogsCards() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const res = await fetch(
          `https://wordpress.buddyloan.com/wp-json/customapi/v1/posts/?page=1&per_page=${PER_PAGE}`,
          { cache: 'no-store' },
        )

        if (!res.ok) throw new Error('Failed to fetch blogs')

        const data = await res.json()
        setPosts(data.posts || data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchLatestPosts()
  }, [])

  if (loading || posts.length === 0) return null

  const [featured, ...rest] = posts

  return (
    <section className="w-full bg-[#F7F7F7] rounded-3xl p-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Featured Blog */}
        <BlogCard
          post={featured}
          featured
          onClick={() => router.push(`/blog/${featured.slug}`)}
        />

        {/* Right Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
          {rest.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              onClick={() => router.push(`/blog/${post.slug}`)}
            />
          ))}
        </div>
      </div>

      {/* View All */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => router.push('/blog')}
          className="cursor-pointer px-10 py-3 border border-[#0B1B3F] rounded-lg font-medium hover:bg-[#0B1B3F] hover:text-white transition"
        >
          View All Blogs
        </button>
      </div>
    </section>
  )
}

/* 🔹 Blog Card */
function BlogCard({ post, featured = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer border border-gray-400 rounded-[20px] p-3 flex gap-5 hover:shadow-md transition ${
        featured ? 'flex-col justify-between' : 'items-center'
      }`}
    >
      {/* Image */}
      <div
        className={`bg-gray-100 rounded-xl flex items-center justify-center ${
          featured ? 'h-48 w-full' : 'h-32 w-32 shrink-0'
        }`}
      >
        {post.featured_image?.url || post?.featured_image ? (
          <img
            src={post.featured_image?.url || post?.featured_image}
            alt={post.title}
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <span className="text-gray-400 text-sm">Image</span>
        )}
      </div>

      {/* Content */}
      <p
        className={`text-[#0B1B3F] ${
          featured ? 'text-base mt-4' : 'text-sm'
        } line-clamp-4`}
        dangerouslySetInnerHTML={{ __html: post.excerpt || post.title }}
      />
    </div>
  )
}
