"use client";

export default function VideoClient({ src }: { src: string }) {
    return (
    <div className="relative w-[300px] h-[480px] md:w-[320px] md:h-[515px] lg:w-[350px] lg:h-[570px] flex justify-center items-center">
      <video
        className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
        src={src}
        controls
        playsInline
        muted
        loop
        suppressHydrationWarning
      />
    </div>
    );
}