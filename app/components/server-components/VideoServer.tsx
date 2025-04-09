import dynamic from "next/dynamic";

const VideoClient = dynamic(() => import('@/app/components/VideoClient'), { ssr: false});

export default function VideoServer({ src }: { src: string }) {
    return <VideoClient src={src} />
}