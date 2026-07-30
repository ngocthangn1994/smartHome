import Header from "../HomePage/components/Header";
import HeroSection from "./components/HeroSection";
import Detail from "./components/Detail";
import Information from "./components/Information";
function About() {
  return (
    <>
      <div className="w-full h-full py-5">
        <Header />
        <HeroSection />
        <Detail />
        <Information />
      </div>
    </>
  );
}

export default About;
