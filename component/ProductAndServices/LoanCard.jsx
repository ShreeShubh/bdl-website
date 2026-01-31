const LoanCard = ({ imgUrl, title }) => {
  return (
    <div className="flex flex-col items-center gap-3 cursor-pointer group">
      <img src={imgUrl} alt={title} className="w-16 h-16 object-contain" />

      <p className="text-sm font-medium text-gray-900 text-center leading-snug">
        {title}
      </p>
    </div>
  )
}

export default LoanCard
