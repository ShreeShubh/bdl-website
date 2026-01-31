import BLAdvantages from '../component/BLAdvantages/BLAdvantages'
import GetLoanOnline from '../component/GetLoanOnline/GetLoanOnline'
import HeroBanner from '../component/HeroBanner/HeroBanner'
import ProductAndServices from '../component/ProductAndServices/ProductAndServices'
import WhyChooseUs from '../component/WhyChooseUs/WhyChooseUs'
import {
  loanAndCardData,
  insuranceData,
  toolsAndServicesData,
  whyChooseUsData,
} from '../utils/data'

export default function Home() {
  return (
    <div className="space-y-10">
      <HeroBanner />
      <div>
        <ProductAndServices
          showHeading={true}
          title="Loans & Cards"
          cardData={loanAndCardData}
        />
        {/* <ProductAndServices title="Insurance" cardData={insuranceData} /> */}
        <ProductAndServices
          title="Tools & Services"
          cardData={toolsAndServicesData}
        />
      </div>

      <GetLoanOnline />
      <BLAdvantages />

      <WhyChooseUs data={whyChooseUsData} />
    </div>
  )
}
