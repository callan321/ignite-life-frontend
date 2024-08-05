import Image from "next/image";

interface ResponsiveImageProps {
    url: string,
    alt: string,
    aspectRatio?: string,
    className?: string,
}

export default function ResponsiveImage({url, alt, aspectRatio = '1', className = ''}: ResponsiveImageProps) {
    return (
        <div className={`relative overflow-visible transform   ${className}`} style={{aspectRatio}}>
                <Image
                    src={url}
                    alt={alt}
                    fill
                    className=" scale-200 "
                    style={{
                        objectFit: 'contain',
                        transform: 'scale(2)',
                    }}
                />
        </div>
    );
}
