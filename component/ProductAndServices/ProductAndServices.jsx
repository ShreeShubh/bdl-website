import React from 'react'
import LoanCard from './LoanCard'

const ProductAndServices = ({ title, cardData, showHeading = false }) => {
  return (
    <section className="py-1">
      <div className="max-w-7xl mx-auto px-4">
        {showHeading && (
          <h2 className="text-[#021435] text-2xl md:text-3xl font-bold mb-5">
            Products and Services
          </h2>
        )}

        <p className="text-[#021435] text-lg md:text-xl font-semibold">
          {title}
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mt-4">
          {cardData.map((item, index) => (
            <LoanCard
              key={index}
              imgUrl={item.imgUrl}
              title={item.title}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductAndServices
