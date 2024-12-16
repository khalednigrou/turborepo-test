import { Input } from "@backend/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@backend/components/ui/table"
import { Button } from "@backend/components/ui/button"
import { Search } from 'lucide-react'

export default function PurchaseHistoryPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">購入履歴</h1>
      <div className="flex items-center space-x-2">
        <Input className="max-w-sm" placeholder="ユーザー名またはアイテム名で検索..." />
        <Button variant="outline">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>取引ID</TableHead>
            <TableHead>日時</TableHead>
            <TableHead>購入者</TableHead>
            <TableHead>アイテム</TableHead>
            <TableHead>価格</TableHead>
            <TableHead>ステータス</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>TX001</TableCell>
            <TableCell>2023-06-15 14:30</TableCell>
            <TableCell>田中一郎</TableCell>
            <TableCell>デジタルアート#1</TableCell>
            <TableCell>¥50,000</TableCell>
            <TableCell>完了</TableCell>
          </TableRow>
          {/* More rows... */}
        </TableBody>
      </Table>
    </div>
  )
}

