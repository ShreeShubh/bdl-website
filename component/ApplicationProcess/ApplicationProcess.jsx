import { loanProcessSteps } from '../../utils/data'
import ApplicationProcessCard from './ApplicationProcessCard'

const ApplicationProcess = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[#021435] text-3xl font-semibold mb-20">
          Application Process
        </h2>

        <div className="grid grid-cols-4 gap-10">
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
