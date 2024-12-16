import Container from "@frontend/components/ui/container";
import Image from "next/image";
import CustomSelect from "@frontend/components/shared/custom-select";
import { ArrowUpDown, ListFilter } from 'lucide-react';
import TopProductCard from "@frontend/features/product/components/topCard";
import { products } from "@frontend/features/product/data";
import { Button } from "@frontend/components/ui/button";
import Link from "next/link";

export default function Search() {
  const filterOptions = {
    byCollection: [
      { key: "all", value: "全て" },
      { key: "test", value: "テスト" },
    ],
    byToken: [
      { key: "all", value: "全て" },
      { key: "rkc", value: "RKC" },
      { key: "eth", value: "ETH" },
    ],
  }

  const sortOptions = [
    { key: "new", value: "新着順" },
    { key: "expensive", value: "金額の高い順" },
    { key: "cheap", value: "金額の低い順" },
    { key: "high", value: "閲覧の多い順" },
    { key: "low", value: "閲覧の低い順" },
    { key: "update", value: "更新順" },
  ];

  return (
    <div className="bg-white pb-32">
      <section className="relative w-full flex flex-col items-center justify-center gap-12 py-64">
        <Container className="grid gap-12">
          <h2>
            <Image className="w-full max-w-[880px] mx-auto" src="/top/search/are_you_ready.png" alt="are you ready?" width="1768" height="86" />
          </h2>

          <p className="text-center text-lg font-bold leading-loose tracking-widest">RAKUZA Ver.2で、新しい扉を開けてみまよう。<br/>フィジタルという概念によって生み出された真価を感じよう。<br/>進化した世界で、神と成れ。</p>
        </Container>
      </section>

      <section>
        <Container className="grid gap-12">
          <div className="flex items-center justify-between">
            <h2 className="text-center text-2xl font-bold leading-loose tracking-widest">ディスカバー</h2>
            <div className="flex items-center justify-center gap-2">
              {
                filterOptions.byCollection.length > 1 && (
                  <CustomSelect options={filterOptions.byCollection} value="all" icon={<ListFilter className="w-4 h-4" />} label="コレクション" />
                )
              }
              {
                filterOptions.byToken.length > 1 && (
                  <CustomSelect options={filterOptions.byToken} value="all" icon={<ListFilter className="w-4 h-4" />} label="トークン" />
                )
              }
              <CustomSelect options={sortOptions} value="new" icon={<ArrowUpDown className="w-4 h-4" />} label="ソート" />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {
              products.map((product) => (
                <TopProductCard key={product.href} {...product} />
              ))
            }
          </div>

          <div className="flex items-center justify-center">
            <Link href="/search">
              <Button variant="black" size="lg">
                <span>すべての商品を見る</span>
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

