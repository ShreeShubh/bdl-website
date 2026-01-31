'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const slides = [
  {
    title: 'Instant Personal Loan',
    amount: 'Upto Rs. 5,00,000',
    points: [
      '100% Digital Process',
      'Flexible EMI Tenure',
      'Interest Rate from 12%',
    ],
    image: '/hero/img01.png', // replace with your image
    cta: 'Apply Now',
  },
  {
    title: 'Quick Business Loan',
    amount: 'Upto Rs. 50,00,000',
    points: ['Minimal Documentation', 'Fast Approval', 'Custom EMI Options'],
    image: '/hero/img01.png',
    cta: 'Apply Now',
  },
]

export default function HeroLoanCarousel() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="rounded-[30px] overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="h-full bg-linear-to-r from-[#0A7DBE] to-[#021435] p-8 flex items-center justify-between rounded-[30px] relative">
              {/* Left Content */}
              <div className="text-white max-w-md space-y-4">
                <h2 className="text-2xl font-semibold">
                  {slide.title}
                  <br />
                  <span className="font-bold">{slide.amount}</span>
                </h2>

                <ul className="space-y-3">
                  {slide.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-white text-[#021435] flex items-center justify-center text-xs font-bold">
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-4 bg-white text-[#021435] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer">
                  {slide.cta} →
                </button>
              </div>

              {/* Right Image */}
              <div className="hidden md:block absolute right-0 bottom-0">
                <img
                  src={slide.image}
                  alt="Loan Banner"
                  className="h-56 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
