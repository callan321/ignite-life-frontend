import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";
import {navigation} from "@/config/navigationData";

const inter = Inter({subsets: ["latin"]});

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
        <body className="flex min-h-screen flex-col">
        <NavBar navigation={navigation}/>
        <main className={inter.className}>{children}</main>
        <Footer navigation={navigation} />
        </body>
        </html>
    );
}
