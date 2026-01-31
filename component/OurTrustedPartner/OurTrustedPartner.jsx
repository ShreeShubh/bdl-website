import DraggableLogoCard from './DraggableLogoCard'
import StaticLogoGrid from './StaticLogoGrid'

const OurTrustedPartner = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[#021435] text-3xl font-semibold mb-7">
          Our Trusted Partners
        </h2>
        <div className="">
          <StaticLogoGrid />
          {/* <DraggableLogoCard /> */}
        </div>
      </div>
    </section>
  )
}

export default OurTrustedPartner
