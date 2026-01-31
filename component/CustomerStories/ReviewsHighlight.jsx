'use client'

export default function ReviewsHighlight() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-6xl bg-[#F6F6F7] rounded-4xl px-10 py-12">
        {/* Heading */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <span className="w-20 h-0.5 bg-[#021435]" />
          <h2 className="text-[#021435] text-2xl font-semibold">
            Over 500K+ 5-star reviews
          </h2>
          <span className="w-20 h-0.5 bg-[#021435]" />
        </div>

        {/* Description */}
        <p className="text-center text-[#021435] max-w-3xl mx-auto text-lg leading-relaxed mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        {/* Reviews Row */}
        <div className="flex items-center justify-between">
          {/* Left avatars */}
          <Avatar />
          <Divider />
          <Avatar />
          <Divider />

          {/* Active Review */}
          <div className="flex flex-col items-center text-center px-6">
            <div className="w-20 h-20 rounded-full bg-[#E8D6A8] flex items-center justify-center mb-3">
              <img
                src="/avatars/user-main.png"
                alt="user"
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[#021435] text-lg">
                  ★
                </span>
              ))}
            </div>

            <h4 className="text-[#021435] font-semibold text-lg">K. Deepak</h4>
            <p className="text-[#021435] text-sm">Chennai</p>
          </div>

          <Divider />
          <Avatar />
          <Divider />
          <Avatar />
        </div>
      </div>
    </section>
  )
}

/* 🔹 Small Avatar */
function Avatar() {
  return (
    <div className="w-14 h-14 rounded-full border border-[#021435] flex items-center justify-center">
      <img
        src="/avatars/user.png"
        alt="user"
        className="w-8 h-8 object-contain"
      />
    </div>
  )
}

/* 🔹 Vertical Divider */
function Divider() {
  return <div className="w-px h-16 bg-[#021435]" />
}
