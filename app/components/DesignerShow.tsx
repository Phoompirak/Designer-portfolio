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
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 justify-center items-center">
          {images.map((image: ImageData) => (
            <div key={image.file} className="w-full p-10 flex flex-col justify-center items-center drop-shadow-2xl rounded-lg bg-white mx-auto">
              <p className="text-gray-700 text-center truncate">{image.file.replace(/\.(jpg|jpeg|png|gif|webp)$/i, "")}</p>
              <CanvasImage src={`/designer/${image.file}`} />
            </div>
          ))}

        </ul>
      )}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="w-full md:w-1/2">
          <h1>Presentation</h1>
          <div className="relative w-full h-0 pt-[56.25%] pb-0 shadow-lg mt-6 mb-3 overflow-hidden rounded-lg">
            โดย Phoompirak Karajak
            <iframe
              loading="lazy"
              className="absolute w-full h-full top-0 left-0 border-none p-0 m-0"
              src="https://www.canva.com/design/DAFJons0Lmc/NexdKKBXvNXH4DracXyZ4g/view?embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div style={{
            position: "relative", width: "100%", height: 0, paddingTop: "56.2500%",
            paddingBottom: 0, boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", marginTop: "1.6em", marginBottom: "0.9em", overflow: "hidden",
            borderRadius: "8px", willChange: "transform"
          }}>
            <a href="https://www.canva.com/design/DAGQ1016MjQ/2bMnV0khqxiyUGrtw30Qvg/view?utm_content=DAGQ1016MjQ&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">อารยะธรรมอียิปต์-ประวัติศาสตร์</a>
            <iframe loading="lazy" style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0 }}
              src="https://www.canva.com/design/DAGQ1016MjQ/2bMnV0khqxiyUGrtw30Qvg/view?embed" allowFullScreen={true} allow="fullscreen">
            </iframe>
          </div>
        </div>

        <div style={{
          position: "relative", width: "100%", height: 0, paddingTop: "56.2500%",
          paddingBottom: 0, boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", marginTop: "1.6em", marginBottom: "0.9em", overflow: "hidden",
          borderRadius: "8px", willChange: "transform"
        }}>
          <a href="https://www.canva.com/design/DAGQz10Epzg/PbWoqprVILklgjrpNdQvVA/view?utm_content=DAGQz10Epzg&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">ประวัติศาสตร์อารยะรรมจีน-นายภูมิภิรักษ์</a>
          <iframe loading="lazy" style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0 }}
            src="https://www.canva.com/design/DAGQz10Epzg/PbWoqprVILklgjrpNdQvVA/view?embed" allowFullScreen={true} allow="fullscreen">
          </iframe>
        </div>
      </div>
      <div style={{
        position: "relative", width: "100%", height: 0, paddingTop: "56.2500%",
        paddingBottom: 0, boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", marginTop: "1.6em", marginBottom: "0.9em", overflow: "hidden",
        borderRadius: "8px", willChange: "transform"
      }}>
        <a href="https://www.canva.com/design/DAF95nLDWts/U4jxIJ-WwJ3Mc4PoPqhYEg/view?utm_content=DAF95nLDWts&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">สีฟ้าและสีเขียว น่ารัก ภาพประกอบ ระดมสมอง Mind Map</a>
        <iframe loading="lazy" style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0 }}
          src="https://www.canva.com/design/DAF95nLDWts/U4jxIJ-WwJ3Mc4PoPqhYEg/view?embed" allowFullScreen={true} allow="fullscreen">
        </iframe>
      </div>

      <div style={{
        position: "relative", width: "100%", height: 0, paddingTop: "56.2500%",
        paddingBottom: 0, boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", marginTop: "1.6em", marginBottom: "0.9em", overflow: "hidden",
        borderRadius: "8px", willChange: "transform"
      }}>
        <a href="https://www.canva.com/design/DAGFHfG5ick/7NG0ATLzld_6PEjtjh_z1g/view?utm_content=DAGFHfG5ick&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">สีขาว สีฟ้า เรียบง่าย ทางการ วางแผนการตลาด พรีเซนเทชั่น</a> โดย Phoompirak Karajak
        <iframe loading="lazy" style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0 }}
          src="https://www.canva.com/design/DAGFHfG5ick/7NG0ATLzld_6PEjtjh_z1g/view?embed" allowFullScreen={true} allow="fullscreen">
        </iframe>
      </div>

      <div style={{ position: "relative", width: "100%", height: 0, paddingTop: "56.2500%",
        paddingBottom: 0, boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", marginTop: "1.6em", marginBottom: "0.9em", overflow: "hidden",
        borderRadius: "8px", willChange: "transform"
      }}>
        <a href="https://www.canva.com/design/DAF95ic0I00/JatsQ6tGFXIuOwsZaoh5xg/view?utm_content=DAF95ic0I00&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">สีฟ้าและสีเหลือง สนุกสนาน น่ารัก ระดมสมอง Mind Map</a> โดย Phoompirak Karajak
        <iframe loading="lazy" style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0 }}
          src="https://www.canva.com/design/DAF95ic0I00/JatsQ6tGFXIuOwsZaoh5xg/view?embed" allowFullScreen={true} allow="fullscreen">
        </iframe>
      </div>

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
    <>
      <canvas
        ref={canvasRef}
        className="w-full h-auto hover:scale-110 transition-transform duration-300 ease-in rounded-lg"
        onContextMenu={(e) => e.preventDefault()} // ป้องกันการคลิกขวาเซฟรูป
      />
    </>
  );
}
