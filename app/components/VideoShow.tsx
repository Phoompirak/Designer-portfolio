"use client";

import React from "react";
import { motion } from "framer-motion";

const linkYT = [
  "https://www.youtube.com/embed/IjGf9vdu1IM",
  "https://www.youtube.com/embed/T28Bk2RPIs0",
  "https://www.youtube.com/embed/TdHDpL7u_wQ",
  "https://www.youtube.com/embed/OHLcffUBAzA",
];

const VideoShow = () => {
  return (
    <div id="Video Editor" className="bg-[#0a0a0a] text-white flex flex-col p-14 gap-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Video Editor</h1>

      <ul className="list-none grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10">
        {linkYT.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <li className="w-full h-auto">
              <iframe
                width="100%"
                height="315"
                src={item}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl"
              />
            </li>
          </motion.div>
        ))}
      </ul>
    </div>
  );
};

export default VideoShow;

