"use client";

import React from "react";

export default function YouTubeEmbed({ videoUrl }: { videoUrl: string }) {
  return (
    <iframe
      width="100%"
      height="315"
      src={videoUrl}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      className="rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl"
    />
  );
}
