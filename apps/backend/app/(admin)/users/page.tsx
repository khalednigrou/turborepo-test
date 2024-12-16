import { Button } from "@backend/components/ui/button"
import { Input } from "@backend/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@backend/components/ui/table"
import { Search } from 'lucide-react'

export default function UsersPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">ユーザー管理</h1>
      <div className="flex items-center space-x-2">
        <Input className="max-w-sm" placeholder="ユーザー名またはメールアドレスで検索..." />
        <Button variant="outline">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>ユーザー名</TableHead>
            <TableHead>メールアドレス</TableHead>
            <TableHead>登録日</TableHead>
            <TableHead>ステータス</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>001</TableCell>
            <TableCell>user123</TableCell>
            <TableCell>user123@example.com</TableCell>
            <TableCell>2023-06-01</TableCell>
            <TableCell>アクティブ</TableCell>
            <TableCell>
              <Button variant="outline" size="sm" className="mr-2">詳細</Button>
              <Button variant="outline" size="sm">停止</Button>
            </TableCell>
          </TableRow>
          {/* More rows... */}
        </TableBody>
      </Table>
    </div>
  )
}

