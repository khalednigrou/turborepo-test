import Link from "next/link";
import Image from "next/image";
import { SpecialButton } from "@frontend/components/shared/special-button";

export default function Header() {
  const links = [
    { label: "top", small: "トップページ", href: "/" },
    { label: "guide", small: "ご利用ガイド", href: "/guide" },
    { label: "faq", small: "よくあるご質問", href: "/faq" },
    { label: "discovery", small: "NFTを探す", href: "/discovery" },
    { label: "shop", small: "ショップ開設", href: "/shop" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between p-6">
      <Link href="/">
        <Image src="/shared/header/logo.svg" alt="rakuza NFT marketplace V2" width={214.105} height={189.512} className="w-[110px] h-[98px] pointer-events-none" />
      </Link>
      <nav className="hidden md:flex gap-8">
        <ul className="gap-8 hidden md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="flex flex-col">
                <span className="font-bold uppercase">{link.label}</span>
                <small className="text-xs hidden md:block">{link.small}</small>
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto mr-8">
          <SpecialButton>ウォレットを接続</SpecialButton>
        </div>
      </nav>
    </header>
  );
}
