import { Card, CardContent, CardHeader, CardTitle } from "@backend/components/ui/card"
import { BarChart, LineChart, PieChart } from 'lucide-react'

export default function SalesPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">売上</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">総売上</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">¥45,231,890</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">月間売上</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">¥5,231,890</div>
            <p className="text-xs text-muted-foreground">+15.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">カテゴリー別売上</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm">
              <div>アート: 40%</div>
              <div>音楽: 30%</div>
              <div>コレクティブル: 20%</div>
              <div>その他: 10%</div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* ここに売上の詳細なグラフやチャートを追加 */}
    </div>
  )
}

