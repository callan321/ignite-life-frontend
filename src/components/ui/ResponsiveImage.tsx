import Image from "next/image";

interface ResponsiveImageProps {
    url: string,
    alt: string,
    aspectRatio?: string,
    className?: string,
}

export default function ResponsiveImage({url, alt, aspectRatio = '1', className = ''}: ResponsiveImageProps) {
    return (
        <div className={`relative w-full overflow-hidden ${className}`} style={{ aspectRatio }}>
            <Image
                src={url}
                alt={alt}
                layout="fill"
                objectFit="cover"
            />
        </div>
    );
}
