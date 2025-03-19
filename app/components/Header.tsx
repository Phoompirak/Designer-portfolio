'use client'

import Image from 'next/image';

import { motion } from "framer-motion"

import { TypeAnimation } from 'react-type-animation';


const Header = () => {

    return (
        <>
            <div id='Home' className='relative w-full bg-[#0a0a0a] overflow-hidden py-30'>
                <div>
                    <Image
                        src={'/portfolio.png'}
                        width={1920}
                        height={1080}
                        priority={true}  // โหลดก่อน
                        quality={60}     // ลดคุณภาพเพื่อให้โหลดไวขึ้น
                        className="w-full h-full md:h-auto object-cover absolute top-0 left-0 z-0 bg-cover bg-top blur-[2px] brightness-50"
                        alt="background-design"
                    />


                    <div className='flex flex-col lg:flex-row items-center gap-6 justify-between p-10'>
                        <div className='text-white z-[1]'>
                            <motion.div
                                initial={{ opacity: 0, x: -200 }}  // เริ่มต้นโปร่งใส และอยู่ขวา 50px
                                animate={{ opacity: 1, x: 0 }}   // ค่อยๆ ชัดขึ้น และเลื่อนไปตำแหน่งเดิม
                                transition={{ duration: 0.8 }}   // ใช้เวลา 0.8 วินาที
                            >
                                <TypeAnimation
                                    sequence={[
                                        "I'm a Designer",
                                        2000,
                                        "รวมผลงานที่น่าสนใจ!",
                                        2000,
                                        "I'm a YouTube Editor",
                                        1500,
                                    ]}
                                    // className='animate__rubberBand'
                                    speed={80}
                                    repeat={Infinity}
                                    style={{
                                        fontSize: 'clamp(3.5rem, 5.5vw, 7rem)',
                                        background: 'linear-gradient(to right, #ff416c, #ffb52b)', // ใช้ gradient ที่ blend ดีขึ้น
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        transition: 'all 0.3s ease-out',
                                        willChange: 'transform, opacity',
                                        borderRadius: '50px',
                                    }}
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -200 }}  // เริ่มต้นโปร่งใส และอยู่ขวา 50px
                                animate={{ opacity: 1, x: 0 }}   // ค่อยๆ ชัดขึ้น และเลื่อนไปตำแหน่งเดิม
                                transition={{ duration: 0.8 }}   // ใช้เวลา 0.8 วินาที
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
                                            quality={60}     // ลดคุณภาพเพื่อให้โหลดไวขึ้น
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
                                            quality={60}     // ลดคุณภาพเพื่อให้โหลดไวขึ้น
                                            alt="YouTube"
                                            src="/Bedrock.webp"
                                            className="w-6 h-6 transition-transform duration-300 group-hover:rotate-[10deg]"
                                        />
                                        <span className="text-white text-[clamp(1rem,2.5vw,1.5rem)] font-medium tracking-wide">Minecraft</span>
                                    </a>
                                    มา 5 ปี
                                </div>
                                <div>
                                    ซึ่งมีความสามารถในการทําคอนเทนต์, ทำปกคลิป, ป้ายโฆษณา, ทำสไลด์, หนังสั้น, พัฒนาเว็บไซต์
                                </div>

                            </motion.div>


                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 200 }}  // เริ่มต้นโปร่งใส และอยู่ขวา 50px
                            animate={{ opacity: 1, x: 0 }}   // ค่อยๆ ชัดขึ้น และเลื่อนไปตำแหน่งเดิม
                            transition={{ duration: 0.8 }}   // ใช้เวลา 0.8 วินาที
                        >
                            <div className='z-[1] rounded-[100%] select-none pointer-events-none animate-[fadeInRight_2s_ease-in-out_forwards]'>
                                <Image
                                    src={'/phoompirak-remove-bg.png'}
                                    className='contrast-110 brightness-90'
                                    width={300} height={300}
                                    alt='ceo'
                                    priority={true}  // โหลดก่อน
                                    quality={60}
                                />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

