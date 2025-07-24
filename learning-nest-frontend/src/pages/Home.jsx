import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import ClassesOffered from "../components/ClassesOffered";
import Batches from "../components/Batches";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
    <TopBar/>
    <Navbar/>
    <HeroSection/>
    <AboutUs/>
    <ClassesOffered/>
    <Batches/>
    <WhyChooseUs/>
    <ContactUs/>
    <Footer/>
    </>
  );
}

export default Home;
