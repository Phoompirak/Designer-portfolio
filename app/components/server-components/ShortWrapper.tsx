import Short from "@/app/components/Short";

export default function ShortWrapper() {
    const shortPath: [string] = JSON.parse(process.env.SHORT_PATH || "[]") || [];
    
    return <Short shortPath={shortPath}/>;
}