import React from "react";

const services = [
  {
    small: "Office of multiple\ninterest content",
    title: "Collaborative & partnership",
  },
  {
    small: "The hanger US Air force\ndigital experimental",
    title: "We talk about our weight",
  },
  {
    small: "Delta faucet content,\nsocial, digital",
    title: "Piloting digital confidence",
  },
];

const OfferSection = () => {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">

      {/* Decorative Curve */}
      <svg
        className="absolute top-0 right-0 w-[55%] h-[250px]"
        viewBox="0 0 800 250"
        fill="none"
      >
        <path
          d="M0 220
             C100 260 100 50 250 40
             C450 20 600 180 760 70
             C800 40 820 0 850 0"
          stroke="#ff6f6f"
          strokeWidth="4"
          fill="none"
        />

        <path
          d="M0 220
             C100 260 100 50 250 40
             C450 20 600 180 760 70
             C800 40 820 0 850 0"
          stroke="black"
          strokeOpacity="0.08"
          strokeWidth="14"
          fill="none"
        />
      </svg>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="mb-12 md:mb-20">

          <h2 className="text-[45px] sm:text-[55px] md:text-[80px] leading-[0.9] text-black" style={{ fontFamily: "gerbil" }}>
            What we{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-[#d8e5d7] rounded-full"></span>
              <span className="relative px-5">can</span>
            </span>

            <br />

            offer you!
          </h2>

          {/* Yellow Scribble */}
          <svg
            className="-mt-2"
            width="270"
            height="40"
          >
            <path
              d="M5 20 Q120 5 260 20"
              stroke="#f2b134"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M120 30 Q190 15 260 25"
              stroke="#f2b134"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </div>

        {/* Services */}
        <div className="border-t border-gray-300">

          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[250px_1fr_80px] items-start sm:items-center md:items-center py-8 md:py-10 border-b border-gray-300 group cursor-pointer gap-4 md:gap-0"
            >
              {/* Left Text */}
              <div className="text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-[#222] whitespace-pre-line" style={{ fontFamily: "satoshi" }}>
                {service.small}
              </div>

              {/* Main Title */}
              <div className="text-[32px] sm:text-[42px] md:text-[56px] text-black transition-transform duration-300 group-hover:translate-x-2" style={{ fontFamily: "gerbil" }}>
                {service.title}
              </div>

              {/* Arrow */}
              <div className="flex justify-start md:justify-end">
                <span className="text-3xl md:text-4xl transition-transform duration-300 group-hover:translate-x-3">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OfferSection;

      </div>
    </section>
  );
};

export default OfferSection;