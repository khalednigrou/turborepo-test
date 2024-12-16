import { Button } from "@backend/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@backend/components/ui/table"
import { PlusCircle } from 'lucide-react'

export default function ContractsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">コントラクト管理</h1>
        <Button className="bg-red-600 hover:bg-red-700">
          <PlusCircle className="mr-2 h-4 w-4" /> 新規コントラクト
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>コントラクト名</TableHead>
            <TableHead>アドレス</TableHead>
            <TableHead>ネットワーク</TableHead>
            <TableHead>デプロイ日</TableHead>
            <TableHead>ステータス</TableHead>
            <TableHead>アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>001</TableCell>
            <TableCell>StandardNFT</TableCell>
            <TableCell>0x1234...5678</TableCell>
            <TableCell>Ethereum Mainnet</TableCell>
            <TableCell>2023-06-01</TableCell>
            <TableCell>アクティブ</TableCell>
            <TableCell>
              <Button variant="outline" size="sm" className="mr-2">詳細</Button>
              <Button variant="outline" size="sm">更新</Button>
            </TableCell>
          </TableRow>
          {/* More rows... */}
        </TableBody>
      </Table>
    </div>
  )
}

