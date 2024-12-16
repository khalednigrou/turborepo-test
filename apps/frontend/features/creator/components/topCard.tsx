import Link from 'next/link'
import Image from 'next/image'
import { TopCreatorCardType } from '@frontend/features/creator/types'

export default function TopCreatorCard(creator: TopCreatorCardType) {
  return (
    <Link href={creator.href} className="w-full aspect-3/5 bg-black rounded-2xl p-4 overflow-hidden relative">
      <Image className="absolute top-0 left-0 object-cover w-full h-full pointer-events-none" src={creator.image} alt={creator.jpName} width={425} height={220} />
      <span className="absolute top-0 left-0 w-full h-full bg-black/10"></span>
      <div className="relative w-full h-full flex flex-col justify-end gap-1 text-white text-shadow mt-auto">
        <span className="text-sm">{creator.enName}</span>
        <span className="text-xl font-bold">{creator.jpName}</span>
      </div>
    </Link>
  )
}
