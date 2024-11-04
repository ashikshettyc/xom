/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
// import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import { Providers } from "./providers";
import HeaderComp from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "XOM Oman | Oil Field Services",
  description: "XOM Oman | Oil Field Services",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="XOM Oman | Oil Field Services" />
        <meta property="og:url" content="https://www.xomoman.com/" />
        <meta property="og:site_name" content="XOM" />
        <meta property="og:image" content="images/og_image.webp" />
        <meta
          property="og:description"
          content="XOM Oman | Oil Field Services"
        />
        <meta name="description" content="XOM Oman | Oil Field Services" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        {/* Fonts  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;500;600;700;900&family=Libre+Baskerville:wght@400;700&family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&family=Sacramento&display=swap"
          rel="stylesheet"
        />

        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/main.css" rel="stylesheet" />
        <link href="css/responsive.css" rel="stylesheet" />
      </head>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="page-wrapper">
            <HeaderComp />
            {children}
          </div>
        </Providers>
        {/* <!-- Scroll To Top --> */}
        <div className="scroll-to-top scroll-to-target" data-target="html">
          <span className="fa fa-arrow-circle-up"></span>
        </div>
        <Footer />
      </body>
    </html>
  );
}
