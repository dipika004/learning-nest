import React from "react";
import desktopProfile from "../assets/desktopProfile.jpg";
import mobileProfile from "../assets/mobileProfile.jpg";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="w-full px-6 py-20 bg-gradient-to-br from-[#fff8f0] to-[#ffece0] font-sans"
    >
      {/* Section Heading */}
      <h1 className="text-center text-5xl md:text-6xl font-bold text-[#A27448] mb-20">
        About Us
      </h1>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">
        {/* Left: Teacher Image */}
        <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#A27448] transform transition-transform duration-500 hover:scale-105 aspect-[3/4]">
          {/* Desktop Image */}
          <img
            src={desktopProfile}
            alt="Experienced Tutor"
            className="w-full h-full object-cover object-center hidden md:block"
          />
          {/* Mobile Image */}
          <img
            src={mobileProfile}
            alt="Experienced Tutor"
            className="w-full h-full object-cover object-center block md:hidden"
          />
        </div>

        {/* Right: About Info */}
        <div className="w-full md:w-1/2 text-[#3a2f26] space-y-8">
          <p className="text-xl md:text-2xl leading-relaxed">
            Welcome to <span className="font-bold text-[#A27448]">Learning Nest</span> – your dedicated tuition center for students from{" "}
            <span className="text-[#8B4513] font-semibold">Playgroup to 8th Standard</span>. We proudly cover all major boards including{" "}
            <span className="text-[#8B4513] font-semibold">State, CBSE, ICSE, and IGCSE</span>.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed">
            With over <span className="font-bold text-[#A27448]">15 years of proven teaching experience</span> (M.A., B.Ed), I provide individual attention to every student, nurturing their academic growth with care and expertise. Our program includes{" "}
            <span className="text-[#8B4513] font-semibold">weekly tests, topic-wise practice, and school-pattern question papers</span>.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed">
            At Learning Nest, students thrive in a <span className="font-bold text-[#A27448]">safe, friendly, and inspiring environment</span>—gaining confidence and building a strong academic foundation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
