import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serif = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const condensed = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Drive Change | AI Transformation Advisory",
    template: "%s | Drive Change",
  },
  description:
    "AI Transformation Strategy, Governance, and Organizational Change for the Intelligent Enterprise. Drive Change helps leaders navigate AI transformation.",
  metadataBase: new URL("https://drivechange-site.vercel.app"),
  openGraph: {
    title: "Drive Change | AI Transformation Advisory",
    description:
      "Strategy, Governance, and Organizational Change for the Intelligent Enterprise.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drive Change | AI Transformation Advisory",
    description:
      "Strategy, Governance, and Organizational Change for the Intelligent Enterprise.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${serif.variable} ${sans.variable} ${condensed.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
