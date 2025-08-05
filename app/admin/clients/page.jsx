"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Search, Filter, Eye, Phone, Mail, Calendar, Star, Plus, User, Palette, ImageIcon, Heart } from "lucide-react"

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")

  const clients = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@email.com",
      phone: "(555) 123-4567",
      joinDate: "2023-08-15",
      totalBookings: 3,
      totalSpent: 850,
      lastVisit: "2024-01-10",
      status: "active",
      loyaltyPoints: 85,
      preferredStyle: "Traditional",
      notes: "Prefers afternoon appointments. Allergic to red ink.",
      tattoos: [
        {
          id: 1,
          design: "Rose on shoulder",
          date: "2023-08-20",
          style: "Traditional",
          placement: "Shoulder",
          cost: 300,
          images: ["rose1.jpg", "rose2.jpg"],
        },
        {
          id: 2,
          design: "Small butterfly",
          date: "2023-11-15",
          style: "Watercolor",
          placement: "Wrist",
          cost: 150,
          images: ["butterfly1.jpg"],
        },
        {
          id: 3,
          design: "Quote on ribs",
          date: "2024-01-10",
          style: "Script",
          placement: "Ribs",
          cost: 400,
          images: ["quote1.jpg", "quote2.jpg"],
        },
      ],
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike@email.com",
      phone: "(555) 234-5678",
      joinDate: "2023-05-10",
      totalBookings: 5,
      totalSpent: 2100,
      lastVisit: "2024-01-16",
      status: "vip",
      loyaltyPoints: 210,
      preferredStyle: "Realism",
      notes: "Working on full sleeve project. Sessions every 6 weeks.",
      tattoos: [
        {
          id: 1,
          design: "Dragon sleeve (Session 1)",
          date: "2023-05-20",
          style: "Realism",
          placement: "Arm",
          cost: 500,
          images: ["dragon1.jpg"],
        },
        {
          id: 2,
          design: "Dragon sleeve (Session 2)",
          date: "2023-07-01",
          style: "Realism",
          placement: "Arm",
          cost: 500,
          images: ["dragon2.jpg"],
        },
      ],
    },
    {
      id: 3,
      name: "Emma Davis",
      email: "emma@email.com",
      phone: "(555) 345-6789",
      joinDate: "2024-01-05",
      totalBookings: 1,
      totalSpent: 200,
      lastVisit: "2024-01-17",
      status: "new",
      loyaltyPoints: 20,
      preferredStyle: "Geometric",
      notes: "First tattoo. Very nervous but excited.",
      tattoos: [
        {
          id: 1,
          design: "Geometric pattern",
          date: "2024-01-17",
          style: "Geometric",
          placement: "Wrist",
          cost: 200,
          images: ["geometric1.jpg"],
        },
      ],
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      email: "alex@email.com",
      phone: "(555) 456-7890",
      joinDate: "2022-12-01",
      totalBookings: 8,
      totalSpent: 3200,
      lastVisit: "2023-12-15",
      status: "inactive",
      loyaltyPoints: 320,
      preferredStyle: "Blackwork",
      notes: "Moved to another city. May return for special pieces.",
      tattoos: [
        {
          id: 1,
          design: "Tribal sleeve",
          date: "2022-12-15",
          style: "Blackwork",
          placement: "Arm",
          cost: 800,
          images: ["tribal1.jpg", "tribal2.jpg"],
        },
      ],
    },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500/20 text-green-300">Active</Badge>
      case "vip":
        return <Badge className="bg-purple-500/20 text-purple-300">VIP</Badge>
      case "new":
        return <Badge className="bg-blue-500/20 text-blue-300">New</Badge>
      case "inactive":
        return <Badge className="bg-gray-500/20 text-gray-300">Inactive</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "vip":
        return <Star className="w-4 h-4 text-purple-400" />
      case "new":
        return <Plus className="w-4 h-4 text-blue-400" />
      case "active":
        return <User className="w-4 h-4 text-green-400" />
      default:
        return <User className="w-4 h-4 text-gray-400" />
    }
  }

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === "all" || client.status === filterType
    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Client Management</h1>
          <p className="text-slate-400">Manage your client relationships and history</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Client
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl bg-slate-800 border-slate-700 text-white">
            <DialogHeader>
              <DialogTitle>Add New Client</DialogTitle>
              <DialogDescription className="text-slate-400">Create a new client profile</DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input className="bg-slate-700 border-slate-600 text-white" />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" className="bg-slate-700 border-slate-600 text-white" />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input className="bg-slate-700 border-slate-600 text-white" />
              </div>
              <div className="space-y-2">
                <Label>Preferred Style</Label>
                <Select>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="traditional">Traditional</SelectItem>
                    <SelectItem value="realism">Realism</SelectItem>
                    <SelectItem value="watercolor">Watercolor</SelectItem>
                    <SelectItem value="geometric">Geometric</SelectItem>
                    <SelectItem value="blackwork">Blackwork</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label>Notes</Label>
                <Textarea className="bg-slate-700 border-slate-600 text-white" />
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                Cancel
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Add Client</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-700 border-slate-600 text-white"
                />
              </div>
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full md:w-48 bg-slate-700 border-slate-600 text-white">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Clients</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="vip">VIP</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Client Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Total Clients</CardTitle>
            <User className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{clients.length}</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">VIP Clients</CardTitle>
            <Star className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{clients.filter((c) => c.status === "vip").length}</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">New This Month</CardTitle>
            <Plus className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{clients.filter((c) => c.status === "new").length}</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">Avg Loyalty Points</CardTitle>
            <Heart className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {Math.round(clients.reduce((acc, c) => acc + c.loyaltyPoints, 0) / clients.length)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Client List */}
      <div className="space-y-4">
        {filteredClients.map((client) => (
          <Card key={client.id} className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    {getStatusIcon(client.status)}
                    <h3 className="text-lg font-semibold text-white">{client.name}</h3>
                    {getStatusBadge(client.status)}
                    {client.loyaltyPoints > 0 && (
                      <Badge variant="outline" className="border-red-500/30 text-red-300">
                        <Heart className="w-3 h-3 mr-1" />
                        {client.loyaltyPoints} pts
                      </Badge>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-slate-400 text-sm">Contact</p>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Mail className="w-3 h-3 text-slate-400" />
                          <p className="text-white text-sm">{client.email}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-3 h-3 text-slate-400" />
                          <p className="text-white text-sm">{client.phone}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Statistics</p>
                      <p className="text-white font-medium">{client.totalBookings} bookings</p>
                      <p className="text-green-400 text-sm">${client.totalSpent} total spent</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Preferences</p>
                      <div className="flex items-center space-x-2">
                        <Palette className="w-3 h-3 text-purple-400" />
                        <p className="text-white text-sm">{client.preferredStyle}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Last Visit</p>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3 text-blue-400" />
                        <p className="text-white text-sm">{client.lastVisit}</p>
                      </div>
                    </div>
                  </div>

                  {client.notes && (
                    <p className="text-slate-300 text-sm bg-slate-700/30 p-3 rounded-lg mb-4">
                      <strong>Notes:</strong> {client.notes}
                    </p>
                  )}
                </div>

                <div className="flex flex-col space-y-2 ml-6">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl bg-slate-800 border-slate-700 text-white">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-3">
                          {getStatusIcon(client.status)}
                          <span>{client.name}</span>
                          {getStatusBadge(client.status)}
                        </DialogTitle>
                        <DialogDescription className="text-slate-400">Client since {client.joinDate}</DialogDescription>
                      </DialogHeader>

                      <Tabs defaultValue="overview" className="space-y-6">
                        <TabsList className="bg-slate-700 border-slate-600">
                          <TabsTrigger value="overview" className="data-[state=active]:bg-slate-600">
                            Overview
                          </TabsTrigger>
                          <TabsTrigger value="history" className="data-[state=active]:bg-slate-600">
                            Tattoo History
                          </TabsTrigger>
                          <TabsTrigger value="notes" className="data-[state=active]:bg-slate-600">
                            Notes
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview" className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <h4 className="text-lg font-semibold text-white">Contact Information</h4>
                              <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                  <Mail className="w-4 h-4 text-slate-400" />
                                  <span className="text-slate-300">{client.email}</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                  <Phone className="w-4 h-4 text-slate-400" />
                                  <span className="text-slate-300">{client.phone}</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                  <Calendar className="w-4 h-4 text-slate-400" />
                                  <span className="text-slate-300">Joined {client.joinDate}</span>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h4 className="text-lg font-semibold text-white">Statistics</h4>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                                  <div className="text-2xl font-bold text-white">{client.totalBookings}</div>
                                  <div className="text-slate-400 text-sm">Total Bookings</div>
                                </div>
                                <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                                  <div className="text-2xl font-bold text-green-400">${client.totalSpent}</div>
                                  <div className="text-slate-400 text-sm">Total Spent</div>
                                </div>
                                <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                                  <div className="text-2xl font-bold text-purple-400">{client.loyaltyPoints}</div>
                                  <div className="text-slate-400 text-sm">Loyalty Points</div>
                                </div>
                                <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                                  <div className="text-2xl font-bold text-blue-400">{client.tattoos.length}</div>
                                  <div className="text-slate-400 text-sm">Tattoos</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="history" className="space-y-4">
                          <h4 className="text-lg font-semibold text-white">Tattoo History</h4>
                          <div className="space-y-4">
                            {client.tattoos.map((tattoo) => (
                              <Card key={tattoo.id} className="bg-slate-700/50 border-slate-600">
                                <CardContent className="pt-4">
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-white mb-2">{tattoo.design}</h5>
                                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                        <div>
                                          <span className="text-slate-400">Date:</span>
                                          <p className="text-white">{tattoo.date}</p>
                                        </div>
                                        <div>
                                          <span className="text-slate-400">Style:</span>
                                          <p className="text-white">{tattoo.style}</p>
                                        </div>
                                        <div>
                                          <span className="text-slate-400">Placement:</span>
                                          <p className="text-white">{tattoo.placement}</p>
                                        </div>
                                        <div>
                                          <span className="text-slate-400">Cost:</span>
                                          <p className="text-green-400">${tattoo.cost}</p>
                                        </div>
                                      </div>
                                      {tattoo.images.length > 0 && (
                                        <div className="mt-3">
                                          <span className="text-slate-400 text-sm">Images: </span>
                                          <div className="flex items-center space-x-2 mt-1">
                                            <ImageIcon className="w-4 h-4 text-slate-400" />
                                            <span className="text-slate-300 text-sm">
                                              {tattoo.images.length} photos
                                            </span>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </TabsContent>

                        <TabsContent value="notes" className="space-y-4">
                          <h4 className="text-lg font-semibold text-white">Client Notes</h4>
                          <Textarea
                            placeholder="Add notes about this client..."
                            className="bg-slate-700 border-slate-600 text-white min-h-[200px]"
                            defaultValue={client.notes}
                          />
                          <div className="flex justify-end">
                            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Save Notes</Button>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </DialogContent>
                  </Dialog>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
