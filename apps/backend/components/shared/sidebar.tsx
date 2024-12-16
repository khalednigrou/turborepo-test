"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart, Box, CreditCard, FileText, Home, Settings, ShoppingBag, Users } from 'lucide-react'
import { cn } from "@backend/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@backend/components/ui/sidebar"

const menuItems = [
  { name: 'ダッシュボード', href: '/dashboard', icon: Home },
  { name: 'アイテム管理', href: '/items', icon: Box },
  { name: 'クリエイター申込管理', href: '/creator-applications', icon: FileText },
  { name: '購入履歴', href: '/purchase-history', icon: CreditCard },
  { name: '売上', href: '/sales', icon: BarChart },
  { name: 'テンプレート管理', href: '/templates', icon: FileText },
  { name: 'ストア管理', href: '/stores', icon: ShoppingBag },
  { name: 'コントラクト管理', href: '/contracts', icon: FileText },
  { name: 'ユーザー管理', href: '/users', icon: Users },
  { name: '設定', href: '/settings', icon: Settings },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex items-center space-x-2 px-4 py-2">
          <span className="text-2xl font-bold">
            <span className="text-black">NFT</span>
            <span className="text-red-600">Market</span>
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={pathname === item.href}>
                <Link href={item.href} className={cn(
                  "flex items-center space-x-2 px-4 py-2",
                  pathname === item.href ? "bg-red-100 text-red-600" : "hover:bg-gray-100"
                )}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <Link href="/" className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100">
            <span>ログアウト</span>
        </Link>
      </SidebarFooter>
    </Sidebar>
  )
}