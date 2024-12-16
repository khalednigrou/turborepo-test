import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@frontend/components/ui/container";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyright = `©${currentYear} RAKUZA Co.,ltd`;

  const links = [
    { text: "トップページ", href: "/" },
    { text: "ご利用ガイド", href: "/guide" },
    { text: "RKC", href: "/guide/RKC" },
    { text: "よくあるご質問", href: "/faq" },
    { text: "最新情報", href: "/news" },
  ];

  // const otherLinks = [
  //   { text: "運営会社", href: "/corp/company" },
  //   { text: "特定商取引法に基づく表示", href: "/corp/sct" },
  //   { text: "ご利用規約", href: "/corp/terms_of_use" },
  //   { text: "プライバシーポリシー", href: "/corp/policy" },
  // ];

  const sns = [
    { href: "https://x.com/RAKUZA_MARKET?s=20", icon: "x" },
    { href: "https://www.instagram.com/rakuza_market/", icon: "instagram" },
    { href: "https://www.youtube.com/@rakuza_official", icon: "youtube" },
  ];
  return (
    <footer className="relative bg-white w-full mb-[8.8%]">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <Link href="/" className="w-[387px]">
              <Image src="/shared/footer/logo.svg" alt="rakuza NFT marketplace V2" width={387} height={58.83} className="pointer-events-none" />
            </Link>
            <nav>
              <ul className="flex gap-4">
                {links.map((link) => (
                  <li key={`footer-link-${link.href}`} className="text-sm">
                    <Link href={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <ul className="flex gap-4">
              {sns.map((sns) => (
                <li key={`sns-${sns.icon}`}>
                  <a href={sns.href} target="_blank" rel="noreferrer">
                    <Image src={`/shared/footer/icon-${sns.icon}.svg`} alt={sns.icon} width={100} height={100} className="pointer-events-none" />
                  </a>
                </li>
              ))}
            </ul>
            <a href="https://rakuza.io">www.rakuza.io</a>
            <small>{copyright}</small>
          </div>
        </div>
      </Container>
    </footer>
  );
}
