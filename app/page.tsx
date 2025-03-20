"use client"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import VideoShow from "./components/VideoShow";
import Short from "./components/Short";
import DesignerShow from "./components/DesignerShow";
// import AboutPage from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  const url = "https://www.youtube.com/embed/XFroiyOmxUo?si=oBo5iVX8vVRQ7ng5";
  const id = url.split("/").pop()?.split("?")[0];
  console.log(id);
  return (
    <div className="w-full relative">
      <div className="fixed top-0 left-0 right-0 z-[100]">
        <Navbar />
      </div>

      <Header />
      <VideoShow />
      <Short />
      <DesignerShow />
      {/* <AboutPage /> */}
      <Footer />
    </div>
  );
}
