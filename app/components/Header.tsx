'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

import { motion } from "framer-motion"

import { TypeAnimation } from 'react-type-animation';


const Header = () => {
    const images = ["/phoompirak-remove-bg.png", '/skin-Phoom-300x.png', "/phoom2.png"];
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <div id='Home' className='relative w-full bg-[#0a0a0a] overflow-hidden py-30'>
                <div>
                    <Image
                        src={'/portfolio.png'}
                        width={960}
                        height={540}
                        priority={true}  // โหลดก่อน
                        quality={10}     // ลดคุณภาพเพื่อให้โหลดไวขึ้น
                        className="w-full h-full md:h-auto object-cover absolute top-0 left-0 z-0 bg-cover bg-top blur-sm brightness-50"
                        alt="background-design"
                    />


                    <div className='flex flex-col lg:flex-row items-center gap-6 h-full justify-between p-10'>
                        <div className='text-white z-[1]'>
                            <motion.div
                                initial={{ opacity: 0, x: -200 }}  // เริ่มต้นโปร่งใส และอยู่ขวา 50px
                                animate={{ opacity: 1, x: 0 }}   // ค่อยๆ ชัดขึ้น และเลื่อนไปตำแหน่งเดิม
                                transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}
                            >
                                <TypeAnimation
                                    sequence={[
                                        "I'm a Designer",
                                        2000,
                                        "ผลงานที่น่าสนใจ!",
                                        2000,
                                        "I'm a Editor",
                                        1500,
                                    ]}
                                    // className='animate__rubberBand'
                                    speed={90}
                                    repeat={Infinity}
                                    style={{
                                        fontSize: 'clamp(2rem, 5vw, 7rem)',
                                        backgroundImage: 'linear-gradient(to right, #ff416c, #ffb52b)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        willChange: 'transform, opacity',  // เพิ่มประสิทธิภาพการแสดงผล
                                        borderRadius: '50px',
                                    }}
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -200 }}  // เริ่มต้นโปร่งใส และอยู่ขวา 50px
                                animate={{ opacity: 1, x: 0 }}   // ค่อยๆ ชัดขึ้น และเลื่อนไปตำแหน่งเดิม
                                transition={{ duration: 0.6, ease: "easeInOut" }}   // ใช้เวลา 0.8 วินาที
                                className='text-white text-[clamp(1.5rem,2.5vw,2rem)] flex flex-col flex-wrap gap-2 drop-shadow-4xl shadow-4xl'
                            >

                                <div>
                                    ผมเป็น
                                    <a href='https://www.youtube.com/@phoom300x' className=" inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 shadow-lg shadow-black/10 backdrop-blur-md transition-all hover:scale-105 hover:shadow-xl">
                                        <Image
                                            height={24}
                                            width={24}
                                            alt="YouTube"
                                            src="/youtube.png"
                                            priority={true}  // โหลดก่อน
                                            quality={40}     // ลดคุณภาพเพื่อให้โหลดไวขึ้น
                                            className="w-6 h-6 transition-transform duration-300 group-hover:rotate-[10deg]"
                                        />
                                        <span className="text-white text-[clamp(1rem,2.5vw,1.5rem)] font-medium tracking-wide">Youtuber</span>
                                    </a>

                                    ประสบการณ์ทำคอนเทนต์เกี่ยวกับเกม

                                    <a href='#Video' className="cursor-pointer inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 shadow-lg shadow-black/10 backdrop-blur-md transition-all hover:scale-105 hover:shadow-xl">
                                        <Image
                                            height={24}
                                            width={24}
                                            priority={true}  // โหลดก่อน
                                            quality={40}     // ลดคุณภาพเพื่อให้โหลดไวขึ้น
                                            alt="YouTube"
                                            src="/Bedrock.webp"
                                            className="w-6 h-6 transition-transform duration-300 group-hover:rotate-[10deg]"
                                        />
                                        <span className="text-white text-[clamp(1rem,2.5vw,1.5rem)] font-medium tracking-wide">Minecraft</span>
                                    </a>
                                    มา 5 ปี
                                </div>
                                <div>
                                    ซึ่งมีความสามารถในการทําคอนเทนต์, ทำปกคลิป, ป้ายโฆษณา, ทำสไลด์, พัฒนาเว็บไซต์, ปั้น3D models
                                </div>

                            <div className='scale-90'>
                                <a href='https://www.youtube.com/@4phoompirakkarajak427' className=" inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 shadow-lg shadow-black/10 backdrop-blur-md transition-all hover:scale-105 hover:shadow-xl">
                                    <Image
                                        height={16}
                                        width={16}
                                        alt="YouTube"
                                        src="/youtube.png"
                                        priority={true}  // โหลดก่อน
                                        quality={60}     // ลดคุณภาพเพื่อให้โหลดไวขึ้น
                                        className="w-6 h-6 transition-transform duration-300 group-hover:rotate-[10deg]"
                                    />
                                    <span className="text-white text-[clamp(1rem,2.5vw,1.5rem)] font-medium tracking-wide">ช่องสำรอง</span>
                                </a>
                            </div>
                            </motion.div>



                        </div>
                        <motion.div
                            key={index} // ใช้ key เพื่อให้ motion รู้ว่าต้อง animate
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="z-[1] rounded-full h-[500px] select-none pointer-events-none"
                        >
                            <Image
                                src={images[index]}
                                width={400}
                                height={400}
                                className="object-cover contrast-110 brightness-90"
                                alt="ceo"
                                priority
                                quality={30}
                            />
                        </motion.div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Header;

