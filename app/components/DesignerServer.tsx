"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageData {
    file: string;
    width: number;
    height: number;
}

export default function DesignerShow() {
    const [images, setImages] = useState<ImageData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchImages() {
            try {
                setLoading(true);
                const response = await fetch('/api/designer-images');

                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }

                const data = await response.json();
                setImages(data.images || []);
                setError(null);
            } catch (error) {
                console.error("Failed to fetch images:", error);
                setError("ไม่สามารถโหลดรูปภาพได้ กรุณาลองใหม่อีกครั้ง");
            } finally {
                setLoading(false);
            }
        }

        fetchImages();
    }, []);

    return (
        <div id="Graphics Design" className="container mx-auto px-4 py-16 bg-[#0a0a0a] text-gray-200">
            <h1 className="text-3xl font-bold mb-8 text-center text-amber-400 border-b border-amber-400 pb-2 w-fit mx-auto">
                Designer & Photo
            </h1>

            {loading ? (
                <div className="flex justify-center items-center min-h-[200px]">
                    <div className="animate-pulse flex flex-col items-center">
                        <div className="h-12 w-12 rounded-full border-4 border-t-amber-400 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
                        <p className="mt-4 text-gray-400">กำลังโหลดรูปภาพ...</p>
                    </div>
                </div>
            ) : error ? (
                <div className="text-center text-red-400 p-6 bg-gray-900 rounded-lg max-w-md mx-auto">
                    <p>{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-amber-500 text-black rounded-md hover:bg-amber-400 transition-colors"
                    >
                        โหลดใหม่
                    </button>
                </div>
            ) : images.length === 0 ? (
                <p className="text-center text-gray-500 p-6 bg-gray-900 rounded-lg max-w-md mx-auto">
                    ไม่พบรูปภาพในโฟลเดอร์
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center items-start">
                    {images.map((image: ImageData) => (
                        <div
                            key={image.file}
                            className="w-full flex flex-col justify-center items-center bg-gray-900 rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20"
                        >
                            <p className="text-gray-200 text-center truncate mb-3 font-medium">
                                {image.file.replace(/\.(jpg|jpeg|png|gif|webp)$/i, "")}
                            </p>
                            <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                                <Image
                                    src={`/designer/${image.file}`}
                                    alt={image.file.replace(/\.(jpg|jpeg|png|gif|webp)$/i, "")}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={false}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}