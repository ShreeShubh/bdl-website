import { buddyLoanAdv } from '../../utils/data'
import BuddyLoanAdvCard from './BuddyLoanAdvCard'

const BLAdvantages = () => {
  return (
    <section className="my-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[#021435] text-3xl font-semibold mb-7">
          Buddy Loan Advantages
        </h2>

        <div className="flex justify-between">
          {buddyLoanAdv.map((item, index) => (
            <BuddyLoanAdvCard
              key={index}
              title={item.title}
              description={item.description}
              ctaText={item.ctaText}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BLAdvantages
