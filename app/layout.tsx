/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
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
        <meta
          property="og:image"
          content="https://www.xomoman.com/images/og_image.webp"
        />
        <meta
          property="og:description"
          content="XOM Oman | Oil Field Services"
        />
        <meta name="description" content="XOM Oman | Oil Field Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Fonts */}
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

<link
  href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;700&family=Libre+Baskerville:wght@400;700&family=Work+Sans:wght@400;700&family=Sacramento&display=swap"
  rel="stylesheet"
/>


        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "XOM",
              url: "https://www.xomoman.com",
              logo: "https://www.xomoman.com/images/logo.webp",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+968-24621546",
                  contactType: "Customer Service",
                  areaServed: "Global",
                  availableLanguage: ["English"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+968-24625907",
                  contactType: "Customer Service",
                  areaServed: "Global",
                  availableLanguage: ["English"],
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "XOM",
              image: "https://www.xomoman.com/images/logo.png",
              url: "https://www.xomoman.com",
              telephone: ["+968-24621546", "+968-24625907"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Aqar office 1991 Third floor office no 315",
                addressLocality: "Al Khuwair",
                addressRegion: "Muscat",
                postalCode: "133",
                addressCountry: "Oman",
              },
              // "openingHours": "Sat-Thur 09:00-17:00",
              // "priceRange": "$$"
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.xomoman.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "What we do",
                  item: "https://www.xomoman.com/#what_we_do",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Where we Operate",
                  item: "https://www.xomoman.com/#where_we_operate",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "About Us",
                  item: "https://www.xomoman.com/about-us",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Contact Us",
                  item: "https://www.xomoman.com/contact-us",
                },
              ],
            }),
          }}
        />


<link rel="preload" href="/css/bootstrap.min.css" as="style"/>
        <link href="/css/main.css" rel="stylesheet"/>
        <link href="/css/responsive.css" rel="stylesheet" />
        <link rel="preload" href="/images/main-slider/intro-1.webp" as="image" type="image/webp" />
      </head>
      <body>
        <Providers>
          <div className="page-wrapper">
            <HeaderComp />
            {children}
          </div>
        </Providers>
        {/* Scroll To Top */}
        <div className="scroll-to-top scroll-to-target" data-target="html">
          <span className="fa fa-arrow-circle-up"></span>
        </div>
        <Footer />
      </body>
    </html>
  );
}
