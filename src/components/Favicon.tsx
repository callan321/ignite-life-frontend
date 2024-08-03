import Image from "next/image";

interface FaviconProps {
    size: number;
    className?: string;
}

export default function Favicon({ size, className }: FaviconProps) {
    return (
        <Image src='/favicon.png' alt='Ignite Life Favicon' className={className} width={size} height={size} />
    );
}
