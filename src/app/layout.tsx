import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({subsets: ["latin"]});

const items = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Contact', link: '/contact'},
];

export const metadata: Metadata = {
    title: "Ignite Life - Bowen Therapy",
    description: "Experience the healing power of Bowen Therapy with Ignite Life. Our holistic approach promotes wellness and balance.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

        <body>
        <main className="flex min-h-screen flex-col items-center justify-between">
            <NavBar items={items}/>
            <div className={inter.className}>{children}</div>
        </main>
        </body>
        </html>
    );
}
