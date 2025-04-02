import React, { useState } from "react";

interface Props {
  videoUrl: string;
}

const getYouTubeThumbnail = (url: string) => {
  const videoId = url.split("/embed/")[1]?.split("?")[0];
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

const YouTubeEmbed: React.FC<Props> = ({ videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96">
      {isPlaying ? (
        <iframe
          className="w-full h-full rounded-lg"
          src={`${videoUrl}?autoplay=1&rel=0`}
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
          <img
            src={getYouTubeThumbnail(videoUrl)}
            alt="YouTube Thumbnail"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
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
