"use client";
import { checkboxGroup } from '@heroui/react';
import Image from 'next/image';

export default function DesignerGalleryPage() {
  // ใช้ environment variable ที่สร้างจาก next.config.js
  const images: { file: string; width: number; height: number }[] = JSON.parse(
    process.env.DESIGNER_IMAGES || '[]'
  );
  
  const getImageClass = (width: number, height: number) => {
    const ratio = width / height;
    if (ratio > 1.5) return "col-span-2 row-span-1"; // แนวนอน
    if (ratio < 1.5) return "col-span-1 row-span-2"; // แนวตั้ง
    return "col-span-1 row-span-1"; // สี่เหลี่ยมจัตุรัต
  }
  return (
    <div id="Graphics Design" className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Designer & Photo</h1>
      {images.length === 0 ? (
        <p className="text-center text-gray-500">ไม่พบรูปภาพในโฟลเดอร์</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center items-center">
          {images.map((image) => (
            <div key={image.file} className="flex flex-col justify-center items-center drop-shadow-2xl rounded-lg bg-white">
              <p className="text-gray-700 text-center truncate">
                {image.file.replace(/\.(jpg|jpeg|png|gif|webp)$/i, '')}
              </p>
              <div className="">
                <Image
                  src={`/designer/${image.file}`}
                  alt={image.file.replace(/\.(jpg|jpeg|png|gif|webp)$/i, '')}
                  width={500} // ต้องกำหนดขนาดให้แน่นอนเพราะ `unoptimized: true`
                  height={500}
                  priority={true}  // โหลดก่อน
                  quality={60}     // ลดคุณภาพเพื่อให้โหลดไวขึ้น
                  className="object-cover rounded-lg transition-transform transition-duration-300 hover:scale-105 hover:translate-y-4"
                />
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

