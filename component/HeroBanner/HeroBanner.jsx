import React from 'react'
import { heroBannerData } from '../../utils/data'

const HeroBanner = () => {
  return (
    <section>
      <br></br>
      <br></br>
      <br></br>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-10">
          {/* First Card */}
          <div>
            <div className="space-y-3 rounded-[30px] border border-[#E7F0FF] bg-linear-to-b from-[#EDF4FF] to-white p-5">
              <h1 className="text-[#021435] text-3xl leading-normal">
                A buddy that truly understands <br />{' '}
                <strong>your financial needs!</strong>
              </h1>

              <div className="grid grid-cols-2 gap-5">
                {heroBannerData.map((item) => (
                  <div key={item} className="py-3 px-7 border rounded-2xl">
                    <p
                      className="text-center"
                      dangerouslySetInnerHTML={{ __html: item }}
                    ></p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Cars */}
          <div className="w-162.5 h-68.25 bg-[#021435]"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
