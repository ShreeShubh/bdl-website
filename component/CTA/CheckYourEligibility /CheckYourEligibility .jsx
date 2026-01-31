import Link from 'next/link'
import React from 'react'

const CheckYourEligibility = ({
  url = 'https://www.buddyloan.com/apply-loan-online?utm_source=seoweb&utm_medium=webalocta&utm_campaign=organic',
}) => {
  return (
    <div className="bg-[#021435]">
      <div className="max-w-7xl mx-auto flex justify-between gap-5 items-center py-5 px-4">
        <img src="/calc.png" width={100} height={100} alt="calculator" />
        <p className="text-3xl text-white text-center font-bold">
          Get Your Loan Eligibility Now!
        </p>
        <Link href={url} target="_blank">
          <button className="h-10 px-6 lg:px-12 bg-white text-[#021435] rounded-md font-semibold hover:bg-gray-100 transition whitespace-nowrap text-sm">
            Check Your Eligibility
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CheckYourEligibility
