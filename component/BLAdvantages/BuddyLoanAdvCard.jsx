import Link from 'next/link'

const BuddyLoanAdvCard = ({ title, description, ctaText, link }) => {
  return (
    <div
      className="
    relative
    w-64
    min-h-105
  "
      style={{
        backgroundImage: "url('/BLAdv-bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      {/* CONTENT WRAPPER */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
        <h3 className="text-[#021435] font-semibold mb-3">{title}</h3>

        <p className="text-[#021435] text-[11px] leading-relaxed mb-4">
          {description}
        </p>

        <Link href={link} className="">
          <button className="px-5 py-2 border rounded-md text-sm font-semibold text-[#021435] hover:bg-[#021435] hover:text-white transition">
            {ctaText} ▶
          </button>
        </Link>
      </div>
    </div>
  )
}

export default BuddyLoanAdvCard
