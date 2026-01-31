import React from 'react'
import LatestBlogsCards from './LatestBlogsCards'

const LatestBlogs = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto text-[#021435] px-4">
        <h2 className="text-[#021435] text-3xl font-bold mb-7">
          Personal Loan Blogs
        </h2>

        <LatestBlogsCards />
      </div>
    </section>
  )
}

export default LatestBlogs
