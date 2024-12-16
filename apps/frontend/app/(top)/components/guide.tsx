import React from 'react'
import Container from '@frontend/components/ui/container'
import { TopGuideListType } from '@frontend/features/guide/types'
import TopCard from '@frontend/features/guide/components/topCard'
import { guideList } from "@frontend/features/guide/data";

export default function Guide() {
  return (
    <section className="relative z-[1] mx-auto w-full bg-white py-32">
      <Container>
        <div className="flex flex-col items-center justify-center gap-12">
          <h2 className="w-full flex flex-col gap-3 text-center">
            <span className="text-4xl font-bold">USER GUIDE</span>
            <span className="text-l font-bold">ユーザーガイド</span>
          </h2>
          <div className="ww-full grid grid-cols-3 gap-8">
            {guideList.map((content,index) => <TopCard {...content} key={`top-guide-${index}`}/>)}
          </div>
        </div>
      </Container>
    </section>
  )
}
