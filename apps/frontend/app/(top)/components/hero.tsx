import React from "react";
import Image from "next/image";
export default function TopHero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen p-x-2">
      <picture className="w-full px-4 max-w-[865px] max-h-[270px]">
        <source media="(max-width: 769px)" srcSet="/top/hero/message-sp.svg" type="image/svg+xml" />
        <Image src="/top/hero/message-pc.svg" alt="hero" width={835} height={270} className="pointer-events-none" />
      </picture>
    </section>
  );
}
