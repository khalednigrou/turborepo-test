import Container from '@frontend/components/ui/container'
import React from 'react'

export default function Update() {
  return (
    <Container>
      <section className="relative z-[1] mx-auto w-full max-w-[1500px] rounded-3xl border-2 border-solid border-white bg-white/60 py-32 px-16">
        <div className="flex items-center justify-center gap-24">
          {/* RAKUICHI TOKEN ロゴ */}
          <div className="max-w-[200px] w-full flex flex-co gap-3">
            <h2 className="grid gap-2">
              <span className="text-5xl font-bold text-highlight">UPDATE</span>
              <span className="text-xl font-bold">アップデート情報</span>
            </h2>
          </div>

          {/* RAKUICHI メッセージ */}
          <div className="max-w-[824px] w-full flex flex-col gap-4">
            <time className="text-2xl font-bold">2024.11.01</time>
            <p className="text-7xl font-bold">v2 BETA VERSION LAUNCHED</p>
            <p>
              <span className="text-2xl font-bold">RAKUZA NFT MARKET PLACE v2 β版（v 2.01）がローンチ！</span>
              <br />
              <span className="text-xl">さぁ、楽座であなただけのNFTに出会いましょう。</span>
            </p>
          </div>
        </div>
      </section>
    </Container>
  )
}