import React from 'react'
import { heroBannerData } from '../../utils/data'
import HeroLoanCarousel from './HeroLoanCarousel'

const HeroBanner = () => {
  return (
    <section className="mt-12 lg:mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 lg:items-stretch">
          {/* Second Card */}
          <div className="order-1 lg:order-2 lg:h-full">
            <HeroLoanCarousel />
          </div>

          {/* First Card */}
          <div className="order-2 lg:order-1 lg:h-full">
            <div className="lg:h-full space-y-4 rounded-3xl lg:rounded-[30px] border border-[#E7F0FF] bg-linear-to-b from-[#EDF4FF] to-white p-4 sm:p-5 lg:p-6">
              <h1 className="text-[#021435] text-xl sm:text-2xl lg:text-3xl leading-snug lg:leading-normal">
                A buddy that truly understands{' '}
                <br className="hidden sm:block" />
                <strong>your financial needs!</strong>
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
                {heroBannerData.map((item) => (
                  <div
                    key={item}
                    className="py-2.5 sm:py-3 px-4 sm:px-6 lg:px-7 border rounded-xl lg:rounded-2xl bg-white"
                  >
                    <p
                      className="text-center text-sm sm:text-base"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
