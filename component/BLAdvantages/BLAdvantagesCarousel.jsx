'use client'

import Slider from 'react-slick'
import BuddyLoanAdvCard from './BuddyLoanAdvCard'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const BLAdvantagesCarousel = ({ data }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.2, // mobile swipe feel
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <div key={index} className="px-2">
          <BuddyLoanAdvCard
            title={item.title}
            description={item.description}
            ctaText={item.ctaText}
            link={item.link}
          />
        </div>
      ))}
    </Slider>
  )
}

export default BLAdvantagesCarousel
