import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll"; // ✅ Use react-scroll for smooth scrolling
import logo from "../assets/bird.png"; // Adjust path as needed

const Footer = () => {
  return (
    <footer className="bg-[#583015] text-white py-10 px-4 sm:px-8 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {/* Logo + Why Learning Nest */}
        <div>
          <img
            src={logo}
            alt="Learning Nest Logo"
            className="w-20 h-20 object-cover rounded-full border-2 border-[#583015] mb-4"
          />
          <h3 className="text-xl font-semibold mb-4">Why Learning Nest?</h3>
          <p className="text-sm leading-relaxed">
            Learning Nest offers topic-wise tests, personalized attention, and a safe environment. We focus on holistic development, academic support, and confidence-building for every child.
          </p>
        </div>

        {/* Quick Links with smooth scrolling */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", to: "home" },
              { label: "About", to: "about" },
              { label: "Classes", to: "classes" },
              { label: "Batches", to: "batches" },
              { label: "Why Choose Us", to: "why-choose-us" },
            ].map((link, i) => (
              <li key={i}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="hover:underline cursor-pointer"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-lg" /> +91 85910 62769
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-lg" /> +91 85910 62769
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-lg" /> learningnest.edu@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <IoLocationSharp className="text-lg" /> A/503 Regency Park, Kalyan East, Mumbai
            </li>
          </ul>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
