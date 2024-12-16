import { Button } from "@backend/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@backend/components/ui/table"
import { PlusCircle } from 'lucide-react'

export default function TemplatesPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">テンプレート管理</h1>
        <Button className="bg-red-600 hover:bg-red-700">
          <PlusCircle className="mr-2 h-4 w-4" /> 新規テンプレート
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>テンプレート名</TableHead>
            <TableHead>作成日</TableHead>
            <TableHead>最終更新日</TableHead>
            <TableHead>ステータス</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>001</TableCell>
            <TableCell>デフォルトNFT</TableCell>
            <TableCell>2023-06-01</TableCell>
            <TableCell>2023-06-15</TableCell>
            <TableCell>有効</TableCell>
            <TableCell>
              <Button variant="outline" size="sm" className="mr-2">編集</Button>
              <Button variant="outline" size="sm">無効化</Button>
            </TableCell>
          </TableRow>
          {/* More rows... */}
        </TableBody>
      </Table>
    </div>
  )
}

