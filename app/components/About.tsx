// "use client";

import React from 'react';
import { SiAdobepremierepro, SiHtml5, SiCss3, SiJavascript, SiNextdotjs, SiAdobephotoshop, SiCanva } from "react-icons/si";

const AboutPage = () => {
  return (
    <div id='About' className="bg-[#0a0a0a] text-gray-200 px-10 py-24">
      <div className="container mx-auto flex flex-col gap-8">
        {/* About Section */}
        <section>
          <h1 className='text-3xl font-bold mb-6 text-pink-300 border-b pb-2'>
            Soft Skills
          </h1>
          <ul>
            <li>เรียนรู้ด้วยตัวเอง</li>
            <li>ดนตรี เช่น กีต้าร์โปร่ง, กีต้าร์ไฟฟ้า, ฮาโมนิก</li>
            <li>ซ่อมอุฟกรณ์ดนตรี, อุฟกรณ์คอมพิวเตอร์</li>
            <li>ความฉลาดด้านอารมณ์และความเข้าใจผู้อื่น</li>
            <li>ดูแลสุขภาพเวทเทรนนิ่ง, อาหารคลีน</li>
          </ul>
        </section>

        {/* Skills Section */}
        <section>
          <h2 id='Skills' className='mb-10 text-2xl font-bold text-pink-300'>
            My Skills
          </h2>

          <div className="flex flex-wrap justify-center text-lg text-gray-800 gap-8 md:gap-24 lg:gap-24">
            {/* Each skill card */}
            <SkillCard icon={<SiHtml5 size={28} className="text-orange-500" />} name="HTML" color="orange" />
            <SkillCard icon={<SiCss3 size={28} className="text-blue-500" />} name="CSS" color="blue" />
            <SkillCard icon={<SiJavascript size={28} className="text-yellow-400" />} name="JavaScript" color="yellow" />
            <SkillCard icon={<SiNextdotjs size={28} className="text-white" />} name="Next.js" color="white" />
            <SkillCard icon={<SiAdobepremierepro size={28} className="text-purple-600" />} name="Premiere Pro" color="purple" />
            <SkillCard icon={<SiAdobephotoshop size={28} className="text-blue-600" />} name="Photoshop" color="blue" />
            <SkillCard icon={<SiCanva size={28} className="text-blue-400" />} name="Canva" color="blue" />
          </div>
        </section>
      </div>
    </div>
  );
};

interface SkillCradProps {
  icon: React.ReactNode;
  name: string;
  color: string;
}

// Skill Card Component with Glowing Effect
const SkillCard = ({ icon, name, color }: SkillCradProps) => {
  // Map color names to gradient and shadow classes
  const gradientMap: Record<string, string> = {
    orange: "from-orange-500 to-red-500",
    blue: "from-blue-500 to-indigo-500",
    yellow: "from-yellow-400 to-orange-500",
    purple: "from-purple-500 to-pink-500",
    white: "from-gray-300 to-gray-500",
  };

  const glowMap: Record<string, string> = {
    orange: "hover:shadow-orange-500/50",
    blue: "hover:shadow-blue-500/50",
    yellow: "hover:shadow-yellow-400/50",
    purple: "hover:shadow-purple-500/50",
    white: "hover:shadow-white/30",
  };

  const gradientClass = gradientMap[color] || "from-gray-700 to-gray-900";
  const glowClass = glowMap[color] || "hover:shadow-white/30";

  return (
    <div className={`relative flex flex-col items-center justify-center p-4 text-white transition-all duration-500 group`}>
      {/* Background Gradient Blur */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} blur-sm opacity-20 rounded-4xl transition-all duration-500 group-hover:opacity-50 group-hover:blur-lg group-hover:brightness-125`}></div>

      {/* Card Content */}
      <div className={`relative bg-white/10 backdrop-blur-md rounded-4xl px-8 py-3 flex flex-row gap-2 jutify-center items-center border border-gray-800 
                      hover:scale-105 hover:shadow-lg ${glowClass} transition-all duration-500`}>
        <div className="transition-transform duration-300 hover:scale-110">{icon}</div>
        <h3 className="font-medium text-center text-sm">{name}</h3>
      </div>
    </div>
  );
};


export default AboutPage;