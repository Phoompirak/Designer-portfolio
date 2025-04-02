"use client";
import { useEffect, useRef, useMemo, useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const menuRef = useRef<HTMLUListElement | null>(null);

  const sections = useMemo(() => 
    ["Home", "Video", "Short", "Graphics Design", "About", "Contact"]
  , []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const el: HTMLElement = document.querySelector(`#${section}`) as HTMLElement;
        if (el) {
          const offsetTop = el.offsetTop - 80; // 80 คือค่า padding ให้ match กับ navbar
          const offsetHeight = el.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sections, setActiveLink]);



  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -200 }}  // เริ่มต้นโปร่งใส และอยู่ขวา 50px
        animate={{ opacity: 1, y: 0 }}   // ค่อยๆ ชัดขึ้น และเลื่อนไปตำแหน่งเดิม
        transition={{ duration: 0.8 }}   // ใช้เวลา 0.8 วินาที
      >
        <nav className="z-[100] relative px-6 py-4 flex items-center justify-between bg-black/50 backdrop-blur-md rounded-2xl mx-4 sm:mx-10 my-5 shadow-md shadow-white/10">
          {/* Logo */}
          <a className="text-3xl font-bold leading-none" href="#">
            <Image
              className="h-10 contrast-150"
              src="/logo.png"
              alt="logo"
              width={40}
              height={40}
              priority={true}  // โหลดก่อน
              quality={60}     // ลดคุณภาพเพื่อให้โหลดไวขึ้น
            />
          </a>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 dark:text-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Navigation Links */}
          <ul
            ref={menuRef} // เชื่อมต่อกับ useRef
            className={`absolute rounded-2xl mt-4 lg:static top-16 left-0 w-full lg:w-auto bg-black/95 backdrop-blur lg:bg-transparent lg:backdrop-blur-none p-4 lg:p-0 flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 transition-all duration-300 ${isOpen ? "block" : "hidden"
              } lg:flex`}
          >
            {sections.map((link, index) => (
              <li key={link} className="relative">
                <a
                  className={`block text-sm px-4 py-2 ${activeLink === link ? "text-white font-bold" : "text-gray-400 hover:text-gray-200"
                    } transition-all duration-300`}
                  href={`#${link}`}
                  onClick={() => setActiveLink(link)}
                >

                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>

                {/* Highlight Effect */}
                {activeLink === link && (
                  <div className="hidden lg:block">
                    <div className={`bg-white transition-all  duration-300 ease-in-out animate-pulse absolute -top-0 left-1/2 h-2 w-8 md:-top-[9px] md:left-1/2 md:h-1 md:w-8 md:-translate-x-1/2 rounded-t-full`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="bg-white/20 absolute -top-2 -left-2 h-6 w-12 rounded-full blur-md"></div>
                      <div className="bg-white/20 absolute -top-1 h-6 w-8 rounded-full blur-md"></div>
                      <div className="bg-white/20 absolute top-0 left-2 h-4 w-4 rounded-full blur-sm"></div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
}

export default Navbar;
