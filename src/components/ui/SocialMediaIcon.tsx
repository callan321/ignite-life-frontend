import Link from "next/link";
import {NavigationIcon} from "@/config/navigationData";

export default function SocialMediaIcon({item} : {item : NavigationIcon} ) {
    return (
        <Link href={item.href} className="text-gray-600 hover:text-gray-900 hover:scale-110">
            <span className="sr-only">{item.name}</span>
            <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8" >
                <path
                    fillRule="evenodd"
                    d={item.d}
                    clipRule="evenodd"
                />
            </svg>
        </Link>
    )
}
