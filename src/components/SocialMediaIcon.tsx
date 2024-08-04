import Link from "next/link";
import {NavigationIcon} from "@/config/types";

export default function SocialMediaIcon({item} : {item : NavigationIcon} ) {
    return (
        <Link href={item.href} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">{item.name}</span>
            <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                <path
                    fillRule="evenodd"
                    d={item.d}
                    clipRule="evenodd"
                />
            </svg>
        </Link>

    )
}
