import { Button } from "@backend/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@backend/components/ui/table"
import { Badge } from "@backend/components/ui/badge"

export default function CreatorApplicationsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">クリエイター申込管理</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>名前</TableHead>
            <TableHead>メールアドレス</TableHead>
            <TableHead>申込日</TableHead>
            <TableHead>ステータス</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>001</TableCell>
            <TableCell>佐藤花子</TableCell>
            <TableCell>hanako@example.com</TableCell>
            <TableCell>2023-06-01</TableCell>
            <TableCell>
              <Badge variant="outline">審査中</Badge>
            </TableCell>
            <TableCell>
              <Button variant="outline" size="sm" className="mr-2">詳細</Button>
              <Button variant="outline" size="sm">承認</Button>
            </TableCell>
          </TableRow>
          {/* More rows... */}
        </TableBody>
      </Table>
    </div>
  )
}

