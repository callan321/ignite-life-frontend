'use client'

import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import Link from "next/link";
import {useState} from "react";
import Favicon from "@/components/Favicon";

type NavBarProps = {
    tabs: {
        name: string;
        link: string
    }[];
};

export default function NavBar({tabs}: NavBarProps) {
    // const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-white shadow w-full">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            className="group relative inline-flex items-center justify-center rounded-md p-2
                            text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2
                            focus:ring-inset focus:ring-indigo-500">
                            <span className="absolute -inset-0.5"/>
                            <span className="sr-only">Open main menu</span>
                            {!isOpen && <Bars3Icon aria-hidden="true" className="block h-6 w-6"/>}
                            {isOpen && <XMarkIcon aria-hidden="true" className="block h-6 w-6"/>}
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Favicon aria-hidden="true" size={48}/>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">

                            {tabs.map((tab) => {
                                const isActive = false;
                                return (
                                    <Link key={tab.name} href={tab.link} passHref
                                          className={
                                              isActive
                                                  ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                                                  : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                          }
                                    >
                                        {tab.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <Favicon aria-hidden="true" size={48}/>
                        {/* Profile dropdown */}
                        <div className="sr-only">!!! Placeholder !!!</div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <nav className="sm:hidden">
                    <div className="space-y-1 pb-4 pt-2">
                        {tabs.map((tab) => {
                            const isActive = false;
                            return (
                                <Link key={tab.name} href={tab.link} passHref
                                      className={
                                          isActive
                                              ? "block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                                              : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                      }
                                >
                                    {tab.name}
                                </Link>
                            );
                        })}
                    </div>
                </nav>)
            }
        </header>
    )
}
