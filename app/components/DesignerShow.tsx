"use client";
import Image from "next/image";
import { useState } from "react";

interface ImageData {
  file: string;
  width: number;
  height: number;
}

export default function DesignerShow() {
  const images = JSON.parse(process.env.DESIGNER_IMAGES || "[]") || [];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div id="Graphics Design" className="container my-24 mx-auto px-4 flex flex-col gap-10">
      <h1 className="text-3xl font-bold text-center drop-shadow-[0_0_10px_rgba(0,200,200,0.8)]">
        Designer & Photo
      </h1>

      {images.length === 0 ? (
        <p className="text-center text-gray-500">ไม่พบรูปภาพในโฟลเดอร์</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 justify-center items-center">
          {images.map((image: ImageData) => (
            <div
            key={image.file}
            className="w-full p-4 flex flex-col justify-center items-center drop-shadow-2xl cursor-pointer rounded-lg bg-white mx-auto"
            // onClick={() => setSelectedImage(`/designer/${image.file}`)}
            >
              <p className="text-gray-700 text-center truncate">{image.file.replace(/\.(jpg|jpeg|png|gif|webp)$/i, "")}</p>
              <Image width={image.width} height={image.height} src={`/designer/${image.file}`} alt={image.file} />
            </div>
          ))}

          <div className="relative w-full aspect-[16/9] max-w-[500px] mx-auto shadow-lg overflow-hidden rounded-lg">
            <a href="https://www.canva.com/design/DAF95nLDWts/U4jxIJ-WwJ3Mc4PoPqhYEg/view?utm_content=DAF95nLDWts&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">สีฟ้าและสีเขียว น่ารัก ภาพประกอบ ระดมสมอง Mind Map</a>
            <iframe loading="lazy" style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0 }}
              src="https://www.canva.com/design/DAF95nLDWts/U4jxIJ-WwJ3Mc4PoPqhYEg/view?embed" allowFullScreen={true} allow="fullscreen">
            </iframe>
          </div>
        </ul>
      )}

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
        onClick={() => setSelectedImage(null)} >
          <Image src={selectedImage} className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" alt="Selected Image" />
          <button className="absolute top-5 right-5 text-white text-3xl"
          onClick={() => setSelectedImage(null)} >
            x
            </button>

        </div>
      )}

      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4">
        {/* Presentation */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Presentation</h1>
          <div className="relative w-full aspect-[16/9] max-w-[600px] mx-auto shadow-lg overflow-hidden rounded-lg">
            <p className="text-sm text-gray-700 text-center">โดย Phoompirak Karajak</p>
            <iframe
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full border-none"
              src="https://www.canva.com/design/DAFJons0Lmc/NexdKKBXvNXH4DracXyZ4g/view?embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* ประวัติศาสตร์อารยธรรมจีน */}
        <div className="relative w-full aspect-[16/9] max-w-[500px] mx-auto shadow-lg overflow-hidden rounded-lg">
          <a
            href="https://www.canva.com/design/DAGQz10Epzg/PbWoqprVILklgjrpNdQvVA/view?utm_content=DAGQz10Epzg&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
            target="_blank"
            rel="noopener"
            className="block text-center text-blue-600 underline mb-2"
          >
            ประวัติศาสตร์อารยธรรมจีน - นายภูมิภิรักษ์
          </a>
          <iframe
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full border-none"
            src="https://www.canva.com/design/DAGQz10Epzg/PbWoqprVILklgjrpNdQvVA/view?embed"
            allowFullScreen
          ></iframe>
        </div>

        {/* วางแผนการตลาด พรีเซนเทชั่น */}
        <div className="relative w-full aspect-[16/9] max-w-[500px] mx-auto shadow-lg overflow-hidden rounded-lg">
          <a
            href="https://www.canva.com/design/DAGFHfG5ick/7NG0ATLzld_6PEjtjh_z1g/view?utm_content=DAGFHfG5ick&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
            target="_blank"
            rel="noopener"
            className="block text-center text-blue-600 underline mb-2"
          >
            สีขาว สีฟ้า เรียบง่าย วางแผนการตลาด
          </a>
          <p className="text-sm text-gray-700 text-center">โดย Phoompirak Karajak</p>
          <iframe
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full border-none"
            src="https://www.canva.com/design/DAGFHfG5ick/7NG0ATLzld_6PEjtjh_z1g/view?embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>





    </div>
  );
}

// interface CanvasImageProps {
//   src: string;
// }

// function CanvasImage({ src }: CanvasImageProps) {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const img = new Image();
//     img.src = src;
//     img.crossOrigin = "anonymous";
//     img.onload = () => {
//       const canvas = canvasRef.current;
//       if (canvas) {
//         const ctx = canvas.getContext("2d");
//         if (ctx) {
//           const containerWidth = canvas.parentElement?.clientWidth || 300;
//           const scaleFactor = containerWidth / img.width;
//           const newWidth = img.width * scaleFactor;
//           const newHeight = img.height * scaleFactor;

//           canvas.width = newWidth;
//           canvas.height = newHeight;

//           ctx.drawImage(img, 0, 0, newWidth, newHeight);
//         }
//       }
//     };
//   }, [src]);

//   return (
//     <>
//       <canvas
//         ref={canvasRef}
//         className="w-full h-auto hover:scale-110 transition-transform duration-300 ease-in rounded-lg"
//         onContextMenu={(e) => e.preventDefault()} // ป้องกันการคลิกขวาเซฟรูป
//       />
//     </>
//   );
// }
