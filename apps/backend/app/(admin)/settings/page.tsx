import { Button } from "@backend/components/ui/button"
import { Input } from "@backend/components/ui/input"
import { Label } from "@backend/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@backend/components/ui/tabs"

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">設定</h1>
      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">一般</TabsTrigger>
          <TabsTrigger value="security">セキュリティ</TabsTrigger>
          <TabsTrigger value="notifications">通知</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="site-name">サイト名</Label>
            <Input id="site-name" defaultValue="NFT Marketplace" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="site-description">サイトの説明</Label>
            <Input id="site-description" defaultValue="最高のNFTマーケットプレイス" />
          </div>
          <Button>保存</Button>
        </TabsContent>
        <TabsContent value="security" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">現在のパスワード</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">新しいパスワード</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">新しいパスワード（確認）</Label>
            <Input id="confirm-password" type="password" />
          </div>
          <Button>パスワードを変更</Button>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          {/* 通知設定のコンテンツをここに追加 */}
        </TabsContent>
      </Tabs>
    </div>
  )
}

