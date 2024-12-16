import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@frontend/components/shared/header";
import Footer from "@frontend/components/shared/footer";
import Head from "next/head";

const NotoSansJP = localFont({
  src: [
    {
      path: "./fonts/NotoSansJP-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansJP-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "楽座|RAKUZA MARKET PLACE",
  description: "日本が誇るアニメのワンシーンをトークン（NFT）化。RAKUZA MARKET PLACEはブロックチェーンでカルチャーの保護と価値向上を促進するDefiプラットフォームです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${NotoSansJP.className} antialiased min-w-full`}>
        <Header />
        <main className="relative min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
