import React from "react";
import {
  User,
  GraduationCap,
  Globe,
  BookOpen,
  Baby,
} from "lucide-react";

const ClassesOffered = () => {
  return (
    <div 
    id="classes"
    className="w-full bg-[#E3D3BC] py-16 px-6 font-sans">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-[#583015] mb-12">
        Classes Offered
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {/* Left Box - Classes Taught */}
        <div className="bg-[#F2E4D0] rounded-2xl shadow-lg p-8 w-full md:w-1/2 space-y-6 border border-[#A27448] transition duration-300 hover:shadow-2xl">
          <div className="flex items-center gap-3 text-xl font-semibold text-[#583015]">
            <User className="w-6 h-6 text-[#A27448]" />
            Classes Taught
          </div>
          <div className="space-y-4 pl-9">
            <div className="flex items-center gap-3 text-lg text-[#8C745C]">
              <Baby className="w-5 h-5 text-[#A27448]" /> Playgroup
            </div>
            <div className="flex items-center gap-3 text-lg text-[#8C745C]">
              <Baby className="w-5 h-5 text-[#A27448]" /> Jr.KG
            </div>
            <div className="flex items-center gap-3 text-lg text-[#8C745C]">
              <Baby className="w-5 h-5 text-[#A27448]" /> Sr.KG
            </div>
            <div className="flex items-center gap-3 text-lg text-[#8C745C]">
              <BookOpen className="w-5 h-5 text-[#A27448]" /> 1st – 8th Standard
            </div>
          </div>
        </div>

        {/* Right Box - Boards Covered */}
        <div className="bg-[#F2E4D0] rounded-2xl shadow-lg p-8 w-full md:w-1/2 space-y-6 border border-[#A27448] transition duration-300 hover:shadow-2xl">
          <div className="flex items-center gap-3 text-xl font-semibold text-[#583015]">
            <Globe className="w-6 h-6 text-[#A27448]" />
            Boards Covered
          </div>
          <div className="space-y-4 pl-9">
            <div className="flex items-center gap-3 text-lg text-[#8C745C]">
              <GraduationCap className="w-5 h-5 text-[#A27448]" /> State Board
            </div>
            <div className="flex items-center gap-3 text-lg text-[#8C745C]">
              <GraduationCap className="w-5 h-5 text-[#A27448]" /> CBSE
            </div>
            <div className="flex items-center gap-3 text-lg text-[#8C745C]">
              <GraduationCap className="w-5 h-5 text-[#A27448]" /> ICSE
            </div>
            <div className="flex items-center gap-3 text-lg text-[#8C745C]">
              <GraduationCap className="w-5 h-5 text-[#A27448]" /> IGCSE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesOffered;
