"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  Settings,
  Palette,
  Bell,
  CreditCard,
  Mail,
  Shield,
  Users,
  Clock,
  DollarSign,
  Upload,
  Save,
  Globe,
  Smartphone,
  Download,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    // Studio Settings
    studioName: "InkFlow Studio",
    studioDescription: "Premium Tattoo Artistry",
    studioAddress: "123 Art Street, Creative City, CC 12345",
    studioPhone: "(555) 123-4567",
    studioEmail: "info@inkflowstudio.com",
    studioWebsite: "www.inkflowstudio.com",

    // Business Hours
    businessHours: {
      monday: { open: "10:00", close: "20:00", closed: false },
      tuesday: { open: "10:00", close: "20:00", closed: false },
      wednesday: { open: "10:00", close: "20:00", closed: false },
      thursday: { open: "10:00", close: "20:00", closed: false },
      friday: { open: "10:00", close: "22:00", closed: false },
      saturday: { open: "10:00", close: "22:00", closed: false },
      sunday: { open: "12:00", close: "18:00", closed: false },
    },

    // Booking Settings
    bookingLimitPerDay: 8,
    minimumDepositAmount: 5000,
    depositPercentage: 30,
    allowOnlineBooking: true,
    requireDeposit: true,
    autoApproveBookings: false,

    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    bookingConfirmations: true,
    reminderNotifications: true,
    reminderHours: 24,

    // Payment Settings
    stripeEnabled: true,
    paypalEnabled: true,
    cashPayments: true,

    // System Settings
    timezone: "America/New_York",
    dateFormat: "MM/dd/yyyy",
    currency: "PHP",
    language: "en",
  })

  const { toast } = useToast()

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your studio settings have been updated successfully.",
    })
  }

  const handleUploadLogo = () => {
    toast({
      title: "Logo Uploaded",
      description: "Your studio logo has been updated.",
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
            <Settings className="w-8 h-8 mr-3 text-slate-400" />
            Studio Settings
          </h1>
          <p className="text-slate-400">Configure your studio preferences and business settings</p>
        </div>
        <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700 text-white">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="general" className="data-[state=active]:bg-slate-700">
            General
          </TabsTrigger>
          <TabsTrigger value="booking" className="data-[state=active]:bg-slate-700">
            Booking
          </TabsTrigger>
          <TabsTrigger value="payments" className="data-[state=active]:bg-slate-700">
            Payments
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-slate-700">
            Notifications
          </TabsTrigger>
          <TabsTrigger value="users" className="data-[state=active]:bg-slate-700">
            Users
          </TabsTrigger>
          <TabsTrigger value="system" className="data-[state=active]:bg-slate-700">
            System
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Studio Information */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Palette className="w-5 h-5 mr-2 text-purple-400" />
                  Studio Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-slate-300">Studio Name</Label>
                  <Input
                    value={settings.studioName}
                    onChange={(e) => setSettings({ ...settings, studioName: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Description</Label>
                  <Textarea
                    value={settings.studioDescription}
                    onChange={(e) => setSettings({ ...settings, studioDescription: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Address</Label>
                  <Textarea
                    value={settings.studioAddress}
                    onChange={(e) => setSettings({ ...settings, studioAddress: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-slate-300">Phone</Label>
                    <Input
                      value={settings.studioPhone}
                      onChange={(e) => setSettings({ ...settings, studioPhone: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Email</Label>
                    <Input
                      type="email"
                      value={settings.studioEmail}
                      onChange={(e) => setSettings({ ...settings, studioEmail: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Website</Label>
                  <Input
                    value={settings.studioWebsite}
                    onChange={(e) => setSettings({ ...settings, studioWebsite: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Logo & Branding */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Logo & Branding</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-16 h-16 text-white" />
                  </div>
                  <Button
                    onClick={handleUploadLogo}
                    variant="outline"
                    className="border-slate-600 text-slate-300 bg-transparent"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload New Logo
                  </Button>
                  <p className="text-slate-400 text-sm mt-2">Recommended: 512x512px, PNG or JPG</p>
                </div>

                <Separator className="bg-slate-600" />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-slate-300">Primary Color</Label>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-500 rounded border border-slate-600"></div>
                      <Input value="#8B5CF6" className="bg-slate-700 border-slate-600 text-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-slate-300">Secondary Color</Label>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-pink-500 rounded border border-slate-600"></div>
                      <Input value="#EC4899" className="bg-slate-700 border-slate-600 text-white" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Business Hours */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-400" />
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(settings.businessHours).map(([day, hours]) => (
                  <div key={day} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-20">
                        <span className="text-white font-medium capitalize">{day}</span>
                      </div>
                      <Switch
                        checked={!hours.closed}
                        onCheckedChange={(checked) => {
                          setSettings({
                            ...settings,
                            businessHours: {
                              ...settings.businessHours,
                              [day]: { ...hours, closed: !checked },
                            },
                          })
                        }}
                      />
                    </div>

                    {!hours.closed && (
                      <div className="flex items-center space-x-3">
                        <Input
                          type="time"
                          value={hours.open}
                          onChange={(e) => {
                            setSettings({
                              ...settings,
                              businessHours: {
                                ...settings.businessHours,
                                [day]: { ...hours, open: e.target.value },
                              },
                            })
                          }}
                          className="w-32 bg-slate-700 border-slate-600 text-white"
                        />
                        <span className="text-slate-400">to</span>
                        <Input
                          type="time"
                          value={hours.close}
                          onChange={(e) => {
                            setSettings({
                              ...settings,
                              businessHours: {
                                ...settings.businessHours,
                                [day]: { ...hours, close: e.target.value },
                              },
                            })
                          }}
                          className="w-32 bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                    )}

                    {hours.closed && (
                      <Badge variant="secondary" className="bg-red-500/20 text-red-300">
                        Closed
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="booking" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Booking Limits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-slate-300">Maximum Bookings Per Day</Label>
                  <Input
                    type="number"
                    value={settings.bookingLimitPerDay}
                    onChange={(e) => setSettings({ ...settings, bookingLimitPerDay: Number.parseInt(e.target.value) })}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-slate-300">Allow Online Booking</Label>
                    <p className="text-slate-400 text-sm">Enable clients to book appointments online</p>
                  </div>
                  <Switch
                    checked={settings.allowOnlineBooking}
                    onCheckedChange={(checked) => setSettings({ ...settings, allowOnlineBooking: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-slate-300">Auto-Approve Bookings</Label>
                    <p className="text-slate-400 text-sm">Automatically approve new booking requests</p>
                  </div>
                  <Switch
                    checked={settings.autoApproveBookings}
                    onCheckedChange={(checked) => setSettings({ ...settings, autoApproveBookings: checked })}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-green-400" />
                  Deposit Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-slate-300">Require Deposit</Label>
                    <p className="text-slate-400 text-sm">Require clients to pay a deposit when booking</p>
                  </div>
                  <Switch
                    checked={settings.requireDeposit}
                    onCheckedChange={(checked) => setSettings({ ...settings, requireDeposit: checked })}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Minimum Deposit Amount (PHP)</Label>
                  <Input
                    type="number"
                    value={settings.minimumDepositAmount}
                    onChange={(e) =>
                      setSettings({ ...settings, minimumDepositAmount: Number.parseInt(e.target.value) })
                    }
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Deposit Percentage (%)</Label>
                  <Input
                    type="number"
                    value={settings.depositPercentage}
                    onChange={(e) => setSettings({ ...settings, depositPercentage: Number.parseInt(e.target.value) })}
                    className="bg-slate-700 border-slate-600 text-white"
                    min="10"
                    max="100"
                  />
                  <p className="text-slate-400 text-xs">Percentage of total tattoo cost required as deposit</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-blue-400" />
                  Payment Methods
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <Label className="text-slate-300">Stripe</Label>
                      <p className="text-slate-400 text-sm">Credit/Debit cards</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.stripeEnabled}
                    onCheckedChange={(checked) => setSettings({ ...settings, stripeEnabled: checked })}
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <Label className="text-slate-300">PayPal</Label>
                      <p className="text-slate-400 text-sm">PayPal payments</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.paypalEnabled}
                    onCheckedChange={(checked) => setSettings({ ...settings, paypalEnabled: checked })}
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <Label className="text-slate-300">Cash Payments</Label>
                      <p className="text-slate-400 text-sm">Accept cash at studio</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.cashPayments}
                    onCheckedChange={(checked) => setSettings({ ...settings, cashPayments: checked })}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Payment Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-slate-300">Stripe API Key</Label>
                  <Input
                    type="password"
                    placeholder="sk_test_..."
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">PayPal Client ID</Label>
                  <Input
                    type="password"
                    placeholder="AYSq3RDGsmBLJE-otTkBtM-jBRd1TCQwFf9RGfwddNXWz0uFU9ztymylOhRS"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Currency</Label>
                  <Select
                    value={settings.currency}
                    onValueChange={(value) => setSettings({ ...settings, currency: value })}
                  >
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PHP">PHP - Philippine Peso</SelectItem>
                      <SelectItem value="USD">USD - US Dollar</SelectItem>
                      <SelectItem value="EUR">EUR - Euro</SelectItem>
                      <SelectItem value="GBP">GBP - British Pound</SelectItem>
                      <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-300 text-sm font-medium">Security Note</span>
                  </div>
                  <p className="text-blue-200 text-xs mt-1">
                    API keys are encrypted and stored securely. Never share your production keys.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-yellow-400" />
                  Email Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-slate-300">Enable Email Notifications</Label>
                    <p className="text-slate-400 text-sm">Send notifications via email</p>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-slate-300">Booking Confirmations</Label>
                    <p className="text-slate-400 text-sm">Send confirmation emails for new bookings</p>
                  </div>
                  <Switch
                    checked={settings.bookingConfirmations}
                    onCheckedChange={(checked) => setSettings({ ...settings, bookingConfirmations: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-slate-300">Reminder Notifications</Label>
                    <p className="text-slate-400 text-sm">Send appointment reminders</p>
                  </div>
                  <Switch
                    checked={settings.reminderNotifications}
                    onCheckedChange={(checked) => setSettings({ ...settings, reminderNotifications: checked })}
                  />
                </div>

                {settings.reminderNotifications && (
                  <div className="space-y-2">
                    <Label className="text-slate-300">Reminder Time (hours before)</Label>
                    <Select
                      value={settings.reminderHours.toString()}
                      onValueChange={(value) => setSettings({ ...settings, reminderHours: Number.parseInt(value) })}
                    >
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2">2 hours</SelectItem>
                        <SelectItem value="6">6 hours</SelectItem>
                        <SelectItem value="12">12 hours</SelectItem>
                        <SelectItem value="24">24 hours</SelectItem>
                        <SelectItem value="48">48 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Smartphone className="w-5 h-5 mr-2 text-green-400" />
                  SMS Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-slate-300">Enable SMS Notifications</Label>
                    <p className="text-slate-400 text-sm">Send notifications via SMS</p>
                  </div>
                  <Switch
                    checked={settings.smsNotifications}
                    onCheckedChange={(checked) => setSettings({ ...settings, smsNotifications: checked })}
                  />
                </div>

                {settings.smsNotifications && (
                  <>
                    <div className="space-y-2">
                      <Label className="text-slate-300">Twilio Account SID</Label>
                      <Input
                        type="password"
                        placeholder="ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-slate-300">Twilio Auth Token</Label>
                      <Input
                        type="password"
                        placeholder="your_auth_token_here"
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-slate-300">From Phone Number</Label>
                      <Input placeholder="+1234567890" className="bg-slate-700 border-slate-600 text-white" />
                    </div>
                  </>
                )}

                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Bell className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-300 text-sm font-medium">SMS Charges Apply</span>
                  </div>
                  <p className="text-yellow-200 text-xs mt-1">
                    SMS notifications require a Twilio account and charges apply per message sent.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Email Templates */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                Email Templates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent h-20 flex flex-col">
                  <Mail className="w-6 h-6 mb-2" />
                  <span>Booking Confirmation</span>
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent h-20 flex flex-col">
                  <Bell className="w-6 h-6 mb-2" />
                  <span>Appointment Reminder</span>
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent h-20 flex flex-col">
                  <CreditCard className="w-6 h-6 mb-2" />
                  <span>Payment Receipt</span>
                </Button>
                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent h-20 flex flex-col">
                  <Users className="w-6 h-6 mb-2" />
                  <span>Welcome Email</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Users className="w-5 h-5 mr-2 text-purple-400" />
                User Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Multi-User Support</h3>
                <p className="text-slate-400 mb-6">Manage multiple artists and staff members</p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Users className="w-4 h-4 mr-2" />
                  Add Team Member
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-400" />
                  Regional Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-slate-300">Timezone</Label>
                  <Select
                    value={settings.timezone}
                    onValueChange={(value) => setSettings({ ...settings, timezone: value })}
                  >
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                      <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                      <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                      <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                      <SelectItem value="Europe/London">London (GMT)</SelectItem>
                      <SelectItem value="Europe/Paris">Paris (CET)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Date Format</Label>
                  <Select
                    value={settings.dateFormat}
                    onValueChange={(value) => setSettings({ ...settings, dateFormat: value })}
                  >
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="MM/dd/yyyy">MM/DD/YYYY (US)</SelectItem>
                      <SelectItem value="dd/MM/yyyy">DD/MM/YYYY (UK)</SelectItem>
                      <SelectItem value="yyyy-MM-dd">YYYY-MM-DD (ISO)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Language</Label>
                  <Select
                    value={settings.language}
                    onValueChange={(value) => setSettings({ ...settings, language: value })}
                  >
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-400" />
                  Security & Backup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div>
                    <Label className="text-slate-300">Two-Factor Authentication</Label>
                    <p className="text-slate-400 text-sm">Add extra security to your account</p>
                  </div>
                  <Button size="sm" variant="outline" className="border-green-500 text-green-400 bg-transparent">
                    Enable 2FA
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div>
                    <Label className="text-slate-300">Automatic Backups</Label>
                    <p className="text-slate-400 text-sm">Daily backup of your data</p>
                  </div>
                  <Badge className="bg-green-500/20 text-green-300">Active</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div>
                    <Label className="text-slate-300">Data Export</Label>
                    <p className="text-slate-400 text-sm">Download all your studio data</p>
                  </div>
                  <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
