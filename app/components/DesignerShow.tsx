"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageData {
  file: string;
  width: number;
  height: number;
}

export default function DesignerShow() {
  const images = JSON.parse(process.env.DESIGNER_IMAGES || "[]") || [];
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });


  // Initialize window size after component mounts
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  const handleImageClick = (image: ImageData) => {
    setSelectedImage(image);
    setIsZoomed(false);
  };

  const calculateImageSize = () => {
    if (!selectedImage || windowSize.width === 0) return { width: 0, height: 0 };

    const maxWidth = windowSize.width * 0.9;
    const maxHeight = windowSize.height * 0.9;

    const ratio = Math.min(
      maxWidth / selectedImage.width,
      maxHeight / selectedImage.height
    );

    return {
      width: selectedImage.width * ratio,
      height: selectedImage.height * ratio
    };
  };

  return (
    <div id="Graphics Design" className="container my-24 mx-auto px-4 flex flex-col justify-center items-center gap-10">
      <h1 className="text-3xl font-bold text-center drop-shadow-[0_0_10px_rgba(0,200,200,0.8)]">
        Designer & Photo
      </h1>

      {images.length === 0 ? (
        <p className="text-center text-gray-500">ไม่พบรูปภาพในโฟลเดอร์</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 justify-center items-center">
          {images
            .sort((a: ImageData) => (a.width > a.height ? -1 : a.width < a.height ? 1 : 0))
            .map((image: ImageData) => (
              <div
                key={image.file}
                className="w-full p-4 flex flex-col justify-center items-center drop-shadow-2xl cursor-pointer rounded-lg bg-white mx-auto hover:bg-gray-100 transition-colors"
                onClick={() => handleImageClick(image)}
              >
                <p className="text-gray-700 text-center truncate w-full">
                  {image.file.replace(/\.(jpg|jpeg|png|gif|webp)$/i, "")}
                </p>
                <div className="relative w-full h-auto aspect-square">
                  <Image
                    fill
                    src={`/designer/${image.file}`}
                    alt={image.file}
                    className="object-contain select-none"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
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
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/designer/${selectedImage.file}`}
              alt="Selected Image"
              width={isZoomed ? selectedImage.width : calculateImageSize().width}
              height={isZoomed ? selectedImage.height : calculateImageSize().height}
              className={`select-nonetransition-all duration-300 ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
              onClick={() => setIsZoomed(!isZoomed)}
              style={{
                objectFit: 'contain'
              }}
            />
            <button
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white text-2xl w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-100 hover:drop-shadow-[0_0_12px_rgba(10,10,10,0.8)] transition-all duration-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <button
              className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded hover:bg-opacity-100 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(!isZoomed);
              }}
            >
              {isZoomed ? 'ย่อ' : 'ขยาย'}
            </button>
          </div>
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