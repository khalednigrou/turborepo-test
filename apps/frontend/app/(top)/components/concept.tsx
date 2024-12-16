import React from 'react'
import Container from '@frontend/components/ui/container'
import Image from 'next/image'

export default function TopConcept() {
  const concepts = [
    {
      title1: "クリエイターへの還元。",
      title2: "完成されたエコシステム。",
    description: "楽座のコンセプトを拡張する際に最も大切な存在は、クリエイターのみなさんです。だからこそクリエイターが中心となれる経済圏をまず考えました。",
    image: "culture_point_1",},
    {
      title1: "人が成すものの、",
      title2: "価値を高める。",
    description: "クリエイティブは、人がより良い未来を思い描き、明日が良くなるように願って行う活動だと考えます。だからこそ人のクリエイティブを尊重します。",
    image: "culture_point_2",},
    {
      title1: "真に存在するからこそ",
      title2: "意味がある。",
    description: "NFTの価値観は再考され、デジタルの価値がリアルの価値とより密接に連結しようとしています。楽座の取り組みがメインストリームになろうとしています。",
    image: "culture_point_3",},
  ]
  return (
    <div>
      <section className="relative bg-black text-white py-64">
        <Image className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0 z-0 pointer-events-none" src="/top/concept/background.jpg" alt="concept" width="3000" height="1746" />
        <span className="absolute top-0 left-0 right-0 bottom-0 bg-black/30"></span>
        <div className="relative w-full grid gap-32">
          <Container className="text-white">
            <div className="flex flex-col items-center justify-center gap-12">
              <h2 className="w-full flex flex-col gap-3 text-center">
                <span className="text-l font-bold">コンセプト</span>
                <span className="text-4xl font-bold">文化の宝庫、日本で新しい経済圏を構築</span>
              </h2>
            </div>
          </Container>
        </div>
      </section>

      <Container className="relative">
        <div className="flex items-center justify-center gap-24 font-bold p-24">
          <h3 className="text-4xl min-w-[350px]">フィジタルという、<br/>新しい概念。</h3>
          <p className="text-l">
            楽座は、アニメセルやマンガ等の原画という日本のカルチャーが生み出した「実物」の価値と、「NFT」の可能性を常に考えてきました。世界的にも類を見ないギャラリーを含めた展開が、まさにフィジタルにフィットする楽座の強みです。
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {concepts.map((concept, index) => (
            <div key={`concept-${index}`} className="relative flex flex-col items-center justify-center aspect-video">
              <div className="relative">
                <Image src={`/top/concept/${concept.image}.jpg`} alt={`concept-${index}`} width="640" height="396" className="w-full object-cover" />
                <span className="absolute top-0 left-0 right-0 bottom-0 bg-black/40"></span>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end">
                  <h3 className="text-xl font-bold p-4 leading-8 text-white">{concept.title1}<br/>{concept.title2}</h3>
                </div>
              </div>
              <p className="text-l p-4 text-sm text-black font-bold leading-6">{concept.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

