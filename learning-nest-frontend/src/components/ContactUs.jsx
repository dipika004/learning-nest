import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section id="contact" className="bg-[#F4EFE9] py-12 px-4 sm:px-6 lg:px-20 scroll-smooth">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#583015] text-center mb-12">
        Contact Us
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 text-black">
        {/* Phone */}
        <div className="flex items-start gap-4">
          <FaPhoneAlt className="text-2xl text-[#583015]" />
          <div>
            <h3 className="font-semibold text-lg">Phone</h3>
            <a href="tel:+919969496748" className="text-gray-700 hover:text-[#583015] block">
              +91 9969496748
            </a>
            <a href="tel:+919969496748" className="text-gray-700 hover:text-[#583015] block">
              +91 9969496748
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-start gap-4">
          <FaWhatsapp className="text-2xl text-green-600" />
          <div>
            <h3 className="font-semibold text-lg">WhatsApp</h3>
            <a
              href="https://wa.me/919969496748"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-green-700 block"
            >
              +91 9869958002
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <FaEnvelope className="text-2xl text-[#583015]" />
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <a
              href="mailto:palkritika8@gmail.com"
              className="text-gray-700 hover:text-[#583015] block"
            >
              palkritika8@gmail.com
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-4">
          <FaMapMarkerAlt className="text-2xl text-[#583015]" />
          <div>
            <h3 className="font-semibold text-lg">Address</h3>
            <a
              href="https://www.google.com/maps/search/?api=1&query=C-Wing+Shop+N0.2+Regency+Park+Chakkinaka+Kalyan+East"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#583015] block"
            >
              C-Wing, Shop N0.2, Regency Park, Chakkinaka, Kalyan (East)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
