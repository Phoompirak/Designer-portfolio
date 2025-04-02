"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Props {
  videoUrl: string;
}

// ฟังก์ชันสำหรับดึง videoId อย่างแม่นยำ
const extractYouTubeVideoId = (url: string) => {
  const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const YouTubeEmbed: React.FC<Props> = ({ videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState<boolean | null>(null);
  const [videoId, setVideoId] = useState<string | null>(null);

  useEffect(() => {
    setIsPlaying(false); // ทำให้แน่ใจว่า Hydration ตรงกัน
    setVideoId(extractYouTubeVideoId(videoUrl));
  }, [videoUrl]);

  if (!videoId) {
    return <p className="text-red-500">Invalid YouTube URL</p>;
  }

  return (
    <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96">
      {isPlaying ? (
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
        <div
          className="w-full h-full bg-black rounded-lg cursor-pointer relative"
          onClick={() => setIsPlaying(true)}
        >
          <Image
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="YouTube Thumbnail"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
            width={480}
            height={360}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <svg
              className="w-16 h-16 text-white opacity-80"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTubeEmbed;
