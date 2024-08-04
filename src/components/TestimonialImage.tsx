import Image from "next/image";

interface TestimonialProps {
    url: string,
    alt: string,
}

export default function TestimonialImage({url, alt}: TestimonialProps) {
    return (
        <div className="relative aspect-[2/3] w-full  overflow-hidden bg-gray-900/5">
            <Image
                src={url}
                alt={alt}
                layout="fill"
                objectFit="cover"
            />
        </div>
    );
}
