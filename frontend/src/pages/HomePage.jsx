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
    <div className="scroll-smooth">
      <Navbar />
      
      {/* Home / Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Overview / About Section */}
      <section id="overview">
        <AboutProject />
      </section>

      {/* Amenities Section */}
      <section id="amenities">
        <Amenities />
      </section>

      {/* Floor Plans Section */}
      <section id="floor-plans">
        <FloorPlans />
      </section>

      {/* Connectivity / Video Section */}
      <section id="connectivity">
        <CityVideoSection />
      </section>

      {/* Developer Section */}
      <section id="developer">
        <DeveloperInfo />
      </section>

      {/* Construction Updates Section */}
      <section id="updates">
        <ConstructionUpdates />
      </section>

      {/* FAQs Section */}
      <section id="faqs">
        <FAQs />
      </section>

      {/* Contact is usually part of the Footer or a separate section */}
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default HomePage;