"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, DollarSign, Star, Target, Download, Filter } from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

export default function AnalyticsPage() {
  const revenueData = [
    { month: "Jan", revenue: 12400, bookings: 45 },
    { month: "Feb", revenue: 15600, bookings: 52 },
    { month: "Mar", revenue: 18900, bookings: 61 },
    { month: "Apr", revenue: 22100, bookings: 68 },
    { month: "May", revenue: 19800, bookings: 59 },
    { month: "Jun", revenue: 25300, bookings: 74 },
  ]

  const tattooStyleData = [
    { name: "Traditional", value: 35, color: "#8B5CF6" },
    { name: "Realism", value: 28, color: "#EC4899" },
    { name: "Geometric", value: 18, color: "#06B6D4" },
    { name: "Watercolor", value: 12, color: "#10B981" },
    { name: "Minimalist", value: 7, color: "#F59E0B" },
  ]

  const clientRetentionData = [
    { period: "Q1", newClients: 45, returningClients: 23 },
    { period: "Q2", newClients: 52, returningClients: 31 },
    { period: "Q3", newClients: 48, returningClients: 38 },
    { period: "Q4", newClients: 61, returningClients: 42 },
  ]

  const kpiStats = [
    {
      title: "Revenue Growth",
      value: "+23.5%",
      subtitle: "vs last month",
      icon: TrendingUp,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
    },
    {
      title: "Booking Rate",
      value: "87.2%",
      subtitle: "conversion rate",
      icon: Target,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
    },
    {
      title: "Avg Session Value",
      value: "$342",
      subtitle: "+12% from last month",
      icon: DollarSign,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
    },
    {
      title: "Client Satisfaction",
      value: "4.9/5",
      subtitle: "average rating",
      icon: Star,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
          <p className="text-slate-400">Comprehensive insights into your studio performance</p>
        </div>
        <div className="flex space-x-3">
          <Select defaultValue="30days">
            <SelectTrigger className="w-40 bg-slate-700 border-slate-600 text-white">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiStats.map((stat, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-slate-400 text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  <p className="text-slate-500 text-xs mt-1">{stat.subtitle}</p>
                </div>
                <div className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="revenue" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="revenue" className="text-slate-300 data-[state=active]:text-white">
            Revenue
          </TabsTrigger>
          <TabsTrigger value="bookings" className="text-slate-300 data-[state=active]:text-white">
            Bookings
          </TabsTrigger>
          <TabsTrigger value="clients" className="text-slate-300 data-[state=active]:text-white">
            Clients
          </TabsTrigger>
          <TabsTrigger value="performance" className="text-slate-300 data-[state=active]:text-white">
            Performance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="revenue" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Trend */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Revenue Trend</CardTitle>
                <CardDescription className="text-slate-400">Monthly revenue over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                        color: "#F9FAFB",
                      }}
                    />
                    <Line type="monotone" dataKey="revenue" stroke="#8B5CF6" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Popular Tattoo Styles */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Popular Tattoo Styles</CardTitle>
                <CardDescription className="text-slate-400">Distribution of tattoo styles</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={tattooStyleData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {tattooStyleData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                        color: "#F9FAFB",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Breakdown */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Revenue Breakdown</CardTitle>
              <CardDescription className="text-slate-400">Detailed revenue analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">$45,230</div>
                  <div className="text-slate-400 mb-1">Total Revenue</div>
                  <Badge className="bg-green-500/20 text-green-300">+23.5%</Badge>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">$38,450</div>
                  <div className="text-slate-400 mb-1">Tattoo Services</div>
                  <Badge className="bg-blue-500/20 text-blue-300">85%</Badge>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">$6,780</div>
                  <div className="text-slate-400 mb-1">Deposits</div>
                  <Badge className="bg-purple-500/20 text-purple-300">15%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bookings" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Booking Trends */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Booking Trends</CardTitle>
                <CardDescription className="text-slate-400">Monthly booking volume</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                        color: "#F9FAFB",
                      }}
                    />
                    <Bar dataKey="bookings" fill="#EC4899" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Booking Status */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Booking Status</CardTitle>
                <CardDescription className="text-slate-400">Current booking pipeline</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">Confirmed</span>
                  </div>
                  <div className="text-white font-semibold">156</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-slate-300">Pending</span>
                  </div>
                  <div className="text-white font-semibold">23</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-slate-300">Completed</span>
                  </div>
                  <div className="text-white font-semibold">892</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-slate-300">Cancelled</span>
                  </div>
                  <div className="text-white font-semibold">12</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="clients" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Client Retention */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Client Retention</CardTitle>
                <CardDescription className="text-slate-400">New vs returning clients</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={clientRetentionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="period" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                        color: "#F9FAFB",
                      }}
                    />
                    <Bar dataKey="newClients" fill="#06B6D4" name="New Clients" />
                    <Bar dataKey="returningClients" fill="#8B5CF6" name="Returning Clients" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Client Demographics */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Client Demographics</CardTitle>
                <CardDescription className="text-slate-400">Age and gender distribution</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">18-25 years</span>
                    <span className="text-white">28%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "28%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">26-35 years</span>
                    <span className="text-white">42%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full" style={{ width: "42%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">36-45 years</span>
                    <span className="text-white">22%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "22%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">45+ years</span>
                    <span className="text-white">8%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "8%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Response Time</CardTitle>
                <CardDescription className="text-slate-400">Average response to inquiries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">2.3h</div>
                  <Badge className="bg-green-500/20 text-green-300">-15% faster</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Completion Rate</CardTitle>
                <CardDescription className="text-slate-400">Successful bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">96.2%</div>
                  <Badge className="bg-blue-500/20 text-blue-300">+2.1% improvement</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">No-Show Rate</CardTitle>
                <CardDescription className="text-slate-400">Missed appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">3.8%</div>
                  <Badge className="bg-red-500/20 text-red-300">+0.5% increase</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
