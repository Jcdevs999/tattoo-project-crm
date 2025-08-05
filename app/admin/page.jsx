"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, DollarSign, Clock, TrendingUp, Star, CheckCircle, XCircle } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Bookings",
      value: "156",
      change: "+12%",
      icon: Calendar,
      color: "text-blue-400",
    },
    {
      title: "Active Clients",
      value: "89",
      change: "+8%",
      icon: Users,
      color: "text-green-400",
    },
    {
      title: "Revenue (Month)",
      value: "$12,450",
      change: "+23%",
      icon: DollarSign,
      color: "text-purple-400",
    },
    {
      title: "Avg Session Time",
      value: "3.2h",
      change: "+5%",
      icon: Clock,
      color: "text-orange-400",
    },
  ]

  const recentBookings = [
    {
      id: 1,
      client: "Sarah Johnson",
      email: "sarah@email.com",
      tattoo: "Rose on shoulder",
      date: "2024-01-15",
      status: "pending",
      deposit: 150,
    },
    {
      id: 2,
      client: "Mike Chen",
      email: "mike@email.com",
      tattoo: "Dragon sleeve",
      date: "2024-01-16",
      status: "approved",
      deposit: 300,
    },
    {
      id: 3,
      client: "Emma Davis",
      email: "emma@email.com",
      tattoo: "Geometric pattern",
      date: "2024-01-17",
      status: "completed",
      deposit: 200,
    },
    {
      id: 4,
      client: "Alex Rodriguez",
      email: "alex@email.com",
      tattoo: "Memorial piece",
      date: "2024-01-18",
      status: "pending",
      deposit: 250,
    },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300">
            Pending
          </Badge>
        )
      case "approved":
        return (
          <Badge variant="secondary" className="bg-green-500/20 text-green-300">
            Approved
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
            Completed
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="secondary" className="bg-red-500/20 text-red-300">
            Rejected
          </Badge>
        )
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-slate-400">Welcome back! Here's what's happening at your studio.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <p className="text-xs text-green-400 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Bookings</CardTitle>
            <CardDescription className="text-slate-400">Latest booking requests and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-white">{booking.client}</h4>
                      {getStatusBadge(booking.status)}
                    </div>
                    <p className="text-sm text-slate-400 mb-1">{booking.tattoo}</p>
                    <p className="text-xs text-slate-500">
                      {booking.date} • ${booking.deposit} deposit
                    </p>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    {booking.status === "pending" && (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white bg-transparent"
                        >
                          <CheckCircle className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white bg-transparent"
                        >
                          <XCircle className="w-4 h-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Quick Stats</CardTitle>
            <CardDescription className="text-slate-400">Key metrics at a glance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Average Rating</p>
                  <p className="text-slate-400 text-sm">From client reviews</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-white">4.9</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Completion Rate</p>
                  <p className="text-slate-400 text-sm">Successful bookings</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-white">96%</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Repeat Clients</p>
                  <p className="text-slate-400 text-sm">Returning customers</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-white">68%</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Response Time</p>
                  <p className="text-slate-400 text-sm">Average reply time</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-white">2.3h</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
