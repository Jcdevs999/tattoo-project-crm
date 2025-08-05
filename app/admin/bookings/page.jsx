"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Search,
  Filter,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  MessageSquare,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  ImageIcon,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function BookingsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedBooking, setSelectedBooking] = useState(null)
  const { toast } = useToast()

  const bookings = [
    {
      id: 1,
      client: "Sarah Johnson",
      email: "sarah@email.com",
      phone: "(555) 123-4567",
      tattoo: "Rose on shoulder",
      size: "Medium (4-8 inches)",
      placement: "Shoulder",
      style: "Traditional",
      description:
        "Looking for a traditional rose tattoo on my left shoulder. I want it to be colorful with deep reds and greens.",
      date: "2024-01-15",
      time: "2:00 PM",
      status: "pending",
      deposit: 7500,
      images: ["reference1.jpg", "reference2.jpg"],
      submittedAt: "2024-01-10 10:30 AM",
      notes: "",
    },
    {
      id: 2,
      client: "Mike Chen",
      email: "mike@email.com",
      phone: "(555) 234-5678",
      tattoo: "Dragon sleeve",
      size: "Extra Large (12+ inches)",
      placement: "Arm",
      style: "Realism",
      description: "Full sleeve dragon tattoo with Asian influences. Looking for detailed scales and flowing design.",
      date: "2024-01-16",
      time: "10:00 AM",
      status: "approved",
      deposit: 15000,
      images: ["dragon1.jpg", "dragon2.jpg", "dragon3.jpg"],
      submittedAt: "2024-01-08 2:15 PM",
      notes: "Client confirmed for 4-session completion",
    },
    {
      id: 3,
      client: "Emma Davis",
      email: "emma@email.com",
      phone: "(555) 345-6789",
      tattoo: "Geometric pattern",
      size: "Small (2-4 inches)",
      placement: "Wrist",
      style: "Geometric",
      description: "Minimalist geometric pattern on inner wrist. Clean lines and symmetrical design.",
      date: "2024-01-17",
      time: "4:00 PM",
      status: "completed",
      deposit: 5000,
      images: ["geometric1.jpg"],
      submittedAt: "2024-01-05 9:45 AM",
      notes: "Completed successfully, client very happy",
    },
    {
      id: 4,
      client: "Alex Rodriguez",
      email: "alex@email.com",
      phone: "(555) 456-7890",
      tattoo: "Memorial piece",
      size: "Large (8-12 inches)",
      placement: "Back",
      style: "Realism",
      description: "Memorial tattoo for my father. Portrait with dates and meaningful quote.",
      date: "2024-01-18",
      time: "1:00 PM",
      status: "pending",
      deposit: 12500,
      images: ["memorial1.jpg", "memorial2.jpg"],
      submittedAt: "2024-01-12 4:20 PM",
      notes: "",
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

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-400" />
      case "approved":
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case "completed":
        return <CheckCircle className="w-4 h-4 text-blue-400" />
      case "rejected":
        return <XCircle className="w-4 h-4 text-red-400" />
      default:
        return <Clock className="w-4 h-4 text-gray-400" />
    }
  }

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.tattoo.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || booking.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleApprove = (bookingId) => {
    toast({
      title: "Booking Approved",
      description: "The booking has been approved and the client has been notified.",
    })
  }

  const handleReject = (bookingId) => {
    toast({
      title: "Booking Rejected",
      description: "The booking has been rejected and the client has been notified.",
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Booking Management</h1>
        <p className="text-slate-400">Manage all booking requests and appointments</p>
      </div>

      {/* Filters */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search bookings..."
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
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Bookings Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="all" className="data-[state=active]:bg-slate-700">
            All Bookings
          </TabsTrigger>
          <TabsTrigger value="pending" className="data-[state=active]:bg-slate-700">
            Pending
          </TabsTrigger>
          <TabsTrigger value="approved" className="data-[state=active]:bg-slate-700">
            Approved
          </TabsTrigger>
          <TabsTrigger value="completed" className="data-[state=active]:bg-slate-700">
            Completed
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {filteredBookings.map((booking) => (
            <Card key={booking.id} className="bg-slate-800/50 border-slate-700">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      {getStatusIcon(booking.status)}
                      <h3 className="text-lg font-semibold text-white">{booking.client}</h3>
                      {getStatusBadge(booking.status)}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-slate-400 text-sm">Tattoo</p>
                        <p className="text-white font-medium">{booking.tattoo}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Size & Placement</p>
                        <p className="text-white font-medium">{booking.size}</p>
                        <p className="text-slate-300 text-sm">{booking.placement}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Preferred Date</p>
                        <p className="text-white font-medium">{booking.date}</p>
                        <p className="text-slate-300 text-sm">{booking.time}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm">Deposit</p>
                        <p className="text-white font-medium">₱{booking.deposit.toLocaleString()}</p>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm mb-4 line-clamp-2">{booking.description}</p>

                    <div className="flex items-center space-x-2 text-slate-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>Submitted: {booking.submittedAt}</span>
                      {booking.images.length > 0 && (
                        <>
                          <span>•</span>
                          <ImageIcon className="w-4 h-4" />
                          <span>{booking.images.length} reference images</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 ml-6">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                          onClick={() => setSelectedBooking(booking)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl bg-slate-800 border-slate-700 text-white">
                        <DialogHeader>
                          <DialogTitle className="flex items-center space-x-3">
                            {getStatusIcon(booking.status)}
                            <span>Booking Details - {booking.client}</span>
                            {getStatusBadge(booking.status)}
                          </DialogTitle>
                          <DialogDescription className="text-slate-400">
                            Submitted on {booking.submittedAt}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Client Information */}
                          <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Client Information</h4>
                            <div className="space-y-3">
                              <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 text-slate-400" />
                                <span className="text-slate-300">{booking.email}</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <Phone className="w-4 h-4 text-slate-400" />
                                <span className="text-slate-300">{booking.phone}</span>
                              </div>
                            </div>
                          </div>

                          {/* Tattoo Details */}
                          <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Tattoo Details</h4>
                            <div className="space-y-3">
                              <div>
                                <Label className="text-slate-400">Style</Label>
                                <p className="text-white">{booking.style}</p>
                              </div>
                              <div>
                                <Label className="text-slate-400">Size</Label>
                                <p className="text-white">{booking.size}</p>
                              </div>
                              <div>
                                <Label className="text-slate-400">Placement</Label>
                                <p className="text-white">{booking.placement}</p>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <div className="md:col-span-2 space-y-4">
                            <h4 className="text-lg font-semibold text-white">Description</h4>
                            <p className="text-slate-300 bg-slate-700/50 p-4 rounded-lg">{booking.description}</p>
                          </div>

                          {/* Reference Images */}
                          {booking.images.length > 0 && (
                            <div className="md:col-span-2 space-y-4">
                              <h4 className="text-lg font-semibold text-white">Reference Images</h4>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {booking.images.map((image, index) => (
                                  <div key={index} className="bg-slate-700 rounded-lg p-4 text-center">
                                    <ImageIcon className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                                    <p className="text-slate-300 text-sm">{image}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Scheduling */}
                          <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Scheduling</h4>
                            <div className="space-y-3">
                              <div>
                                <Label className="text-slate-400">Preferred Date</Label>
                                <p className="text-white">{booking.date}</p>
                              </div>
                              <div>
                                <Label className="text-slate-400">Preferred Time</Label>
                                <p className="text-white">{booking.time}</p>
                              </div>
                            </div>
                          </div>

                          {/* Payment */}
                          <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Payment</h4>
                            <div className="flex items-center space-x-3">
                              <DollarSign className="w-4 h-4 text-green-400" />
                              <span className="text-white font-medium">
                                ₱{booking.deposit.toLocaleString()} deposit required
                              </span>
                            </div>
                          </div>

                          {/* Notes */}
                          <div className="md:col-span-2 space-y-4">
                            <h4 className="text-lg font-semibold text-white">Internal Notes</h4>
                            <Textarea
                              placeholder="Add notes about this booking..."
                              className="bg-slate-700 border-slate-600 text-white"
                              value={booking.notes}
                            />
                          </div>
                        </div>

                        {/* Action Buttons */}
                        {booking.status === "pending" && (
                          <div className="flex justify-end space-x-3 pt-4 border-t border-slate-700">
                            <Button
                              variant="outline"
                              className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white bg-transparent"
                              onClick={() => handleReject(booking.id)}
                            >
                              <XCircle className="w-4 h-4 mr-2" />
                              Reject
                            </Button>
                            <Button
                              className="bg-green-600 hover:bg-green-700 text-white"
                              onClick={() => handleApprove(booking.id)}
                            >
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Approve Booking
                            </Button>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>

                    {booking.status === "pending" && (
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white bg-transparent"
                          onClick={() => handleApprove(booking.id)}
                        >
                          <CheckCircle className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white bg-transparent"
                          onClick={() => handleReject(booking.id)}
                        >
                          <XCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    )}

                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="pending">{/* Pending bookings content */}</TabsContent>

        <TabsContent value="approved">{/* Approved bookings content */}</TabsContent>

        <TabsContent value="completed">{/* Completed bookings content */}</TabsContent>
      </Tabs>
    </div>
  )
}
