"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  FileText,
  Download,
  CalendarIcon,
  Filter,
  BarChart3,
  DollarSign,
  Users,
  TrendingUp,
  Plus,
  Eye,
  Share,
} from "lucide-react"
import { format } from "date-fns"

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState({
    from: new Date(2024, 0, 1),
    to: new Date(),
  })

  const reportTemplates = [
    {
      id: 1,
      name: "Monthly Revenue Report",
      description: "Comprehensive revenue analysis with breakdowns",
      category: "Financial",
      lastGenerated: "2024-01-15",
      icon: DollarSign,
      color: "text-green-400",
    },
    {
      id: 2,
      name: "Client Activity Report",
      description: "Client engagement and retention metrics",
      category: "Client Management",
      lastGenerated: "2024-01-14",
      icon: Users,
      color: "text-blue-400",
    },
    {
      id: 3,
      name: "Booking Performance Report",
      description: "Booking trends and conversion rates",
      category: "Operations",
      lastGenerated: "2024-01-13",
      icon: BarChart3,
      color: "text-purple-400",
    },
    {
      id: 4,
      name: "Artist Performance Report",
      description: "Individual artist metrics and productivity",
      category: "Performance",
      lastGenerated: "2024-01-12",
      icon: TrendingUp,
      color: "text-orange-400",
    },
  ]

  const recentReports = [
    {
      id: 1,
      name: "Q4 2023 Financial Summary",
      type: "Financial",
      generatedBy: "John Doe",
      date: "2024-01-15",
      status: "completed",
      size: "2.4 MB",
    },
    {
      id: 2,
      name: "December Client Analysis",
      type: "Client Management",
      generatedBy: "System",
      date: "2024-01-10",
      status: "completed",
      size: "1.8 MB",
    },
    {
      id: 3,
      name: "Holiday Season Performance",
      type: "Operations",
      generatedBy: "John Doe",
      date: "2024-01-08",
      status: "processing",
      size: "Processing...",
    },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500/20 text-green-300">Completed</Badge>
      case "processing":
        return <Badge className="bg-yellow-500/20 text-yellow-300">Processing</Badge>
      case "failed":
        return <Badge className="bg-red-500/20 text-red-300">Failed</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
            <FileText className="w-8 h-8 mr-3 text-blue-400" />
            Reports
          </h1>
          <p className="text-slate-400">Generate and manage business reports and analytics</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Filter Reports
          </Button>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500">
            <Plus className="w-4 h-4 mr-2" />
            Create Report
          </Button>
        </div>
      </div>

      {/* Report Management */}
      <Tabs defaultValue="templates" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="templates" className="text-slate-300 data-[state=active]:text-white">
            Report Templates
          </TabsTrigger>
          <TabsTrigger value="recent" className="text-slate-300 data-[state=active]:text-white">
            Recent Reports
          </TabsTrigger>
          <TabsTrigger value="builder" className="text-slate-300 data-[state=active]:text-white">
            Custom Builder
          </TabsTrigger>
          <TabsTrigger value="scheduled" className="text-slate-300 data-[state=active]:text-white">
            Scheduled Reports
          </TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportTemplates.map((template) => (
              <Card
                key={template.id}
                className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center`}>
                      <template.icon className={`w-5 h-5 ${template.color}`} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {template.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-white">{template.name}</CardTitle>
                  <CardDescription className="text-slate-400">{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-xs text-slate-500">Last generated: {template.lastGenerated}</div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <Download className="w-4 h-4 mr-1" />
                        Generate
                      </Button>
                      <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 bg-transparent">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Reports</CardTitle>
              <CardDescription className="text-slate-400">Recently generated reports and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-white">{report.name}</h4>
                        {getStatusBadge(report.status)}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-slate-400">{report.type}</span>
                          <span className="text-sm text-slate-500">by {report.generatedBy}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-slate-400">{report.date}</span>
                          <span className="text-sm text-slate-500">{report.size}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      {report.status === "completed" && (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-600 text-slate-300 bg-transparent"
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-600 text-slate-300 bg-transparent"
                          >
                            <Share className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="builder" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Custom Report Builder</CardTitle>
              <CardDescription className="text-slate-400">
                Create custom reports with specific metrics and filters
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-slate-300">Report Name</Label>
                    <Input placeholder="Enter report name" className="bg-slate-700 border-slate-600 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Report Type</Label>
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Select report type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="financial">Financial</SelectItem>
                        <SelectItem value="client">Client Management</SelectItem>
                        <SelectItem value="operations">Operations</SelectItem>
                        <SelectItem value="performance">Performance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Date Range</Label>
                    <div className="flex space-x-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="flex-1 bg-slate-700 border-slate-600 text-white">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dateRange.from ? format(dateRange.from, "PPP") : "From date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-slate-800 border-slate-600">
                          <Calendar
                            mode="single"
                            selected={dateRange.from}
                            onSelect={(date) => setDateRange({ ...dateRange, from: date })}
                            className="text-white"
                          />
                        </PopoverContent>
                      </Popover>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="flex-1 bg-slate-700 border-slate-600 text-white">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dateRange.to ? format(dateRange.to, "PPP") : "To date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-slate-800 border-slate-600">
                          <Calendar
                            mode="single"
                            selected={dateRange.to}
                            onSelect={(date) => setDateRange({ ...dateRange, to: date })}
                            className="text-white"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-slate-300">Export Format</Label>
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                        <SelectItem value="csv">CSV</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Include Charts</Label>
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Chart options" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes, include charts</SelectItem>
                        <SelectItem value="no">No charts</SelectItem>
                        <SelectItem value="summary">Summary charts only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500">
                <FileText className="w-4 h-4 mr-2" />
                Generate Custom Report
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Scheduled Reports</CardTitle>
              <CardDescription className="text-slate-400">
                Automatically generated reports on a schedule
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-white mb-1">Monthly Revenue Summary</h4>
                    <p className="text-sm text-slate-400 mb-2">Automated financial report</p>
                    <div className="flex items-center space-x-4">
                      <span className="text-xs text-slate-500">Every 1st of month</span>
                      <Badge className="bg-green-500/20 text-green-300">Active</Badge>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 bg-transparent">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="border-red-500 text-red-400 bg-transparent">
                      Disable
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-white mb-1">Weekly Performance Report</h4>
                    <p className="text-sm text-slate-400 mb-2">Artist and booking performance</p>
                    <div className="flex items-center space-x-4">
                      <span className="text-xs text-slate-500">Every Monday</span>
                      <Badge className="bg-green-500/20 text-green-300">Active</Badge>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 bg-transparent">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="border-red-500 text-red-400 bg-transparent">
                      Disable
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
