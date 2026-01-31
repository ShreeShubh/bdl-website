import Link from 'next/link'

const LoanCard = ({ imgUrl, title, link }) => {
  return (
    <Link href={link}>
      <div className="flex flex-col items-center gap-3 cursor-pointer group transition-transform duration-200 hover:-translate-y-1">
        <div className="w-16 h-16 flex items-center justify-center">
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>

        <p className="text-xs sm:text-sm font-medium text-gray-900 text-center leading-snug">
          {title}
        </p>
      </div>
    </Link>
  )
}

export default LoanCard
