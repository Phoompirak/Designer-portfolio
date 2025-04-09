"use client";

export default function VideoClient({ src }: { src: string }) {
    return (
        <video
            className="w-full h-auto object-cover rounded-lg flex-1"
            src={src}
            controls={true}
            suppressHydrationWarning={true}
        />
    );
}