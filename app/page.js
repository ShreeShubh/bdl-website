import ApplicationProcess from '../component/ApplicationProcess/ApplicationProcess'
import BLAdvantages from '../component/BLAdvantages/BLAdvantages'
import CheckYourEligibility from '../component/CTA/CheckYourEligibility /CheckYourEligibility '
import GetLoanOnline from '../component/GetLoanOnline/GetLoanOnline'
import HeroBanner from '../component/HeroBanner/HeroBanner'
import OurTrustedPartner from '../component/OurTrustedPartner/OurTrustedPartner'
import ProductAndServices from '../component/ProductAndServices/ProductAndServices'
import Stats from '../component/Stats/Stats'
import WhyChooseUs from '../component/WhyChooseUs/WhyChooseUs'
import {
  loanAndCardData,
  insuranceData,
  toolsAndServicesData,
  whyChooseUsData,
} from '../utils/data'
import CustomerStories from '../component/CustomerStories/CustomerStories'
import LatestBlogs from '../component/LatestBlogs/LatestBlogs'

export default function Home() {
  return (
    <div className="space-y-10">
      <HeroBanner />
      <Stats />
      <div className="space-y-3">
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
      <CheckYourEligibility />

      <GetLoanOnline />
      <ApplicationProcess />
      <OurTrustedPartner />
      <CheckYourEligibility />
      <BLAdvantages />

      <WhyChooseUs data={whyChooseUsData} />
      <CustomerStories />
      <LatestBlogs />
    </div>
  )
}
