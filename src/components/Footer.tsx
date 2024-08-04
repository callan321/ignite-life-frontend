import {navigation} from "@/config/navigationData";
import SocialMediaIcon from "@/components/SocialMediaIcon";
import {Navigation} from "@/config/types";
import Image from "next/image";

export default function Footer({navigation} : {navigation : Navigation}) {

    return (
        <footer className="bg-white">
            <div className="flex items-center justify-center w-full">
                <div className="relative aspect-[4419/6250] h-[36rem] overflow-hidden ">
                    <Image
                        src="/slogan.png"
                        alt="Ignite Life Slogan"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>

            <div className="mx-auto max-w-7xl overflow-hidden px-6  lg:px-8">
                <nav aria-label="Footer" className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="pb-6">
                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>
                <div className="mt-10 flex justify-center space-x-10">
                    {navigation.social.map((item) => (
                        <SocialMediaIcon key={item.name} item={item}/>
                    ))}
                </div>
                <p className="mt-10 text-center text-xs leading-5 text-gray-500 pb-6 sm:pb-8">
                    &copy; 2024 Ignite Life Bowen Therapy. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
