import React from 'react'
import Container from '@frontend/components/ui/container'
import TopCreatorCard from "@frontend/features/creator/components/topCard"
import { creators } from "@frontend/features/creator/data"

export default function Creators() {
  return (
    <section className="relative z-[1] mx-auto w-full py-32">
      <Container>
        <div className="flex flex-col items-center justify-center gap-12">
          <h2 className="w-full flex flex-col gap-3 text-center">
            <span className="text-4xl font-bold">RAKUZA CREATORS</span>
            <span className="text-l font-bold">クリエイターズ</span>
          </h2>
          <div className="w-full grid grid-cols-5 gap-8">
            {creators.map((creator, index) => <TopCreatorCard {...creator} key={`top-creator-${index}`}/>)}
          </div>
        </div>
      </Container>
    </section>
  )
}
