import Header from "../HomePage//components/Header";
import Footer from "../HomePage/components/Footer";
import ExploreFeature from "../HomePage/components/ExploreFeature";
import FeaturesPhone from "../HomePage/components/FeaturesPhone";
import FeaturesHeroSection from "../HomePage/components/FeaturesHeroSection";
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
