import { appStatsData } from '../../utils/data'

const Stats = () => {
  return (
    <div className="bg-linear-to-b from-[#D6E5FF] to-[#F0F5FF]">
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {appStatsData.map((item, i) => (
            <div
              key={i}
              className="flex justify-center items-center text-center lg:text-left"
            >
              <div className="flex items-center divide-x divide-[#021435]/20">
                <span className="text-[#021435] font-bold text-lg lg:text-xl pr-2">
                  {item.value}
                </span>
                <span className="pl-2 text-sm lg:text-base text-[#021435]/80">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats
