const WhyChooseUs = ({ data }) => {
  return (
    <section
      className="py-16 text-white"
      style={{
        background: 'linear-gradient(180deg, #021435 0%, #021435 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-4xl font-semibold mb-12">
          Why Choose Us?
        </h2>

        {/* Circles */}
        <div className="flex flex-wrap justify-center gap-14">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-44 h-44 flex items-center justify-center text-center"
              style={{
                backgroundImage: "url('/circle.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
              }}
            >
              <div className="text-black px-4">
                <div className="text-3xl font-bold mb-2">{item.value}</div>

                <div className="text-sm font-medium whitespace-pre-line">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
