import { Button } from "@backend/components/ui/button"
import { Input } from "@backend/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@backend/components/ui/table"
import { PlusCircle, Search } from 'lucide-react'

export default function ItemsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">アイテム管理</h1>
        <Button className="bg-red-600 hover:bg-red-700">
          <PlusCircle className="mr-2 h-4 w-4" /> 新規アイテム
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Input className="max-w-sm" placeholder="アイテム名で検索..." />
        <Button variant="outline">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>アイテム名</TableHead>
            <TableHead>クリエイター</TableHead>
            <TableHead>価格</TableHead>
            <TableHead>ステータス</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>001</TableCell>
            <TableCell>デジタルアート#1</TableCell>
            <TableCell>山田太郎</TableCell>
            <TableCell>¥50,000</TableCell>
            <TableCell>販売中</TableCell>
            <TableCell>
              <Button variant="outline" size="sm">編集</Button>
            </TableCell>
          </TableRow>
          {/* More rows... */}
        </TableBody>
      </Table>
    </div>
  )
}

