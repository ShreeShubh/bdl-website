const ApplicationProcessCard = ({ step, title, description }) => {
  return (
    <div className="p-1 rounded-4xl shadow-xl relative h-full">
      <div className="px-5 pt-24 pb-6 bg-[#F6F6F7] rounded-3xl h-full flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold text-[#021435] text-center mb-6">
          {title}
        </h3>

        {/* Description (grows equally) */}
        <div className="bg-[#021435] text-white font-thin rounded-3xl p-8 grow flex items-center justify-center">
          <p className="text-center">{description}</p>
        </div>
      </div>

      {/* Dark ring */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#021435] w-25 h-25 -z-10"></div>

      {/* Step circle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white w-20 h-20 shadow-xl flex items-center justify-center">
        <span className="text-[#021435] font-bold text-4xl">{step}</span>
      </div>
    </div>
  )
}

export default ApplicationProcessCard
