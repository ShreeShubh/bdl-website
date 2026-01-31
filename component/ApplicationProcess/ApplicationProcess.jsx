import { loanProcessSteps } from '../../utils/data'
import ApplicationProcessCard from './ApplicationProcessCard'

const ApplicationProcess = () => {
  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[#021435] text-2xl sm:text-3xl font-semibold mb-16 sm:mb-20">
          Application Process
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-10">
          {loanProcessSteps.map((item, i) => (
            <ApplicationProcessCard
              key={i}
              step={item.step}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ApplicationProcess
