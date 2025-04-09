"use client"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import VideoShow from "./components/VideoShow";
import DesignerShow from "./components/DesignerShow";
import ShortWrapper from "./components/server-components/ShortWrapper";
// import DesignerServer from "./components/DesignerServer";
import AboutPage from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 right-0 z-[100]">
        <Navbar />
      </div>

      <Header />
      <VideoShow />
      <ShortWrapper />
      <DesignerShow />
      <AboutPage />
      <Footer />
    </div>
  );
}
