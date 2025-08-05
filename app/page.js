import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";
import TriTravelers from "./components/ui/TriTravelers-Bg-Animation/TriTravelers";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col backthemeColor" >
      <TriTravelers />
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection className="heroSection" />
        <hr />
        <AboutSection />
        <hr />
        <ProjectsSection />
        <hr />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
