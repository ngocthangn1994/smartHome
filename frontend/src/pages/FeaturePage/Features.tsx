import Header from "../HomePage//components/Header";
import Footer from "../HomePage/components/Footer";
import ExploreFeature from "./components/ExploreFeature";
import FeaturesPhone from "./components/FeaturesPhone";
import FeaturesHeroSection from "./components/FeaturesHeroSection";
function Features() {
  return (
    <>
      <div className="w-full h-full py-5">
        <Header />
        <FeaturesHeroSection />
        <ExploreFeature />
        <FeaturesPhone />
        <Footer />
      </div>
    </>
  );
}

export default Features;
