"use client"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import VideoShow from "./components/VideoShow";
import Short from "./components/Short";
import DesignerShow from "./components/DesignerShow";
// import DesignerServer from "./components/DesignerServer";
import AboutPage from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full relative">
      <div className="fixed top-0 left-0 right-0 z-[100]">
        <Navbar />
      </div>

      <Header />
      <AboutPage />
      <VideoShow />
      <Short />
      {/* <DesignerServer /> */}
      <DesignerShow />
      <Footer />
    </div>
  );
}
