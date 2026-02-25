import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import AboutProject from '../components/home/AboutProject';
import Amenities from '../components/home/Amenities';
import FloorPlans from '../components/home/FloorPlans';
import CityVideoSection from '../components/home/CityVideoSection';
import DeveloperInfo from '../components/home/DeveloperInfo';
import ConstructionUpdates from '../components/home/ConstructionUpdates';
import FAQs from '../components/home/FAQs';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutProject />
      <FloorPlans />
      <Amenities />
      <CityVideoSection />
      <DeveloperInfo />
      <ConstructionUpdates />
      <FAQs />
      <Footer />
    </>
  );
}

export default HomePage;