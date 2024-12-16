import Link from 'next/link'
import Image from 'next/image'
import { TopGuideCardType } from '@frontend/features/guide/types'

export default function TopCard(guide: TopGuideCardType) {
  return (
    <Link href={guide.href} className="flex flex-col gap-4 bg-black rounded-2xl p-8 overflow-hidden relative aspect-video text-white">
      <Image className="absolute top-0 left-0 object-cover w-full h-full z-0 pointer-events-none" src={guide.image} alt={guide.title} width={425} height={220} />
      <div className="relative z-10 w-full h-full flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <span className="text-xl font-bold">{guide.title}</span>
          <span className="text-sm font-bold opacity-70">{guide.subTitle}</span>
        </div>
        <span className="text-sm mt-auto">{guide.description}</span>
      </div>
    </Link>
  )
}
