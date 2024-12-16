import './globals.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "楽座NFTマーケット管理画面",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{ children }</body>
    </html>
  )
}

