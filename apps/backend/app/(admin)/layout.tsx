import { AppSidebar } from '@backend/components/shared/sidebar'
import { SidebarProvider, SidebarInset } from "@backend/components/ui/sidebar"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <div className="flex h-screen w-full">
                <AppSidebar />
                <SidebarInset className="w-full flex-grow overflow-auto">
                    {children}
                </SidebarInset>
            </div>
        </SidebarProvider>
    )
}

