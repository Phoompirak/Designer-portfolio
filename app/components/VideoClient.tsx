"use client";
import { useRef, useState } from "react";

export default function VideoClient({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFirstPlay, setIsFirstPlay] = useState(true);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video && isFirstPlay) {
      // เปิดเสียงแบบค่อยๆ (fade in) เพื่อความลื่นไหล
      video.muted = false;
      video.volume = 0;
      
      // ค่อยๆ เพิ่มเสียงขึ้นเรื่อยๆ
      let vol = 0;
      const fadeIn = setInterval(() => {
        if (vol < 1) {
          vol += 0.1;
          if (video) video.volume = Math.min(vol, 1);
        } else {
          clearInterval(fadeIn);
        }
      }, 50); // จะใช้เวลาประมาณ 0.5 วินาทีในการเพิ่มเสียงเต็ม

      setIsFirstPlay(false);
    }
  };

  const handleLoadedMetadata = () => {
    // โหลด metadata แล้วพร้อมเล่น
    const video = videoRef.current;
    if (video) {
      video.volume = 1; // ตั้งค่า volume เริ่มต้น
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
        muted // เริ่มต้น muted เพื่อให้พร้อมเล่น
        loop
        preload="auto" // เปลี่ยนเป็น auto เพื่อโหลดวิดีโอล่วงหน้า
        onPlay={handlePlay}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </div>
  );
}