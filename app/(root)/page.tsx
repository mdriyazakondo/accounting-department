import AboutSection from "@/components/Home/AboutSection/AboutSection";
import AccountingDepartment from "@/components/Home/AccountingDepartment/AccountingDepartment";
import Faculty from "@/components/Home/Faculty/Faculty";
import GallerySection from "@/components/Home/GallerySection/GallerySection";
import Hero from "@/components/Home/Hero/Hero";
import Principles from "@/components/Home/Principles/Principles";
import Students from "@/components/Home/Students/Students";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Principles />
      <AccountingDepartment />
      <GallerySection />
      <Faculty />
      <Students />
    </div>
  );
};

export default Home;
