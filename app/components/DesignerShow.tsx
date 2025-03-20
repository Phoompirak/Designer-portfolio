"use client";
import { useEffect, useRef } from "react";

interface ImageData {
  file: string;
  width: number;
  height: number;
}

export default function DesignerShow() {
  const images = JSON.parse(process.env.DESIGNER_IMAGES || "[]") || [];

  return (
    <div id="Graphics Design" className="container mx-auto px-4 py-30">
      <h1 className="text-3xl font-bold mb-6 text-center">Designer & Photo</h1>
      {images.length === 0 ? (
        <p className="text-center text-gray-500">ไม่พบรูปภาพในโฟลเดอร์</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center items-center">
          {images.map((image: ImageData) => (
            <div key={image.file} className="w-full max-w-xs flex flex-col justify-center items-center drop-shadow-2xl rounded-lg bg-white p-4 mx-auto">
              <p className="text-gray-700 text-center truncate">{image.file.replace(/\.(jpg|jpeg|png|gif|webp)$/i, "")}</p>
              <CanvasImage src={`/designer/${image.file}`} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

interface CanvasImageProps {
  src: string;
}

function CanvasImage({ src }: CanvasImageProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const containerWidth = canvas.parentElement?.clientWidth || 300;
          const scaleFactor = containerWidth / img.width;
          const newWidth = img.width * scaleFactor;
          const newHeight = img.height * scaleFactor;

          canvas.width = newWidth;
          canvas.height = newHeight;

          ctx.drawImage(img, 0, 0, newWidth, newHeight);
        }
      }
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-auto rounded-lg"
      onContextMenu={(e) => e.preventDefault()} // ป้องกันการคลิกขวาเซฟรูป
    />
  );
}
