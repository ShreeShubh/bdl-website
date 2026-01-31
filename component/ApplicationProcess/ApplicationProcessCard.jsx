const ApplicationProcessCard = ({ step, title, description }) => {
  return (
    <div className="p-1 rounded-4xl shadow-xl relative h-full">
      <div className="px-5 pt-20 sm:pt-24 pb-6 bg-[#F6F6F7] rounded-[28px] h-full flex flex-col">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#021435] text-center mb-5">
          {title}
        </h3>

        {/* Description */}
        <div className="bg-[#021435] text-white rounded-3xl p-6 sm:p-8 grow flex items-center justify-center">
          <p className="text-center text-sm sm:text-base font-normal leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Dark ring */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#021435] w-24 h-24 sm:w-25 sm:h-25 -z-10" />

      {/* Step circle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white w-16 h-16 sm:w-20 sm:h-20 shadow-xl flex items-center justify-center">
        <span className="text-[#021435] font-bold text-2xl sm:text-4xl">
          {step}
        </span>
      </div>
    </div>
  )
}

export default ApplicationProcessCard
