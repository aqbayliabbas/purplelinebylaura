import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-sans",
});

const melodrama = localFont({
    src: [
        {
            path: "../../public/fonts/Melodrama-Variable.woff2",
            style: "normal",
        },
    ],
    variable: "--font-display",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
});

export const metadata: Metadata = {
    title: "PurpleLine by Laura - Coaching Executive & Transition de Carrière",
    description: "Récupérez du sens, gagnez en clarté et transformez votre vie professionnelle en moins de 90 jours avec Laura.",
    icons: {
        icon: "/branding/favicon-white.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`${poppins.variable} ${melodrama.variable} ${playfair.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
