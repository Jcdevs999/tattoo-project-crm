"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  LayoutDashboard,
  Calendar,
  Users,
  CreditCard,
  BarChart3,
  Brain,
  Gift,
  FileText,
  Settings,
  Bell,
  User,
  LogOut,
  Menu,
  X,
  Palette,
  BookOpen,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AdminSidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const router = useRouter()
  const pathname = usePathname()
  const { toast } = useToast()

  useEffect(() => {
    const storedUserEmail = localStorage.getItem("userEmail")
    if (storedUserEmail) {
      setUserEmail(storedUserEmail)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("userType")
    localStorage.removeItem("userEmail")
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    })
    router.push("/")
  }

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin",
      badge: null,
    },
    {
      title: "Bookings",
      icon: BookOpen,
      href: "/admin/bookings",
      badge: "3",
    },
    {
      title: "Calendar",
      icon: Calendar,
      href: "/admin/calendar",
      badge: null,
    },
    {
      title: "Clients",
      icon: Users,
      href: "/admin/clients",
      badge: null,
    },
    {
      title: "Payments",
      icon: CreditCard,
      href: "/admin/payments",
      badge: "2",
    },
    {
      title: "Analytics",
      icon: BarChart3,
      href: "/admin/analytics",
      badge: null,
    },
    {
      title: "AI Pricing",
      icon: Brain,
      href: "/admin/ai-pricing",
      badge: "NEW",
    },
    {
      title: "Loyalty Program",
      icon: Gift,
      href: "/admin/loyalty",
      badge: null,
    },
    {
      title: "Reports",
      icon: FileText,
      href: "/admin/reports",
      badge: null,
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/admin/settings",
      badge: null,
    },
    {
      title: "Notifications",
      icon: Bell,
      href: "/admin/notifications",
      badge: "5",
    },
    {
      title: "Account",
      icon: User,
      href: "/admin/account",
      badge: null,
    },
  ]

  const isActive = (href) => {
    if (href === "/admin") {
      return pathname === "/admin"
    }
    return pathname.startsWith(href)
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Palette className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">InkFlow Studio</h2>
            <p className="text-slate-400 text-sm">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)

          return (
            <Button
              key={item.href}
              variant="ghost"
              className={`w-full justify-start text-left h-12 ${
                active
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
              onClick={() => {
                router.push(item.href)
                setIsMobileMenuOpen(false)
              }}
            >
              <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
              <span className="flex-1 truncate">{item.title}</span>
              {item.badge && (
                <Badge
                  variant="secondary"
                  className={`ml-2 text-xs ${
                    item.badge === "NEW" ? "bg-green-500/20 text-green-300" : "bg-purple-500/20 text-purple-300"
                  }`}
                >
                  {item.badge}
                </Badge>
              )}
            </Button>
          )
        })}
      </nav>

      <Separator className="bg-slate-700" />

      {/* User Info & Logout */}
      <div className="p-4 space-y-3">
        <div className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate">{userEmail || "admin@inkflow.com"}</p>
            <p className="text-slate-400 text-xs">Studio Owner</p>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white bg-transparent"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="border-slate-600 text-slate-300 bg-slate-800/90 backdrop-blur-sm hover:bg-slate-700"
        >
          {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </Button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed left-0 top-0 z-40 h-full w-80 bg-slate-900 border-r border-slate-700 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-80 lg:fixed lg:inset-y-0 bg-slate-900 border-r border-slate-700 z-30">
        <SidebarContent />
      </div>
    </>
  )
}
