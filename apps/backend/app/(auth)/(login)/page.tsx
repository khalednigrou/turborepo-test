import Link from 'next/link'
import { Button } from "@backend/components/ui/button"
import { Input } from "@backend/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@backend/components/ui/card"

export default function LoginPage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          <span className="text-black">NFT</span>
          <span className="text-red-600">Market</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="space-y-4">
            <Input type="email" placeholder="メールアドレス" />
            <Input type="password" placeholder="パスワード" />
            <Button className="w-full bg-red-600 hover:bg-red-700">ログイン</Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="text-center text-sm text-gray-600">
        <Link href="/dashboard" className="hover:underline">パスワードをお忘れですか？</Link>
      </CardFooter>
    </Card>
  )
}

