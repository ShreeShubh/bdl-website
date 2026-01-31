import React from 'react'
import LoanCard from './LoanCard'

const ProductAndServices = ({ title, cardData, showHeading = false }) => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4">
        {showHeading && (
          <h2 className="text-[#021435] text-3xl font-bold mb-5">
            Products and Services
          </h2>
        )}
        <p className="text-[#021435] text-xl font-semibold">{title}</p>

        <div className="grid grid-cols-6 gap-5 mt-7 max-w-5xl">
          {cardData.map((item, index) => (
            <LoanCard key={index} imgUrl={item.imgUrl} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductAndServices
