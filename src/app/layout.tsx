import type { Metadata } from "next";
import { Poppins, Playfair_Display, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-sans",
});

const dmSerif = DM_Serif_Display({
    subsets: ["latin"],
    weight: ["400"],
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
            <body className={`${poppins.variable} ${dmSerif.variable} ${playfair.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
