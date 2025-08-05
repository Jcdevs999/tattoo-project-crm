"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CreditCard,
  DollarSign,
  TrendingUp,
  RefreshCw,
  Download,
  Search,
  Filter,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react"

export default function PaymentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const paymentStats = [
    {
      title: "Total Revenue",
      value: "$45,230",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-400",
    },
    {
      title: "Pending Payments",
      value: "$2,450",
      change: "+3.2%",
      icon: Clock,
      color: "text-yellow-400",
    },
    {
      title: "Completed Today",
      value: "$1,890",
      change: "+8.1%",
      icon: CheckCircle,
      color: "text-blue-400",
    },
    {
      title: "Refunds Issued",
      value: "$340",
      change: "-2.1%",
      icon: RefreshCw,
      color: "text-red-400",
    },
  ]

  const transactions = [
    {
      id: "TXN-001",
      client: "Sarah Johnson",
      email: "sarah@email.com",
      amount: 450,
      method: "Stripe",
      status: "completed",
      date: "2024-01-15",
      tattoo: "Rose shoulder piece",
      type: "full_payment",
    },
    {
      id: "TXN-002",
      client: "Mike Chen",
      email: "mike@email.com",
      amount: 150,
      method: "PayPal",
      status: "pending",
      date: "2024-01-15",
      tattoo: "Dragon sleeve",
      type: "deposit",
    },
    {
      id: "TXN-003",
      client: "Emma Davis",
      email: "emma@email.com",
      amount: 320,
      method: "Cash",
      status: "completed",
      date: "2024-01-14",
      tattoo: "Geometric pattern",
      type: "full_payment",
    },
    {
      id: "TXN-004",
      client: "Alex Rodriguez",
      email: "alex@email.com",
      amount: 200,
      method: "Stripe",
      status: "refunded",
      date: "2024-01-14",
      tattoo: "Memorial piece",
      type: "deposit",
    },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500/20 text-green-300">Completed</Badge>
      case "pending":
        return <Badge className="bg-yellow-500/20 text-yellow-300">Pending</Badge>
      case "refunded":
        return <Badge className="bg-red-500/20 text-red-300">Refunded</Badge>
      case "failed":
        return <Badge className="bg-red-500/20 text-red-300">Failed</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getPaymentMethodBadge = (method) => {
    switch (method) {
      case "Stripe":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-400">
            Stripe
          </Badge>
        )
      case "PayPal":
        return (
          <Badge variant="outline" className="border-purple-500 text-purple-400">
            PayPal
          </Badge>
        )
      case "Cash":
        return (
          <Badge variant="outline" className="border-green-500 text-green-400">
            Cash
          </Badge>
        )
      default:
        return <Badge variant="outline">Other</Badge>
    }
  }

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || transaction.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Payments</h1>
          <p className="text-slate-400">Manage transactions, refunds, and payment methods</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
            <CreditCard className="w-4 h-4 mr-2" />
            Process Payment
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {paymentStats.map((stat, index) => (
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

      {/* Payment Management */}
      <Tabs defaultValue="transactions" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="transactions" className="text-slate-300 data-[state=active]:text-white">
            Transactions
          </TabsTrigger>
          <TabsTrigger value="methods" className="text-slate-300 data-[state=active]:text-white">
            Payment Methods
          </TabsTrigger>
          <TabsTrigger value="refunds" className="text-slate-300 data-[state=active]:text-white">
            Refunds
          </TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-6">
          {/* Filters */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      placeholder="Search transactions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-48 bg-slate-700 border-slate-600 text-white">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="refunded">Refunded</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Transactions Table */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Transactions</CardTitle>
              <CardDescription className="text-slate-400">
                {filteredTransactions.length} transactions found
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-medium text-white">{transaction.client}</h4>
                          <span className="text-slate-400 text-sm">#{transaction.id}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(transaction.status)}
                          {getPaymentMethodBadge(transaction.method)}
                        </div>
                      </div>
                      <p className="text-sm text-slate-400 mb-1">{transaction.tattoo}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-slate-500">
                          {transaction.date} • {transaction.email}
                        </p>
                        <div className="flex items-center space-x-4">
                          <span className="text-lg font-bold text-white">${transaction.amount}</span>
                          <Badge variant="outline" className="text-xs">
                            {transaction.type === "deposit" ? "Deposit" : "Full Payment"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-4">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="methods" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-blue-400" />
                  Stripe
                </CardTitle>
                <CardDescription className="text-slate-400">Credit & Debit Cards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Status</span>
                    <Badge className="bg-green-500/20 text-green-300">Active</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Fee</span>
                    <span className="text-white">2.9% + $0.30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">This Month</span>
                    <span className="text-white">$28,450</span>
                  </div>
                  <Button variant="outline" className="w-full border-slate-600 text-slate-300 bg-transparent">
                    Configure
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-purple-400" />
                  PayPal
                </CardTitle>
                <CardDescription className="text-slate-400">Digital Wallet</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Status</span>
                    <Badge className="bg-green-500/20 text-green-300">Active</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Fee</span>
                    <span className="text-white">3.49% + $0.49</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">This Month</span>
                    <span className="text-white">$8,920</span>
                  </div>
                  <Button variant="outline" className="w-full border-slate-600 text-slate-300 bg-transparent">
                    Configure
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-green-400" />
                  Cash
                </CardTitle>
                <CardDescription className="text-slate-400">In-Person Payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Status</span>
                    <Badge className="bg-green-500/20 text-green-300">Active</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Fee</span>
                    <span className="text-white">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">This Month</span>
                    <span className="text-white">$7,860</span>
                  </div>
                  <Button variant="outline" className="w-full border-slate-600 text-slate-300 bg-transparent">
                    Track Cash
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="refunds" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Refund Requests</CardTitle>
              <CardDescription className="text-slate-400">Manage refund requests and processing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-white">Alex Rodriguez</h4>
                      <Badge className="bg-yellow-500/20 text-yellow-300">Pending</Badge>
                    </div>
                    <p className="text-sm text-slate-400 mb-1">Memorial piece - Deposit refund</p>
                    <p className="text-xs text-slate-500">Requested: 2024-01-14 • Amount: $200</p>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approve
                    </Button>
                    <Button size="sm" variant="outline" className="border-red-500 text-red-400 bg-transparent">
                      <XCircle className="w-4 h-4 mr-1" />
                      Deny
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
