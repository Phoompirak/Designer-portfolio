"use client";
import { useRef } from "react";

export default function VideoClient({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // กดเล่นแล้วเปิดเสียง
  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false; // เปิดเสียงตอนกดเล่น
    }
  };

  return (
    <div
      className="relative w-[300px] h-[480px] md:w-[320px] md:h-[515px] lg:w-[350px] lg:h-[570px] 
                 flex justify-center items-center bg-black/10 rounded-2xl overflow-hidden"
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 
                   transition-transform duration-300 ease-out"
        src={src}
        controls
        playsInline
        muted
        loop
        preload="metadata"
        onPlay={handlePlay}
      />
    </div>
  );
}
