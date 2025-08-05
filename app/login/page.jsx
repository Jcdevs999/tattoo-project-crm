"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, User, Shield, Mail, Lock, Eye, EyeOff } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [clientForm, setClientForm] = useState({
    email: "",
    password: "",
  })
  const [adminForm, setAdminForm] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleClientLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (clientForm.email && clientForm.password) {
        localStorage.setItem("userType", "client")
        localStorage.setItem("userEmail", clientForm.email)
        toast({
          title: "Login Successful",
          description: "Welcome back! Redirecting to homepage...",
        })
        router.push("/")
      } else {
        toast({
          title: "Login Failed",
          description: "Please enter valid credentials.",
          variant: "destructive",
        })
      }
      setIsLoading(false)
    }, 1000)
  }

  const handleAdminLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (adminForm.email === "admin@inkflowstudio.ph" && adminForm.password === "admin123") {
        localStorage.setItem("userType", "admin")
        localStorage.setItem("userEmail", adminForm.email)
        toast({
          title: "Admin Login Successful",
          description: "Welcome to the admin panel!",
        })
        router.push("/admin")
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid admin credentials.",
          variant: "destructive",
        })
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="text-slate-300 hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">InkFlow Studio</h1>
              <p className="text-slate-400 text-sm">Premium Tattoo Artistry</p>
            </div>
          </div>
        </div>

        {/* Login Tabs */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Welcome Back</CardTitle>
            <CardDescription className="text-slate-400">Sign in to your account to continue</CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="client" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 bg-slate-700">
                <TabsTrigger
                  value="client"
                  className="data-[state=active]:bg-slate-600 data-[state=active]:text-white text-slate-300"
                >
                  <User className="w-4 h-4 mr-2" />
                  Client
                </TabsTrigger>
                <TabsTrigger
                  value="admin"
                  className="data-[state=active]:bg-slate-600 data-[state=active]:text-white text-slate-300"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Admin
                </TabsTrigger>
              </TabsList>

              <TabsContent value="client" className="space-y-4">
                <form onSubmit={handleClientLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="client-email" className="text-slate-300">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        id="client-email"
                        type="email"
                        placeholder="your@email.com"
                        value={clientForm.email}
                        onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })}
                        className="pl-10 bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="client-password" className="text-slate-300">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        id="client-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={clientForm.password}
                        onChange={(e) => setClientForm({ ...clientForm, password: e.target.value })}
                        className="pl-10 pr-10 bg-slate-700 border-slate-600 text-white"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 text-slate-400 hover:text-white"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="remember-client" className="rounded border-slate-600" />
                      <Label htmlFor="remember-client" className="text-slate-300 text-sm">
                        Remember me
                      </Label>
                    </div>
                    <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0 h-auto">
                      Forgot password?
                    </Button>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>

                <Separator className="bg-slate-600" />

                <div className="text-center">
                  <p className="text-slate-400 text-sm">
                    Don't have an account?{" "}
                    <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0 h-auto">
                      Sign up here
                    </Button>
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="admin" className="space-y-4">
                <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-300 text-sm font-medium">Admin Access</span>
                  </div>
                  <p className="text-slate-400 text-xs">This area is restricted to authorized studio personnel only.</p>
                </div>

                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email" className="text-slate-300">
                      Admin Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        id="admin-email"
                        type="email"
                        placeholder="admin@inkflowstudio.ph"
                        value={adminForm.email}
                        onChange={(e) => setAdminForm({ ...adminForm, email: e.target.value })}
                        className="pl-10 bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-password" className="text-slate-300">
                      Admin Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        id="admin-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter admin password"
                        value={adminForm.password}
                        onChange={(e) => setAdminForm({ ...adminForm, password: e.target.value })}
                        className="pl-10 pr-10 bg-slate-700 border-slate-600 text-white"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 text-slate-400 hover:text-white"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white"
                  >
                    {isLoading ? "Authenticating..." : "Admin Sign In"}
                  </Button>
                </form>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                  <p className="text-blue-200 text-xs">
                    <strong>Demo Credentials:</strong>
                    <br />
                    Email: admin@inkflowstudio.ph
                    <br />
                    Password: admin123
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm">© 2024 InkFlow Studio. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
