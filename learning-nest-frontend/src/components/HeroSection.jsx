import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="scroll-smooth relative w-full pt-24 pb-20 px-6 md:px-16 lg:px-32 bg-gradient-to-br from-[#E3D3BC] to-[#F5E9DC] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center lg:text-left lg:items-start">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#583015]">
          Trusted Tuition for <br className="hidden sm:block" />
          <span className="text-[#A27448]">Nursery to 8th Standard</span>
        </h1>

        <div className="mt-6">
          <p className="text-lg sm:text-xl font-medium text-[#8C745C] max-w-2xl">
            Building Strong Foundations with Care & Experience.
          </p>

          {/* Line increased by ~2cm (from 232px to 280px) */}
          <div className="h-1 w-[280px] bg-[#A27448] rounded mt-4 mx-auto lg:mx-0"></div>

          <p className="text-sm sm:text-base font-medium text-[#583015] mt-4">
            Personal Attention • Weekly Tests • All Boards Covered
          </p>
        </div>

        <div className="mt-8">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={900}
            offset={-70}
            spy={true}
          >
            <button className="px-8 py-3 bg-[#A27448] hover:bg-[#8C745C] text-white rounded-full font-semibold transition-all duration-300 shadow-md hover:scale-105">
              Contact Us
            </button>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
