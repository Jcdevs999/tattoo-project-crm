"use client"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import {
  Bell,
  Mail,
  Smartphone,
  Check,
  X,
  AlertCircle,
  Info,
  CheckCircle,
  XCircle,
  Clock,
  Send,
  Settings,
  Filter,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function NotificationsPage() {
  const [filter, setFilter] = useState("all")
  const [notificationSettings, setNotificationSettings] = useState({
    emailEnabled: true,
    smsEnabled: false,
    pushEnabled: true,
    bookingAlerts: true,
    paymentAlerts: true,
    systemAlerts: true,
  })
  const { toast } = useToast()

  const notifications = [
    {
      id: 1,
      type: "booking",
      title: "New Booking Request",
      message: "Sarah Johnson has requested a booking for a rose tattoo on January 25th",
      timestamp: "2024-01-20 10:30 AM",
      read: false,
      priority: "high",
      actions: ["approve", "reject", "view"],
    },
    {
      id: 2,
      type: "payment",
      title: "Payment Received",
      message: "Mike Chen has paid $300 deposit for dragon sleeve session",
      timestamp: "2024-01-20 09:15 AM",
      read: false,
      priority: "medium",
      actions: ["view"],
    },
    {
      id: 3,
      type: "system",
      title: "Backup Completed",
      message: "Daily backup has been completed successfully",
      timestamp: "2024-01-20 02:00 AM",
      read: true,
      priority: "low",
      actions: [],
    },
    {
      id: 4,
      type: "booking",
      title: "Appointment Reminder",
      message: "Emma Davis has an appointment tomorrow at 4:00 PM",
      timestamp: "2024-01-19 06:00 PM",
      read: true,
      priority: "medium",
      actions: ["reschedule", "confirm"],
    },
    {
      id: 5,
      type: "payment",
      title: "Payment Failed",
      message: "Alex Rodriguez's payment attempt failed - card declined",
      timestamp: "2024-01-19 03:45 PM",
      read: false,
      priority: "high",
      actions: ["retry", "contact"],
    },
    {
      id: 6,
      type: "system",
      title: "Software Update Available",
      message: "InkFlow v2.1.3 is available with new features and bug fixes",
      timestamp: "2024-01-19 12:00 PM",
      read: true,
      priority: "medium",
      actions: ["update", "view"],
    },
  ]

  const getNotificationIcon = (type) => {
    switch (type) {
      case "booking":
        return <Bell className="w-5 h-5 text-blue-400" />
      case "payment":
        return <CheckCircle className="w-5 h-5 text-green-400" />
      case "system":
        return <Info className="w-5 h-5 text-purple-400" />
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />
    }
  }

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-500/20 text-red-300">High</Badge>
      case "medium":
        return <Badge className="bg-yellow-500/20 text-yellow-300">Medium</Badge>
      case "low":
        return <Badge className="bg-green-500/20 text-green-300">Low</Badge>
      default:
        return <Badge variant="secondary">Normal</Badge>
    }
  }

  const getActionButton = (action, notificationId) => {
    const actionConfig = {
      approve: { label: "Approve", icon: Check, color: "bg-green-600 hover:bg-green-700" },
      reject: { label: "Reject", icon: X, color: "bg-red-600 hover:bg-red-700" },
      view: { label: "View", icon: Info, color: "bg-blue-600 hover:bg-blue-700" },
      retry: { label: "Retry", icon: Send, color: "bg-purple-600 hover:bg-purple-700" },
      contact: { label: "Contact", icon: Mail, color: "bg-orange-600 hover:bg-orange-700" },
      reschedule: { label: "Reschedule", icon: Clock, color: "bg-yellow-600 hover:bg-yellow-700" },
      confirm: { label: "Confirm", icon: CheckCircle, color: "bg-green-600 hover:bg-green-700" },
      update: { label: "Update", icon: Send, color: "bg-purple-600 hover:bg-purple-700" },
    }

    const config = actionConfig[action]
    if (!config) return null

    return (
      <Button
        key={action}
        size="sm"
        className={`${config.color} text-white`}
        onClick={() => handleNotificationAction(notificationId, action)}
      >
        <config.icon className="w-3 h-3 mr-1" />
        {config.label}
      </Button>
    )
  }

  const handleNotificationAction = (notificationId, action) => {
    toast({
      title: "Action Completed",
      description: `${action} action has been processed for notification ${notificationId}`,
    })
  }

  const markAsRead = (notificationId) => {
    toast({
      title: "Marked as Read",
      description: "Notification has been marked as read",
    })
  }

  const markAllAsRead = () => {
    toast({
      title: "All Notifications Read",
      description: "All notifications have been marked as read",
    })
  }

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "all") return true
    if (filter === "unread") return !notification.read
    return notification.type === filter
  })

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
            <Bell className="w-8 h-8 mr-3 text-yellow-400" />
            Notifications
            {unreadCount > 0 && <Badge className="ml-3 bg-red-500/20 text-red-300">{unreadCount} unread</Badge>}
          </h1>
          <p className="text-slate-400">Manage your studio notifications and alerts</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" onClick={markAllAsRead} className="border-slate-600 text-slate-300 bg-transparent">
            <CheckCircle className="w-4 h-4 mr-2" />
            Mark All Read
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Notification Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total</p>
                <p className="text-2xl font-bold text-white">{notifications.length}</p>
              </div>
              <Bell className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Unread</p>
                <p className="text-2xl font-bold text-red-400">{unreadCount}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">High Priority</p>
                <p className="text-2xl font-bold text-orange-400">
                  {notifications.filter((n) => n.priority === "high").length}
                </p>
              </div>
              <XCircle className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Today</p>
                <p className="text-2xl font-bold text-green-400">
                  {notifications.filter((n) => n.timestamp.includes("2024-01-20")).length}
                </p>
              </div>
              <Clock className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notification Tabs */}
      <Tabs defaultValue="inbox" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="inbox" className="data-[state=active]:bg-slate-700">
            Inbox
          </TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-slate-700">
            Settings
          </TabsTrigger>
          <TabsTrigger value="templates" className="data-[state=active]:bg-slate-700">
            Templates
          </TabsTrigger>
        </TabsList>

        <TabsContent value="inbox" className="space-y-6">
          {/* Filters */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input placeholder="Search notifications..." className="bg-slate-700 border-slate-600 text-white" />
                </div>
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger className="w-full md:w-48 bg-slate-700 border-slate-600 text-white">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Notifications</SelectItem>
                    <SelectItem value="unread">Unread Only</SelectItem>
                    <SelectItem value="booking">Booking Alerts</SelectItem>
                    <SelectItem value="payment">Payment Alerts</SelectItem>
                    <SelectItem value="system">System Alerts</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Notifications List */}
          <div className="space-y-4">
            {filteredNotifications.map((notification) => (
              <Card
                key={notification.id}
                className={`bg-slate-800/50 border-slate-700 ${!notification.read ? "border-l-4 border-l-blue-500" : ""}`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="flex-shrink-0">{getNotificationIcon(notification.type)}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className={`font-medium ${notification.read ? "text-slate-300" : "text-white"}`}>
                            {notification.title}
                          </h4>
                          {getPriorityBadge(notification.priority)}
                          {!notification.read && <Badge className="bg-blue-500/20 text-blue-300">New</Badge>}
                        </div>
                        <p className={`text-sm mb-2 ${notification.read ? "text-slate-400" : "text-slate-300"}`}>
                          {notification.message}
                        </p>
                        <p className="text-xs text-slate-500">{notification.timestamp}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                      {notification.actions.map((action) => getActionButton(action, notification.id))}

                      {!notification.read && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => markAsRead(notification.id)}
                          className="text-slate-400 hover:text-white"
                        >
                          <Check className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Notification Channels */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Notification Channels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <div>
                      <Label className="text-slate-300">Email Notifications</Label>
                      <p className="text-slate-400 text-sm">Receive notifications via email</p>
                    </div>
                  </div>
                  <Switch
                    checked={notificationSettings.emailEnabled}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, emailEnabled: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-5 h-5 text-green-400" />
                    <div>
                      <Label className="text-slate-300">SMS Notifications</Label>
                      <p className="text-slate-400 text-sm">Receive notifications via SMS</p>
                    </div>
                  </div>
                  <Switch
                    checked={notificationSettings.smsEnabled}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, smsEnabled: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Bell className="w-5 h-5 text-purple-400" />
                    <div>
                      <Label className="text-slate-300">Push Notifications</Label>
                      <p className="text-slate-400 text-sm">Browser push notifications</p>
                    </div>
                  </div>
                  <Switch
                    checked={notificationSettings.pushEnabled}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, pushEnabled: checked })
                    }
                  />
                </div>
              </CardContent>
            </Card>

            {/* Notification Types */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Notification Types</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div>
                    <Label className="text-slate-300">Booking Alerts</Label>
                    <p className="text-slate-400 text-sm">New bookings, cancellations, changes</p>
                  </div>
                  <Switch
                    checked={notificationSettings.bookingAlerts}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, bookingAlerts: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div>
                    <Label className="text-slate-300">Payment Alerts</Label>
                    <p className="text-slate-400 text-sm">Payment received, failed, refunds</p>
                  </div>
                  <Switch
                    checked={notificationSettings.paymentAlerts}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, paymentAlerts: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div>
                    <Label className="text-slate-300">System Alerts</Label>
                    <p className="text-slate-400 text-sm">Updates, backups, maintenance</p>
                  </div>
                  <Switch
                    checked={notificationSettings.systemAlerts}
                    onCheckedChange={(checked) =>
                      setNotificationSettings({ ...notificationSettings, systemAlerts: checked })
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <div className="text-center py-12">
            <Mail className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Notification Templates</h3>
            <p className="text-slate-400 mb-6">Customize your notification messages and templates</p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <Settings className="w-4 h-4 mr-2" />
              Manage Templates
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
