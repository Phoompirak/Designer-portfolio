"use client";
import React, { useEffect, useState, useRef } from "react";
import './css/tiktok.module.css'
import VideoClient from "./VideoClient";

// โหลด Tiktok Embed เมื่อscrollถึง
export function TT({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // โหลดครั้งเดียว
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{isVisible ? children : null}</div>;
}

const TiktokEmbed = ({ embedCode }: { embedCode: string }) => {

  useEffect(() => {

    // โหลด JavaScript Tiktok Embed หลังจากcomponent ถูกโหลด
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: embedCode }} />
}

const linkYT = [
  {
    type: "tiktok",
    embed: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7481846321003924737" data-video-id="7481846321003924737" style="">
                <section>
                    <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a>
                    ตัวอย่างคลิปสมัครxBoxค่ตรเร็ว😱
                </section>
            </blockquote>`,
  },
  {
    type: "tiktok",
    embed: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7481845581954993428" data-video-id="7481845581954993428" style="" > <section> <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a> BED WARS กับเพื่อนชิวๆคร้าบบ-PART1 <a title="มายคราฟbedwars" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%9Fbedwars?refer=embed">#มายคราฟbedwars</a> #เล่นมายคราฟกับเพื่อน #มายคราฟ <a title="มายคราฟฮาๆ" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%9F%E0%B8%AE%E0%B8%B2%E0%B9%86?refer=embed">#มายคราฟฮาๆ</a> <a title="ปั่นจัด" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%9B%E0%B8%B1%E0%B9%88%E0%B8%99%E0%B8%88%E0%B8%B1%E0%B8%94?refer=embed">#ปั่นจัด</a> <a target="_blank" title="♬ เสียงต้นฉบับ  - Phoom_300x" href="https://www.tiktok.com/music/เสียงต้นฉบับ-Phoom300x-7481845685550107408?refer=embed">♬ เสียงต้นฉบับ  - Phoom_300x</a> </section> </blockquote>`,
  },
  {
    type: "tiktok",
    embed: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7469368776283163912" data-video-id="7469368776283163912" style="" > <section> <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a> เมื่อผมลองTNT💥100ลูกกับTextureแก้แลค + ตั้งค่าเกมลื่นheadแตก #MinecraftPE <a title="ลองtnt" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A5%E0%B8%AD%E0%B8%87tnt?refer=embed">#ลองtnt</a> #มายคราฟลื่นขึ้น #มายคราฟ #MinecraftMemes #MinecraftPE #MinecraftPC #MinecraftBuilds #MinecraftArt #MinecraftServer #MinecraftPocketEdition #MinecraftXbox #MinecraftPS3 #MinecraftUniverse #MinecraftMods #MinecraftSurvival #MinecraftCreative #MinecraftRedstone #MinecraftBuildings #MinecraftCommunity #MinecraftThailand #MinecraftTH <a title="มายคราฟtnt100ลูก" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%9Ftnt100%E0%B8%A5%E0%B8%B9%E0%B8%81?refer=embed">#มายคราฟTNT100ลูก</a> <a target="_blank" title="♬ เสียงต้นฉบับ  - Phoom_300x" href="https://www.tiktok.com/music/เสียงต้นฉบับ-Phoom300x-7469368833334184721?refer=embed">♬ เสียงต้นฉบับ  - Phoom_300x</a> </section> </blockquote>',
  },
  {
    type: "tiktok",
    embed: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7468259995839171847" data-video-id="7468259995839171847" style="" > <section> <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a> <p>ตั้งค่ามายคราฟให้ลื่นโคตรละเอียดโคตรเร็ว #Minecraft #มายคราฟ #มายคราฟลื่นขึ้น #มายคราฟลดแลค #มายคราฟมือถือ #ตั้งค่ามายคราฟ #มายคราฟสเปคต่ำ #มายคราฟไม่แลค #มายคราฟFPSBoost #มายคราฟOptimize #มายคราฟTexturePack #มายคราฟResourcePack #มายคราฟ8x8 #มายคราฟPerformizer #มายคราฟมือถือกาก #มายคราฟTNT100ลูก</p> <a target="_blank" title="♬ เสียงต้นฉบับ  - Phoom_300x" href="https://www.tiktok.com/music/เสียงต้นฉบับ-Phoom300x-7468260825405442817?refer=embed">♬ เสียงต้นฉบับ  - Phoom_300x</a> </section> </blockquote>',
  },
  {
    type: "tiktok",
    embed: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7458663832169385223" data-video-id="7458663832169385223" style="" > <section> <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a> วันแข่งจริง ปั้น3Dหัตถกรรม <a title="blender" target="_blank" href="https://www.tiktok.com/tag/blender?refer=embed">#blender</a> <a title="หัดปั้นโมเดล" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%AB%E0%B8%B1%E0%B8%94%E0%B8%9B%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B9%82%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%A5?refer=embed">#หัดปั้นโมเดล</a> <a title="แข่งหัตถกรรมครั้งที่" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%AB%E0%B8%B1%E0%B8%95%E0%B8%96%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88?refer=embed">#แข่งหัตถกรรมครั้งที่</a> <a title="หัตถกรรมอีสาน" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%AB%E0%B8%B1%E0%B8%95%E0%B8%96%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%AD%E0%B8%B5%E0%B8%AA%E0%B8%B2%E0%B8%99?refer=embed">#หัตถกรรมอีสาน</a> <a title="แข่งหัตถกรรมครั้งที่72" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%AB%E0%B8%B1%E0%B8%95%E0%B8%96%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%8872?refer=embed">#แข่งหัตถกรรมครั้งที่72</a> <a target="_blank" title="♬ เสียงต้นฉบับ  - Phoom_300x" href="https://www.tiktok.com/music/เสียงต้นฉบับ-Phoom300x-7458663897164843792?refer=embed">♬ เสียงต้นฉบับ  - Phoom_300x</a> </section> </blockquote>',
  },
  {
    type: "tiktok",
    embed: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7457194198941371649" data-video-id="7457194198941371649" style="" > <section> <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a> หัดปั้นโมเดล3Dใน 12วัน | Blender <a title="blender" target="_blank" href="https://www.tiktok.com/tag/blender?refer=embed">#blender</a> <a title="หัดปั้นโมเดล" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%AB%E0%B8%B1%E0%B8%94%E0%B8%9B%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B9%82%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%A5?refer=embed">#หัดปั้นโมเดล</a> <a title="ชาเลนตัวเอง" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%A5%E0%B8%99%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%80%E0%B8%AD%E0%B8%87?refer=embed">#ชาเลนตัวเอง</a> <a title="ฝึกฝนเรียนรู้ให้ชํานาญ" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%9D%E0%B8%B6%E0%B8%81%E0%B8%9D%E0%B8%99%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%8A%E0%B9%8D%E0%B8%B2%E0%B8%99%E0%B8%B2%E0%B8%8D?refer=embed">#ฝึกฝนเรียนรู้ให้ชํานาญ</a> <a target="_blank" title="♬ เสียงต้นฉบับ  - Phoom_300x" href="https://www.tiktok.com/music/เสียงต้นฉบับ-Phoom300x-7457194300883880705?refer=embed">♬ เสียงต้นฉบับ  - Phoom_300x</a> </section> </blockquote>',
  },
  {
    type: "tiktok",
    embed: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7040693204647185690" data-video-id="7040693204647185690" style="" > <section> <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a> ไม่ได้ใช้ลิ้งก็จะแปลกๆจากชาวบ้านหน่อย😅<a title="ไม่มีคนดูก็จะลง" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%84%E0%B8%99%E0%B8%94%E0%B8%B9%E0%B8%81%E0%B9%87%E0%B8%88%E0%B8%B0%E0%B8%A5%E0%B8%87?refer=embed">#ไม่มีคนดูก็จะลง</a> <a title="เอาลิ้งไหมวัยรุ้น😸" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%80%E0%B8%AD%E0%B8%B2%E0%B8%A5%E0%B8%B4%E0%B9%89%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%A2%E0%B8%A3%E0%B8%B8%E0%B9%89%E0%B8%99%F0%9F%98%B8?refer=embed">#เอาลิ้งไหมวัยรุ้น😸</a> <a target="_blank" title="♬ เสียงต้นฉบับ - FB-ณัฐวุฒิ สุทธิรักษ์(อาร์ม) - ILEXSI อาร์มนักชิว" href="https://www.tiktok.com/music/เสียงต้นฉบับ-FB-ณัฐวุฒิ-สุทธิรักษ์-อาร์ม-7031130257277061915?refer=embed">♬ เสียงต้นฉบับ - FB-ณัฐวุฒิ สุทธิรักษ์(อาร์ม) - ILEXSI อาร์มนักชิว</a> </section> </blockquote>',
  },
];

type Props = {
  shortPath: string[];
};

const Short = ({ shortPath }: Props) => {

  return (
    <div id="Short" className="bg-[#0a0a0a] text-white flex flex-col p-14 gap-10 md:p-8 lg:p-14 overflow-hidden">
      <h1 className="text-3xl font-bold text-center">Short & Tiktok</h1>

      {/* className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center" */}
      <ul
        style={{ background: "#0a0a0a", minHeight: "10vh", padding: "100px 20px" }}
        className="flex flex-row flex-wrap md:flex-nowrap gap-10 justify-center items-start"
      >
        {shortPath.map((video, index) => (
          <li key={index} className="flex justify-center">
            <VideoClient src={`/short/${video}`} />
          </li>
        ))}
      </ul>

      {/* {
          linkYT.map((video, index) => (
            <li key={`tiktok-${index}`} className="flex-1 max-w-[605px] sm:max-w-full">
              <div className="w-full h-auto rounded-lg flex-1">
                <TT key={`scrollload-${index}`}>
                  <TiktokEmbed embedCode={video.embed} />
                </TT>
              </div>
            </li>
          ))
        } */}
    {/* </ul> */}
    </div >
  );
};

export default Short;







// "use client";
// import React, { useState, useEffect, memo, useRef } from "react";
// import './css/tiktok.module.css'
// import VideoClient from "./VideoClient";

// const TiktokEmbed = memo(({ embedCode }: { embedCode: string }) => {
//   const [isIntersecting, setIsIntersecting] = useState(false);
//   const embedRef = useRef<HTMLDivElement>(null);
//   const scriptLoaded = useRef(false);

//   // ตรวจว่า scroll มาถึงยัง
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsIntersecting(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.1 } //เห็น 10% ก็โหลด

//     );

//     if (embedRef.current) {
//       observer.observe(embedRef.current);
//     }

//     // cleanup เมื่อ component ถูกลบ
//     return () => observer.disconnect();





//   }, [])

//   // โหลดscript Tiktok Embedเมื่อscrollมาถึง
//   useEffect(() => {
//     // โหลด JavaScript Tiktok Embed หลังจากcomponent ถูกโหลด
//     if (!isIntersecting || scriptLoaded.current) return;

//     const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');

//     if (!existingScript) {
//       const script = document.createElement("script");
//       script.src = "https://www.tiktok.com/embed.js";
//       script.async = true;
//       script.defer = true;
//       script.onload = () => {
//         scriptLoaded.current = true;
//         if ((window as any).tiktokEmbedLoad) {
//           (window as any).tiktokEmbedLoad();
//         }
//       };
//       document.body.appendChild(script);
//       scriptLoaded.current = true;

//       return () => {
//         document.body.removeChild(script);
//       }
//     }
//   }, [isIntersecting])

//   return (
//     <div ref={embedRef}>
//       {
//         isIntersecting && (
//           <div dangerouslySetInnerHTML={{ __html: embedCode }} />
//         )
//       }
//     </div>
//   )
// })

// const linkYT = [
//   {
//     type: "tiktok",
//     embed: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7481846321003924737" data-video-id="7481846321003924737" style="max-width: 605px; min-width: 325px;">
//                 <section>
//                     <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a>
//                     ตัวอย่างคลิปสมัครxBoxค่ตรเร็ว😱
//                 </section>
//             </blockquote>`,
//   },
//   {
//     type: "tiktok",
//     embed: `<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7481845581954993428" data-video-id="7481845581954993428" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a> BED WARS กับเพื่อนชิวๆคร้าบบ-PART1 <a title="มายคราฟbedwars" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%9Fbedwars?refer=embed">#มายคราฟbedwars</a> #เล่นมายคราฟกับเพื่อน #มายคราฟ <a title="มายคราฟฮาๆ" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%9F%E0%B8%AE%E0%B8%B2%E0%B9%86?refer=embed">#มายคราฟฮาๆ</a> <a title="ปั่นจัด" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%9B%E0%B8%B1%E0%B9%88%E0%B8%99%E0%B8%88%E0%B8%B1%E0%B8%94?refer=embed">#ปั่นจัด</a> <a target="_blank" title="♬ เสียงต้นฉบับ  - Phoom_300x" href="https://www.tiktok.com/music/เสียงต้นฉบับ-Phoom300x-7481845685550107408?refer=embed">♬ เสียงต้นฉบับ  - Phoom_300x</a> </section> </blockquote>`,
//   },
//   {
//     type: "tiktok",
//     embed: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7469368776283163912" data-video-id="7469368776283163912" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a> เมื่อผมลองTNT💥100ลูกกับTextureแก้แลค + ตั้งค่าเกมลื่นheadแตก #MinecraftPE <a title="ลองtnt" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A5%E0%B8%AD%E0%B8%87tnt?refer=embed">#ลองtnt</a> #มายคราฟลื่นขึ้น #มายคราฟ #MinecraftMemes #MinecraftPE #MinecraftPC #MinecraftBuilds #MinecraftArt #MinecraftServer #MinecraftPocketEdition #MinecraftXbox #MinecraftPS3 #MinecraftUniverse #MinecraftMods #MinecraftSurvival #MinecraftCreative #MinecraftRedstone #MinecraftBuildings #MinecraftCommunity #MinecraftThailand #MinecraftTH <a title="มายคราฟtnt100ลูก" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%9Ftnt100%E0%B8%A5%E0%B8%B9%E0%B8%81?refer=embed">#มายคราฟTNT100ลูก</a> <a target="_blank" title="♬ เสียงต้นฉบับ  - Phoom_300x" href="https://www.tiktok.com/music/เสียงต้นฉบับ-Phoom300x-7469368833334184721?refer=embed">♬ เสียงต้นฉบับ  - Phoom_300x</a> </section> </blockquote>',
//   },
//   {
//     type: "tiktok",
//     embed: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7468259995839171847" data-video-id="7468259995839171847" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a> <p>ตั้งค่ามายคราฟให้ลื่นโคตรละเอียดโคตรเร็ว #Minecraft #มายคราฟ #มายคราฟลื่นขึ้น #มายคราฟลดแลค #มายคราฟมือถือ #ตั้งค่ามายคราฟ #มายคราฟสเปคต่ำ #มายคราฟไม่แลค #มายคราฟFPSBoost #มายคราฟOptimize #มายคราฟTexturePack #มายคราฟResourcePack #มายคราฟ8x8 #มายคราฟPerformizer #มายคราฟมือถือกาก #มายคราฟTNT100ลูก</p> <a target="_blank" title="♬ เสียงต้นฉบับ  - Phoom_300x" href="https://www.tiktok.com/music/เสียงต้นฉบับ-Phoom300x-7468260825405442817?refer=embed">♬ เสียงต้นฉบับ  - Phoom_300x</a> </section> </blockquote>',
//   },
//   {
//     type: "tiktok",
//     embed: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7458663832169385223" data-video-id="7458663832169385223" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a> วันแข่งจริง ปั้น3Dหัตถกรรม <a title="blender" target="_blank" href="https://www.tiktok.com/tag/blender?refer=embed">#blender</a> <a title="หัดปั้นโมเดล" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%AB%E0%B8%B1%E0%B8%94%E0%B8%9B%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B9%82%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%A5?refer=embed">#หัดปั้นโมเดล</a> <a title="แข่งหัตถกรรมครั้งที่" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%AB%E0%B8%B1%E0%B8%95%E0%B8%96%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88?refer=embed">#แข่งหัตถกรรมครั้งที่</a> <a title="หัตถกรรมอีสาน" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%AB%E0%B8%B1%E0%B8%95%E0%B8%96%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%AD%E0%B8%B5%E0%B8%AA%E0%B8%B2%E0%B8%99?refer=embed">#หัตถกรรมอีสาน</a> <a title="แข่งหัตถกรรมครั้งที่72" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%AB%E0%B8%B1%E0%B8%95%E0%B8%96%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%8872?refer=embed">#แข่งหัตถกรรมครั้งที่72</a> <a target="_blank" title="♬ เสียงต้นฉบับ  - Phoom_300x" href="https://www.tiktok.com/music/เสียงต้นฉบับ-Phoom300x-7458663897164843792?refer=embed">♬ เสียงต้นฉบับ  - Phoom_300x</a> </section> </blockquote>',
//   },
//   {
//     type: "tiktok",
//     embed: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7457194198941371649" data-video-id="7457194198941371649" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a> หัดปั้นโมเดล3Dใน 12วัน | Blender <a title="blender" target="_blank" href="https://www.tiktok.com/tag/blender?refer=embed">#blender</a> <a title="หัดปั้นโมเดล" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%AB%E0%B8%B1%E0%B8%94%E0%B8%9B%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B9%82%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%A5?refer=embed">#หัดปั้นโมเดล</a> <a title="ชาเลนตัวเอง" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%A5%E0%B8%99%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%80%E0%B8%AD%E0%B8%87?refer=embed">#ชาเลนตัวเอง</a> <a title="ฝึกฝนเรียนรู้ให้ชํานาญ" target="_blank" href="https://www.tiktok.com/tag/%E0%B8%9D%E0%B8%B6%E0%B8%81%E0%B8%9D%E0%B8%99%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%8A%E0%B9%8D%E0%B8%B2%E0%B8%99%E0%B8%B2%E0%B8%8D?refer=embed">#ฝึกฝนเรียนรู้ให้ชํานาญ</a> <a target="_blank" title="♬ เสียงต้นฉบับ  - Phoom_300x" href="https://www.tiktok.com/music/เสียงต้นฉบับ-Phoom300x-7457194300883880705?refer=embed">♬ เสียงต้นฉบับ  - Phoom_300x</a> </section> </blockquote>',
//   },
//   {
//     type: "tiktok",
//     embed: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@phoom_300x/video/7040693204647185690" data-video-id="7040693204647185690" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@phoom_300x" href="https://www.tiktok.com/@phoom_300x?refer=embed">@phoom_300x</a> ไม่ได้ใช้ลิ้งก็จะแปลกๆจากชาวบ้านหน่อย😅<a title="ไม่มีคนดูก็จะลง" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%84%E0%B8%99%E0%B8%94%E0%B8%B9%E0%B8%81%E0%B9%87%E0%B8%88%E0%B8%B0%E0%B8%A5%E0%B8%87?refer=embed">#ไม่มีคนดูก็จะลง</a> <a title="เอาลิ้งไหมวัยรุ้น😸" target="_blank" href="https://www.tiktok.com/tag/%E0%B9%80%E0%B8%AD%E0%B8%B2%E0%B8%A5%E0%B8%B4%E0%B9%89%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%A2%E0%B8%A3%E0%B8%B8%E0%B9%89%E0%B8%99%F0%9F%98%B8?refer=embed">#เอาลิ้งไหมวัยรุ้น😸</a> <a target="_blank" title="♬ เสียงต้นฉบับ - FB-ณัฐวุฒิ สุทธิรักษ์(อาร์ม) - ILEXSI อาร์มนักชิว" href="https://www.tiktok.com/music/เสียงต้นฉบับ-FB-ณัฐวุฒิ-สุทธิรักษ์-อาร์ม-7031130257277061915?refer=embed">♬ เสียงต้นฉบับ - FB-ณัฐวุฒิ สุทธิรักษ์(อาร์ม) - ILEXSI อาร์มนักชิว</a> </section> </blockquote>',
//   },
// ];

// const preloadVideos = (paths: string[]) => {
//   if (typeof window !== "undefined") {
//     paths.forEach(path => {
//       const link = document.createElement("link");
//       link.rel = 'preload';
//       link.as = 'video';
//       link.href = `/short/${path}`
//       document.head.appendChild(link);
//     })
//   }
// }

// type Props = {
//   shortPath: string[];
// };

// const Short = ({ shortPath }: Props) => {

//   // โหลดวิดีโอจากเซิร์ฟเวอร์ ที่ไฟล์วิดีโออยู่ใน /public/short/...
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
//         const preloadLink = document.createElement("link");
//         preloadLink.rel = "reload";
//         preloadLink.as = "script";
//         preloadLink.href = "https://www.tiktok.com/embed.js";
//         document.head.appendChild(preloadLink);
//       }

//       const videosToPreload = shortPath.slice(0, 2);
//       preloadVideos(videosToPreload);
//     }
//   }, [shortPath]);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const style = document.createElement("style");
//       style.textContent = `
//       .tiktok-embed-wrapper {
//         min-height: 400px;
//         position: relative;
//         overflow: hidden;
//       }
//       .tiktok-embed {
//         max-width: 100% !important;
//         margin: 0 auto !important;
//       }
//       @media (max-width: 768px) {
//         .tiktok-embed-wrapper {
//           min-height: 300px;
//         }
//       }
//     `;

//       document.head.appendChild(style)
//       return () => {
//         document.head.removeChild(style);
//       }
//     }
//   }, []);


//   return (
//     <div id="Short" className="bg-[#0a0a0a] text-white flex flex-col p-14 gap-10">
//       <h1 className="text-3xl font-bold mb-6 text-center">Short & Tiktok</h1>

//       <ul style={{ background: "#0a0a0a", minHeight: "100vh", padding: "20px" }} className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {/* คลิปที่อัพลงprojectตัวเอง */}
//         {
//           shortPath?.map((video, index) => (
//             <li key={`video-${index}`} className="flex-1 py-4 max-w-[605px] min-w-[325px]">
//               <VideoClient src={`/short/${video}`} />
//             </li>
//           ))
//         }

//         {/* คลิปดึงมาจากแพลตฟอร์มอื่่นๆ */}
//         {
//           linkYT.map((video, index) => (
//             <li key={`tiktok-${index}`} className="flex-1">
//               <div className="w-full h-auto rounded-lg flex-1">
//                 <TiktokEmbed embedCode={video.embed} />
//               </div>
//             </li>
//           ))
//         }
//       </ul>
//     </div>
//   );
// };

// export default Short;