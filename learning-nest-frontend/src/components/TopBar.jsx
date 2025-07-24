const TopBar = () => {
  return (
    <div className="bg-black text-white px-4 py-2 flex flex-col md:flex-row justify-center md:justify-between items-center text-sm md:text-base font-medium">
      <a href="tel:+9969496748" className="hover:text-[#A27448] transition duration-300 mb-1 md:mb-0">
        📞 996-9496-748
      </a>
      <a href="mailto:dipikasahoo004@gmail.com" className="hover:text-[#A27448] transition duration-300 mb-1 md:mb-0">
        ✉️ dipikasahoo004@gmail.com
      </a>
      <a
        href="https://goo.gl/maps/8b1Z5d7f3kz"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#A27448] transition duration-300"
      >
        📍 Shop No.2, Regency Park, Kalyan (East)
      </a>
    </div>
  );
};


export default TopBar;
