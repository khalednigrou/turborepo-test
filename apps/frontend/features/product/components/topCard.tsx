import Link from 'next/link'
import Image from 'next/image'
import { TopProductCardType } from '@frontend/features/product/types'

const product: TopProductCardType = {
  name: 'プロダクト05名が入ります',
  href: '/products/05',
  image: '/top/products/product_05.png',
  collection: 'all',
  token: 'eth',
  date: '2024-01-01',
  price: '10000',
  views: 1000,
}
export default function TopProductCard() {
  return (
    <Link href={product.href} className="w-full aspect-square bg-black rounded-2xl p-4 overflow-hidden relative">
      <Image className="absolute top-0 left-0 object-cover w-full h-full pointer-events-none" src={product.image} alt={product.name} width={425} height={220} />
      <span className="absolute top-0 left-0 w-full h-full bg-black/10"></span>
      <div className="relative w-full h-full flex flex-col justify-end gap-1 text-white text-shadow mt-auto">
        <span className="text-sm">{product.name}</span>
      </div>
    </Link>
  )
}
