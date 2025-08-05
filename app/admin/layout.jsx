"use client"
import AdminSidebar from "@/components/admin-sidebar"

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-slate-950">
      <AdminSidebar />
      <main className="flex-1 lg:ml-80 overflow-hidden">
        <div className="h-full p-4 lg:p-6 overflow-auto bg-slate-950">{children}</div>
      </main>
    </div>
  )
}
