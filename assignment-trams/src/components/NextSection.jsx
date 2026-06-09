import React from "react";
import meeting1 from "../assets/images/meeting1.jpg";
import meeting2 from "../assets/images/meeting2.jpg";

const NextSection = () => {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">

      {/* Connecting Curve */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1400 900"
        preserveAspectRatio="none"
      >
        <path
          d="M1050 250
             C1200 280 1320 350 1360 450
             C1380 550 1200 650 980 580
             C820 520 700 520 620 600"
          fill="none"
          stroke="#ff6f6f"
          strokeWidth="3"
        />

        <path
          d="M1055 255
             C1205 285 1325 355 1365 455
             C1385 555 1205 655 985 585
             C825 525 705 525 625 605"
          fill="none"
          stroke="#000"
          strokeOpacity=".08"
          strokeWidth="12"
        />
      </svg>

      <div className="max-w-[1400px] mx-auto px-4 md:px-10 relative z-10">

        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-24">

          {/* Text */}
          <div>
            <h2 className="text-[45px] sm:text-[55px] md:text-[72px] leading-[0.9] text-black" style={{ fontFamily: "gerbil" }}>

              <div className="relative inline-block">
                Tomorrow should
                <svg
                  className="absolute -bottom-2 left-0"
                  width="260"
                  height="20"
                >
                  <path
                    d="M5 10 Q120 -5 250 10"
                    stroke="#f4b53f"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              </div>



              <br />

              be better than{" "}

              <span className="relative inline-block">
                <span className="absolute inset-0 bg-[#d9e4d4] rounded-full"></span>
                <span className="relative px-4">today</span>
              </span>
            </h2>

            <p className="text-[14px] sm:text-[18px] md:text-[22px] leading-relaxed text-[#222] mt-8 max-w-[500px]" style={{ fontFamily: "satoshi" }}>
              We are a team of strategists, designers communicators,
              researchers. Together, we believe that progress only
              happens when you refuse to play things safe.
            </p>

            <button className="mt-10 flex items-center gap-5 font-satoshi text-sm sm:text-base md:text-lg">
              Read more
              <span className="w-20 sm:w-28 md:w-32 h-[1px] bg-black"></span>
              →
            </button>
          </div>

          {/* Image */}
          <div className="relative flex justify-center">
            <div className="absolute top-5 md:top-10 right-5 md:right-10 w-24 md:w-40 h-24 md:h-40 bg-[#ff6f6f] rotate-12"></div>

            <img
              src={meeting1}
              alt=""
              className="relative z-10 w-56 h-56 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] rounded-full object-cover"
            />
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-24 mt-16 md:mt-32">

          {/* Image */}
          <div className="relative flex justify-center order-2 md:order-1">

            <div className="absolute left-4 md:left-8 top-8 md:top-20 w-20 md:w-32 h-20 md:h-32 bg-[#ff6f6f] rotate-12"></div>

            <div className="absolute right-4 md:right-10 bottom-0 w-24 md:w-40 h-24 md:h-40 bg-[#ff6f6f] rotate-0 [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"></div>

            <img
              src={meeting2}
              alt=""
              className="relative z-10 w-56 h-56 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] rounded-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <h2 className="text-[45px] sm:text-[55px] md:text-[72px] leading-[0.9]" style={{ fontFamily: "gerbil" }}>

              <span className="relative inline-block">
                <span className="absolute inset-0 bg-[#d9e4d4] rounded-full"></span>
                <span className="relative px-4">See</span>
              </span>

              {" "}how we can

              <br />

              help you progress
            </h2>

            <svg
              className="mt-2"
              width="320"
              height="25"
            >
              <path
                d="M5 12 Q150 -2 310 12"
                stroke="#f4b53f"
                strokeWidth="4"
                fill="none"
              />
            </svg>

            <p className="text-[14px] sm:text-[18px] md:text-[22px] leading-relaxed text-[#222] mt-8 max-w-[560px]" style={{ fontFamily: "satoshi" }}>
              We add a layer of fearless insights and action that
              allows change makers to accelerate their progress in
              areas such as brand, design, digital, comms and social
              research.
            </p>

            <button className="mt-10 flex items-center gap-5 font-satoshi text-sm sm:text-base md:text-lg">
              Read more
              <span className="w-20 sm:w-28 md:w-32 h-[1px] bg-black"></span>
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NextSection;

              <div className="relative inline-block">
                Tomorrow should
                <svg
                  className="absolute -bottom-2 left-0"
                  width="260"
                  height="20"
                >
                  <path
                    d="M5 10 Q120 -5 250 10"
                    stroke="#f4b53f"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              </div>


              

              <br />

              be better than{" "}

              <span className="relative inline-block">
                <span className="absolute inset-0 bg-[#d9e4d4] rounded-full"></span>
                <span className="relative px-4">today</span>
              </span>
            </h2>

            <p className="text-[22px] leading-relaxed text-[#222] mt-8 max-w-[500px]" style={{ fontFamily: "satoshi" }}>
              We are a team of strategists, designers communicators,
              researchers. Together, we believe that progress only
              happens when you refuse to play things safe.
            </p>

            <button className="mt-10 flex items-center gap-5 font-satoshi text-lg">
              Read more
              <span className="w-32 h-[1px] bg-black"></span>
              →
            </button>
          </div>

          {/* Image */}
          <div className="relative flex justify-center">
            <div className="absolute top-10 right-10 w-40 h-40 bg-[#ff6f6f] rotate-12"></div>

            <img
              src={meeting1}
              alt=""
              className="relative z-10 w-[500px] h-[500px] rounded-full object-cover"
            />
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-2 items-center gap-24 mt-32">

          {/* Image */}
          <div className="relative flex justify-center">

            <div className="absolute left-8 top-20 w-32 h-32 bg-[#ff6f6f] rotate-12"></div>

            <div className="absolute right-10 bottom-0 w-40 h-40 bg-[#ff6f6f] rotate-0 [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"></div>

            <img
              src={meeting2}
              alt=""
              className="relative z-10 w-[500px] h-[500px] rounded-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-[72px] leading-[0.9]" style={{ fontFamily: "gerbil" }}>

              <span className="relative inline-block">
                <span className="absolute inset-0 bg-[#d9e4d4] rounded-full"></span>
                <span className="relative px-4">See</span>
              </span>

              {" "}how we can

              <br />

              help you progress
            </h2>

            <svg
              className="mt-2"
              width="320"
              height="25"
            >
              <path
                d="M5 12 Q150 -2 310 12"
                stroke="#f4b53f"
                strokeWidth="4"
                fill="none"
              />
            </svg>

            <p className=" text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed text-[#222] mt-8 max-w-[560px]" style={{ fontFamily: "satoshi" }}>
              We add a layer of fearless insights and action that
              allows change makers to accelerate their progress in
              areas such as brand, design, digital, comms and social
              research.
            </p>

            <button className="mt-10 flex items-center gap-5 font-satoshi text-sm sm:text-base md:text-lg">
              Read more
              <span className="w-20 sm:w-28 md:w-32 h-[1px] bg-black"></span>
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NextSection;

              <div className="relative inline-block">
                Tomorrow should
                <svg
                  className="absolute -bottom-2 left-0"
                  width="260"
                  height="20"
                >
                  <path
                    d="M5 10 Q120 -5 250 10"
                    stroke="#f4b53f"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              </div>


              

              <br />

              be better than{" "}

              <span className="relative inline-block">
                <span className="absolute inset-0 bg-[#d9e4d4] rounded-full"></span>
                <span className="relative px-4">today</span>
              </span>
            </h2>

            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed text-[#222] mt-8 max-w-[500px]" style={{ fontFamily: "satoshi" }}>
              We are a team of strategists, designers communicators,
              researchers. Together, we believe that progress only
              happens when you refuse to play things safe.
            </p>

            <button className="mt-10 flex items-center gap-5 font-satoshi text-sm sm:text-base md:text-lg">
              Read more
              <span className="w-20 sm:w-28 md:w-32 h-[1px] bg-black"></span>
              →
            </button>
          </div>

          {/* Image */}
          <div className="relative flex justify-center order-1 md:order-2">
            <div className="absolute top-5 sm:top-8 md:top-10 lg:top-10 right-5 sm:right-8 md:right-10 lg:right-10 w-20 sm:w-28 md:w-32 lg:w-40 h-20 sm:h-28 md:h-32 lg:h-40 bg-[#ff6f6f] rotate-12"></div>

            <img
              src={meeting1}
              alt=""
              className="relative z-10 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] rounded-full object-cover"
            />
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 lg:gap-24 mt-16 md:mt-32">

          {/* Image */}
          <div className="relative flex justify-center">

            <div className="absolute left-4 sm:left-6 md:left-8 top-5 sm:top-8 md:top-20 w-16 sm:w-20 md:w-32 h-16 sm:h-20 md:h-32 bg-[#ff6f6f] rotate-12"></div>

            <div className="absolute right-4 sm:right-6 md:right-10 bottom-0 w-20 sm:w-28 md:w-40 h-20 sm:h-28 md:h-40 bg-[#ff6f6f] rotate-0 [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"></div>

            <img
              src={meeting2}
              alt=""
              className="relative z-10 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] rounded-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[90px] leading-[0.9]" style={{ fontFamily: "gerbil" }}>

              <span className="relative inline-block">
                <span className="absolute inset-0 bg-[#d9e4d4] rounded-full"></span>
                <span className="relative px-4">See</span>
              </span>

              {" "}how we can

              <br />

              help you progress
            </h2>

            <svg
              className="mt-2"
              width="200"
              height="20"
              viewBox="0 0 320 25"
              preserveAspectRatio="none"
            >
              <path
                d="M5 12 Q150 -2 310 12"
                stroke="#f4b53f"
                strokeWidth="4"
                fill="none"
              />
            </svg>

            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed text-[#222] mt-8 max-w-[560px]" style={{ fontFamily: "satoshi" }}>
              We add a layer of fearless insights and action that
              allows change makers to accelerate their progress in
              areas such as brand, design, digital, comms and social
              research.
            </p>

            <button className="mt-10 flex items-center gap-5 font-satoshi text-sm sm:text-base md:text-lg">
              Read more
              <span className="w-20 sm:w-28 md:w-32 h-[1px] bg-black"></span>
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NextSection;