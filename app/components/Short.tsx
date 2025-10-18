"use client";
import React from "react";
import './css/tiktok.module.css'
import VideoClient from "./VideoClient";


type Props = {
  shortPath: string[];
};


const Short = ({ shortPath }: Props) => {

  return (
    <div id="Short" className="bg-[#0a0a0a] text-white flex flex-col p-14 gap-10 md:p-8 lg:p-14 overflow-hidden">
      <h1 className="text-3xl font-bold text-center">Short & Tiktok</h1>
      <ul
        style={{ background: "#0a0a0a", minHeight: "10vh", padding: "100px 20px" }}
        className="flex flex-row flex-wrap gap-10 justify-center items-start"
      >
        {shortPath.map((video, index) => (
          <li key={index} className="flex justify-center">
            <VideoClient src={`/short/${video}`} />
          </li>
        ))}
      </ul>
    </div >
  );
};

export default Short;