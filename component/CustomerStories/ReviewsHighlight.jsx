'use client'

export default function ReviewsHighlight() {
  return (
    <section className="w-full flex justify-center px-4">
      <div className="w-full max-w-6xl bg-[#F6F6F7] rounded-4xl px-6 sm:px-10 py-10 sm:py-12">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
          <span className="w-10 sm:w-20 h-0.5 bg-[#021435]" />
          <h2 className="text-[#021435] text-xl sm:text-2xl font-semibold text-center">
            Over 500K+ 5-star reviews
          </h2>
          <span className="w-10 sm:w-20 h-0.5 bg-[#021435]" />
        </div>

        {/* Description */}
        <p className="text-center text-[#021435] max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-10 sm:mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        {/* Reviews Row */}
        <div
          className="
          flex items-center gap-6
          overflow-x-auto
          sm:overflow-visible
          sm:justify-between
        "
        >
          {/* Left avatars */}
          <Avatar />
          <Divider />
          <Avatar />
          <Divider />

          {/* Active Review */}
          <div className="shrink-0 flex flex-col items-center text-center px-4 sm:px-6">
            <img
              src="/avatars/user-main.png"
              alt="user"
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
            />

            {/* Stars */}
            <div className="flex gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[#021435] text-base sm:text-lg">
                  ★
                </span>
              ))}
            </div>

            <h4 className="text-[#021435] font-semibold text-base sm:text-lg">
              K. Deepak
            </h4>
            <p className="text-[#021435] text-xs sm:text-sm">Chennai</p>
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
    <img
      src="/avatars/user01.png"
      alt="user"
      className="w-14 h-14 object-contain"
    />
  )
}

/* 🔹 Vertical Divider */
function Divider() {
  return <div className="w-px h-16 bg-[#021435]" />
}
