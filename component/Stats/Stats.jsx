import { appStatsData } from '../../utils/data'

const Stats = () => {
  return (
    <div className="bg-linear-to-b from-[#D6E5FF] to-[#F0F5FF]">
      <div className="grid grid-cols-4 gap-10 max-w-7xl mx-auto py-5">
        {appStatsData.map((item, i) => (
          <div key={i} className="flex justify-center items-center divide-x">
            <span className="text-[#021435] font-bold pr-1">{item.value}</span>
            <span className="pl-1">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats
