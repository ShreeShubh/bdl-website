import React from 'react'
import ReviewsHighlight from './ReviewsHighlight'

const CustomerStories = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[#021435] text-3xl font-semibold mb-7">
          Customer Stories
        </h2>

        <ReviewsHighlight />
      </div>
    </section>
  )
}

export default CustomerStories
