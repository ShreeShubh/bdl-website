import Link from 'next/link'
import React from 'react'

const CheckYourEligibility = ({
  url = 'https://www.buddyloan.com/apply-loan-online?utm_source=seoweb&utm_medium=webalocta&utm_campaign=organic',
}) => {
  return (
    <div className="bg-[#021435]">
      <div
        className="
          max-w-7xl mx-auto
          flex flex-col gap-4
          sm:flex-row sm:justify-between sm:items-center
          py-6 px-4
          text-center sm:text-left
        "
      >
        {/* Icon */}
        <img
          src="/calc.png"
          width={80}
          height={80}
          alt="calculator"
          className="mx-auto sm:mx-0"
        />

        {/* Text */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-white font-bold">
          Get Your Loan Eligibility Now!
        </p>

        {/* CTA */}
        <Link href={url} target="_blank" className="mx-auto sm:mx-0">
          <button className="cursor-pointer h-10 px-6 lg:px-12 bg-white text-[#021435] rounded-md font-semibold hover:bg-gray-100 transition whitespace-nowrap text-sm">
            Check Your Eligibility
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CheckYourEligibility
