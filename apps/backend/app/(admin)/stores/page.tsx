import { Button } from "@backend/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@backend/components/ui/table"
import { PlusCircle } from 'lucide-react'

export default function StoresPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">ストア管理</h1>
        <Button className="bg-red-600 hover:bg-red-700">
          <PlusCircle className="mr-2 h-4 w-4" /> 新規ストア
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>ストア名</TableHead>
            <TableHead>オーナー</TableHead>
            <TableHead>作成日</TableHead>
            <TableHead>ステータス</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>001</TableCell>
            <TableCell>アートギャラリー</TableCell>
            <TableCell>山田太郎</TableCell>
            <TableCell>2023-06-01</TableCell>
            <TableCell>アクティブ</TableCell>
            <TableCell>
              <Button variant="outline" size="sm" className="mr-2">詳細</Button>
              <Button variant="outline" size="sm">編集</Button>
            </TableCell>
          </TableRow>
          {/* More rows... */}
        </TableBody>
      </Table>
    </div>
  )
}

