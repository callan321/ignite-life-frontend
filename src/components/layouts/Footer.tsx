import SocialMediaIcon from "@/components/ui/SocialMediaIcon";
import {Navigation} from "@/config/navigationData";
import {contactDetails} from "@/config/navigationData";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer({navigation}: { navigation: Navigation }) {

    return (
        <footer className="bg-white w-full flex flex-col justify-center items-center">
            <div className="flex w-full justify-center items-center p-8">
                <div className="bg-gray-200 border-b w-3/4  sm:w-full lg:w-3/4  "></div>
            </div>
            <div className=" lg:w-3/4">
                <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4">
                    <div className="flex items-center justify-center w-full">
                        <div className="relative w-48 h-48">
                            <Image
                                src="/slogan.png"
                                alt="Ignite Life Slogan"
                                fill
                                className=" scale-200 "
                                style={{
                                    objectFit: 'contain',
                                    transform: 'scale(2)',
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex-col flex w-full pl-8">
                        <div className="space-y-0.5">
                            {[
                                {day: "Monday", hours: "9:00 am - 5:00 pm"},
                                {day: "Tuesday", hours: "3:30 pm - 5:00 pm"},
                                {day: "Wednesday", hours: "12:00 am - 5:00 pm"},
                                {day: "Thursday", hours: "12:00 am - 5:00 pm"},
                                {day: "Friday", hours: "9:00 am - 5:00 pm"},
                                {day: "Saturday", hours: "12:00 am - 4:00 pm"},
                            ].map(({day, hours}) => (
                                <div key={day} className="text-xs text-left">
                                    <div className="font-medium">{day}</div>
                                    <div>{hours}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-col flex w-full pl-8">
                        <div className="flex flex-col text-xs space-y-2">
                            <h3 className="font-medium text-sm">Contact details</h3>
                            <Link href="tel:0490 034 249" className="text-primary">
                                <b className="font-normal ">P:{' '}</b>
                                <span className="text-blue-500 hover:text-blue-400 hover:underline">0490 034 249 </span>
                            </Link>
                            <Link
                                href="mailto:ignitelifehealing@gmail.com">
                                <b className="font-normal">E:{' '}</b>
                                <span
                                    className="text-blue-500 hover:text-blue-400 hover:underline"> gnitelifehealing@gmail.com</span>
                            </Link>
                            <div className="space-y-1">
                                <p>Ignite Life Bowen Therapy</p>
                                <p>10, Granite St </p>
                                <p>Lennox Head, New South Wales</p>
                                <p>
                                    <Link
                                        href="https://www.google.com/maps/dir/?api=1&amp;destination=Granite+St/10+Lennox+Head+NSW+2478"
                                        target="_blank" rel="noopener noreferrer">
                                <span
                                    className="text-blue-500 hover:text-blue-400 hover:underline -mt-1">Get Directions </span>
                                    </Link>
                                </p>
                                <div className="flex space-x-8 w-full pt-2 ">
                                    {navigation.social.map((item) => (
                                        <SocialMediaIcon key={item.name} item={item}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-col flex w-full pl-8">
                        <div className="flex flex-col text-xs space-y-2">
                            <h3 className="font-medium text-sm">Newsletter</h3>
                            <p>Coming Soon ...</p>


                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center items-center p-8">
                <div className="bg-gray-200 border-b w-3/4"></div>
            </div>
            <div className="mb-16 w-full">
                <p className="text-center text-xs leading-5 text-gray-500">
                    &copy; Ignite Life Bowen Therapy
                </p>
            </div>


        </footer>
    )
}
