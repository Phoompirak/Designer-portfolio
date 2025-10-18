"use client";

import React from "react";
import { motion } from "framer-motion";
import YouTubeEmbed from "@/app/components/YoutubeembedClient";


const linkYT = [
  "https://www.youtube.com/embed/IjGf9vdu1IM",
  "https://www.youtube.com/embed/XFroiyOmxUo?si=oBo5iVX8vVRQ7ng5",
  "https://www.youtube.com/embed/T28Bk2RPIs0",
  "https://youtu.be/ILuJtCaiN0w?si=YQqs2UrtKRjHvEV1",
  "https://www.youtube.com/embed/wS7lzDJp9sE?si=hm0r2xXJ0rZ06OtK",
  "https://www.youtube.com/embed/OHLcffUBAzA",
  "https://www.youtube.com/embed/9v4nWFWp21k?si=KSDSFlSQjrn1fiqO",
  "https://youtu.be/xP1wRZZfi_U",
  'https://www.youtube.com/embed/svZio6I1LCQ?si=JmtSg3KFwMnaf6kC',
  'https://youtu.be/76oKUemYzi4'
];

const VideoShow = () => {
  return (
    <div id="Video" className="bg-[#0a0a0a] text-white flex flex-col p-14 gap-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Video Editor</h1>

      <ul className="list-none grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10">
        {linkYT.map((videoUrl, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <li className="w-full h-auto">
              <YouTubeEmbed videoUrl={videoUrl} />
            </li>
          </motion.div>
        ))}
      </ul>
    </div>
  );
};

export default VideoShow;
