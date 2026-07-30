import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorkSection from "./components/HowItWorkSection";
import SecuritySection from "./components/SecuritySection";
import Footer from "./components/Footer";
import AdvanceSecurity from "./components/AdvanceSecurity";
function Homepage() {
  return (
    <>
      <div className="w-full h-full py-5">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <HowItWorkSection />
        <AdvanceSecurity />
        <SecuritySection />
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
