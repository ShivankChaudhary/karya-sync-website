import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karya Sync",
  description: "Karya Sync app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  <head>
    <link rel="icon" href="/favicon.ico" />
    <meta
      name="keywords"
      content="book labour online, book mistri online, online labour booking, online mistri booking, book construction labour, book civil labour online, labour booking app, labour booking website, book labour online in Noida, book mistri online in Noida, online labour booking Noida, construction labour booking Noida, book labour online in Ghaziabad, book mistri online in Ghaziabad, online labour booking Ghaziabad, construction labour booking Ghaziabad, book mason (mistri) online, book helper labour online, book construction worker online, book site labour online, book labour for house construction, Book skilled labour online from home, book labour near me, book mistri near me, online labour booking near me, Book trusted mistri for construction work, Online labour booking for home & site work, Book construction labour in just few clicks, Hassle-free labour booking platform"
    />
    <meta
      name="description"
      content="Online labour and mistri booking platform for home and site work in Noida & Ghaziabad. Quick, reliable and hassle-free service."
    />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Karya Sync" />
    <meta property="og:title" content="Karya Sync" />
    <meta
      property="og:description"
      content="Online labour and mistri booking platform for home and site work in Noida & Ghaziabad. Quick, reliable and hassle-free service."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://karyasync.com" />
    <meta property="og:image" content="/assets/images/logo.png" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Karya Sync" />
    <meta
      name="twitter:description"
      content="Online labour and mistri booking platform for home and site work in Noida & Ghaziabad. Quick, reliable and hassle-free service."
    />
    <meta name="twitter:image" content="/assets/images/logo.png" />
  </head>;
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
