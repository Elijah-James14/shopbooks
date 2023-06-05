import { useEffect } from "react";
import { Faqs, FeaturedSection, HeroSection, Testimonial } from "./components";

const HomePage = () => {
  useEffect(() => {
    function changeTitle() {
      document.title = "Home";
    }
    changeTitle();
  }, []);
  return (
    <main className="dark:bg-blue-950">
      <HeroSection />
      <FeaturedSection />
      <Testimonial />
      <Faqs />
    </main>
  );
};

export default HomePage;
