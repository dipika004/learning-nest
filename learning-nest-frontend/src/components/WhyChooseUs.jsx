import { FaRegFileAlt } from "react-icons/fa";
import { PiNotebookBold } from "react-icons/pi";
import { FaChild } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#E3D3BC] py-16 px-4 sm:px-6 lg:px-20">
      <h2 
      id="why-choose-us"
      className="text-3xl sm:text-4xl font-bold text-[#583015] text-center mb-16">
        Why Choose Us
      </h2>

      <div 
      className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* 1st Item */}
        <div className="flex items-start gap-6">
          <FaRegFileAlt className="text-5xl text-black" />
          <div>
            <h3 className="font-semibold text-2xl text-black">
              Weekly & Topic-wise Tests
            </h3>
            <p className="text-base text-gray-700 mt-2">
              Regular assessments to track performance and improve understanding.
            </p>
          </div>
        </div>

        {/* 2nd Item */}
        <div className="flex items-start gap-6">
          <PiNotebookBold className="text-5xl text-black" />
          <div>
            <h3 className="font-semibold text-2xl text-black">
              Practice Question Papers
            </h3>
            <p className="text-base text-gray-700 mt-2">
              Designed as per school curriculum for better preparation.
            </p>
          </div>
        </div>

        {/* 3rd Item */}
        <div className="flex items-start gap-6">
          <PiUsersThreeFill className="text-5xl text-black" />
          <div>
            <h3 className="font-semibold text-2xl text-black">
              Safe & Friendly Environment
            </h3>
            <p className="text-base text-gray-700 mt-2">
              A nurturing space that encourages learning and curiosity.
            </p>
          </div>
        </div>

        {/* 4th Item */}
        <div className="flex items-start gap-6">
          <FaChild className="text-5xl text-black" />
          <div>
            <h3 className="font-semibold text-2xl text-black">
              Personal Attention to Each Child
            </h3>
            <p className="text-base text-gray-700 mt-2">
              Individualized guidance to unlock every child's potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
