"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

const linkYT = [
  {
    type: "tiktok",
    embed: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7481846321003924737" data-video-id="7481846321003924737" style="max-width: 605px; min-width: 325px;">
                <section>
                    <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a>
                    ตัวอย่างคลิปสมัครxBoxค่ตรเร็ว😱
                </section>
            </blockquote>`,
  },
  {
    type: "tiktok",
    embed: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7481845581954993428" data-video-id="7481845581954993428" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a> BED WARS กับเพื่อนชิวๆคร้าบบ-PART1 <a title="มายคราฟbedwars" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%9Fbedwars?refer=embed">#มายคราฟbedwars</a> #เล่นมายคราฟกับเพื่อน #มายคราฟ <a title="มายคราฟฮาๆ" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%9F%E0%B8%AE%E0%B8%B2%E0%B9%86?refer=embed">#มายคราฟฮาๆ</a> <a title="ปั่นจัด" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%9B%E0%B8%B1%E0%B9%88%E0%B8%99%E0%B8%88%E0%B8%B1%E0%B8%94?refer=embed">#ปั่นจัด</a> <a target="_blank" title="♬ เสียงต้นฉบับ  - Phoom_300x" href="https://www.tiktok.com/music/เสียงต้นฉบับ-Phoom300x-7481845685550107408?refer=embed">♬ เสียงต้นฉบับ  - Phoom_300x</a> </section> </blockquote>`,
  },
  {
    type: "tiktok",
    embed: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7469368776283163912" data-video-id="7469368776283163912" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a> เมื่อผมลองTNT💥100ลูกกับTextureแก้แลค + ตั้งค่าเกมลื่นheadแตก #MinecraftPE <a title="ลองtnt" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A5%E0%B8%AD%E0%B8%87tnt?refer=embed">#ลองtnt</a> #มายคราฟลื่นขึ้น #มายคราฟ #MinecraftMemes #MinecraftPE #MinecraftPC #MinecraftBuilds #MinecraftArt #MinecraftServer #MinecraftPocketEdition #MinecraftXbox #MinecraftPS3 #MinecraftUniverse #MinecraftMods #MinecraftSurvival #MinecraftCreative #MinecraftRedstone #MinecraftBuildings #MinecraftCommunity #MinecraftThailand #MinecraftTH <a title="มายคราฟtnt100ลูก" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%9Ftnt100%E0%B8%A5%E0%B8%B9%E0%B8%81?refer=embed">#มายคราฟTNT100ลูก</a> <a target="_blank" title="♬ เสียงต้นฉบับ  - Phoom_300x" href="https://www.tiktok.com/music/เสียงต้นฉบับ-Phoom300x-7469368833334184721?refer=embed">♬ เสียงต้นฉบับ  - Phoom_300x</a> </section> </blockquote>',
  },
  {
    type: "tiktok",
    embed: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7468259995839171847" data-video-id="7468259995839171847" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a> <p>ตั้งค่ามายคราฟให้ลื่นโคตรละเอียดโคตรเร็ว #Minecraft #มายคราฟ #มายคราฟลื่นขึ้น #มายคราฟลดแลค #มายคราฟมือถือ #ตั้งค่ามายคราฟ #มายคราฟสเปคต่ำ #มายคราฟไม่แลค #มายคราฟFPSBoost #มายคราฟOptimize #มายคราฟTexturePack #มายคราฟResourcePack #มายคราฟ8x8 #มายคราฟPerformizer #มายคราฟมือถือกาก #มายคราฟTNT100ลูก</p> <a target="_blank" title="♬ เสียงต้นฉบับ  - Phoom_300x" href="https://www.tiktok.com/music/เสียงต้นฉบับ-Phoom300x-7468260825405442817?refer=embed">♬ เสียงต้นฉบับ  - Phoom_300x</a> </section> </blockquote>',
  },
  {
    type: "tiktok",
    embed: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7458663832169385223" data-video-id="7458663832169385223" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a> วันแข่งจริง ปั้น3Dหัตถกรรม <a title="blender" target="_blank" href="https://www.tiktok.com/tag/blender?refer=embed">#blender</a> <a title="หัดปั้นโมเดล" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%AB%E0%B8%B1%E0%B8%94%E0%B8%9B%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B9%82%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%A5?refer=embed">#หัดปั้นโมเดล</a> <a title="แข่งหัตถกรรมครั้งที่" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%AB%E0%B8%B1%E0%B8%95%E0%B8%96%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88?refer=embed">#แข่งหัตถกรรมครั้งที่</a> <a title="หัตถกรรมอีสาน" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%AB%E0%B8%B1%E0%B8%95%E0%B8%96%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%AD%E0%B8%B5%E0%B8%AA%E0%B8%B2%E0%B8%99?refer=embed">#หัตถกรรมอีสาน</a> <a title="แข่งหัตถกรรมครั้งที่72" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%AB%E0%B8%B1%E0%B8%95%E0%B8%96%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%8872?refer=embed">#แข่งหัตถกรรมครั้งที่72</a> <a target="_blank" title="♬ เสียงต้นฉบับ  - Phoom_300x" href="https://www.tiktok.com/music/เสียงต้นฉบับ-Phoom300x-7458663897164843792?refer=embed">♬ เสียงต้นฉบับ  - Phoom_300x</a> </section> </blockquote>',
  },
  {
    type: "tiktok",
    embed: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7457194198941371649" data-video-id="7457194198941371649" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a> หัดปั้นโมเดล3Dใน 12วัน | Blender <a title="blender" target="_blank" href="https://www.tiktok.com/tag/blender?refer=embed">#blender</a> <a title="หัดปั้นโมเดล" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%AB%E0%B8%B1%E0%B8%94%E0%B8%9B%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B9%82%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%A5?refer=embed">#หัดปั้นโมเดล</a> <a title="ชาเลนตัวเอง" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%A5%E0%B8%99%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%80%E0%B8%AD%E0%B8%87?refer=embed">#ชาเลนตัวเอง</a> <a title="ฝึกฝนเรียนรู้ให้ชํานาญ" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%9D%E0%B8%B6%E0%B8%81%E0%B8%9D%E0%B8%99%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%8A%E0%B9%8D%E0%B8%B2%E0%B8%99%E0%B8%B2%E0%B8%8D?refer=embed">#ฝึกฝนเรียนรู้ให้ชํานาญ</a> <a target="_blank" title="♬ เสียงต้นฉบับ  - Phoom_300x" href="https://www.tiktok.com/music/เสียงต้นฉบับ-Phoom300x-7457194300883880705?refer=embed">♬ เสียงต้นฉบับ  - Phoom_300x</a> </section> </blockquote>',
  },
  {
    type: "tiktok",
    embed: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7457194198941371649" data-video-id="7457194198941371649" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a> หัดปั้นโมเดล3Dใน 12วัน | Blender <a title="blender" target="_blank" href="https://www.tiktok.com/tag/blender?refer=embed">#blender</a> <a title="หัดปั้นโมเดล" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%AB%E0%B8%B1%E0%B8%94%E0%B8%9B%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B9%82%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%A5?refer=embed">#หัดปั้นโมเดล</a> <a title="ชาเลนตัวเอง" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%A5%E0%B8%99%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%80%E0%B8%AD%E0%B8%87?refer=embed">#ชาเลนตัวเอง</a> <a title="ฝึกฝนเรียนรู้ให้ชํานาญ" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%9D%E0%B8%B6%E0%B8%81%E0%B8%9D%E0%B8%99%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%8A%E0%B9%8D%E0%B8%B2%E0%B8%99%E0%B8%B2%E0%B8%8D?refer=embed">#ฝึกฝนเรียนรู้ให้ชํานาญ</a> <a target="_blank" title="♬ เสียงต้นฉบับ  - Phoom_300x" href="https://www.tiktok.com/music/เสียงต้นฉบับ-Phoom300x-7457194300883880705?refer=embed">♬ เสียงต้นฉบับ  - Phoom_300x</a> </section> </blockquote>',
  },
  {
    type: "tiktok",
    embed: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7040693204647185690" data-video-id="7040693204647185690" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a> ไม่ได้ใช้ลิ้งก็จะแปลกๆจากชาวบ้านหน่อย😅<a title="ไม่มีคนดูก็จะลง" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%84%E0%B8%99%E0%B8%94%E0%B8%B9%E0%B8%81%E0%B9%87%E0%B8%88%E0%B8%B0%E0%B8%A5%E0%B8%87?refer=embed">#ไม่มีคนดูก็จะลง</a> <a title="เอาลิ้งไหมวัยรุ้น😸" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%80%E0%B8%AD%E0%B8%B2%E0%B8%A5%E0%B8%B4%E0%B9%89%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%A2%E0%B8%A3%E0%B8%B8%E0%B9%89%E0%B8%99%F0%9F%98%B8?refer=embed">#เอาลิ้งไหมวัยรุ้น😸</a> <a target="_blank" title="♬ เสียงต้นฉบับ - FB-ณัฐวุฒิ สุทธิรักษ์(อาร์ม) - ILEXSI อาร์มนักชิว" href="https://www.tiktok.com/music/เสียงต้นฉบับ-FB-ณัฐวุฒิ-สุทธิรักษ์-อาร์ม-7031130257277061915?refer=embed">♬ เสียงต้นฉบับ - FB-ณัฐวุฒิ สุทธิรักษ์(อาร์ม) - ILEXSI อาร์มนักชิว</a> </section> </blockquote>',
  },
];

const Short = () => {
  useEffect(() => {
    // โหลดสคริปต์ของ TikTok ถ้ายังไม่มี
    if (!document.querySelector("script[src='https://www.tiktok.com/embed.js']")) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

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
            <li className="w-full h-auto rounded-2xl">
              {item.type === "youtube" ? (
                <iframe
                  width="100%"
                  height="315"
                  src={item.embed}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl"
                />
              ) : (
                <div
                  dangerouslySetInnerHTML={{ __html: item.embed }}
                  className="tiktok-container"
                />
              )}
            </li>
          </motion.div>
        ))}
      </ul>
    </div>
  );
};

export default Short;