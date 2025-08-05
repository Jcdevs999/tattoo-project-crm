"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  User,
  Shield,
  Key,
  CreditCard,
  Bell,
  Save,
  Eye,
  EyeOff,
  Trash2,
  Download,
  Calendar,
  MapPin,
  Globe,
  Camera,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AccountPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@inkflowstudio.com",
    phone: "(555) 123-4567",
    bio: "Professional tattoo artist with 8+ years of experience specializing in traditional and realism styles.",
    location: "Creative City, CC",
    website: "www.johndoetattoos.com",
    instagram: "@johndoetattoos",
    joinDate: "2022-03-15",
    role: "Studio Owner",
  })

  const [security, setSecurity] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactorEnabled: false,
    loginAlerts: true,
  })

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: true,
    weeklyReports: true,
    theme: "dark",
    language: "en",
  })

  const { toast } = useToast()

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    })
  }

  const handleChangePassword = () => {
    if (security.newPassword !== security.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "New password and confirmation don't match.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Password Changed",
      description: "Your password has been updated successfully.",
    })

    setSecurity({
      ...security,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
  }

  const handleEnable2FA = () => {
    toast({
      title: "2FA Setup",
      description: "Two-factor authentication setup process initiated.",
    })
  }

  const handleExportData = () => {
    toast({
      title: "Data Export",
      description: "Your data export has been initiated. You'll receive an email when ready.",
    })
  }

  const handleDeleteAccount = () => {
    toast({
      title: "Account Deletion",
      description: "Account deletion request has been submitted for review.",
      variant: "destructive",
    })
  }

  const activityLog = [
    {
      id: 1,
      action: "Profile Updated",
      timestamp: "2024-01-20 10:30 AM",
      ip: "192.168.1.100",
      device: "Chrome on Windows",
    },
    {
      id: 2,
      action: "Password Changed",
      timestamp: "2024-01-15 02:45 PM",
      ip: "192.168.1.100",
      device: "Chrome on Windows",
    },
    {
      id: 3,
      action: "Login",
      timestamp: "2024-01-20 08:00 AM",
      ip: "192.168.1.100",
      device: "Chrome on Windows",
    },
    {
      id: 4,
      action: "Login",
      timestamp: "2024-01-19 09:15 AM",
      ip: "192.168.1.100",
      device: "Safari on iPhone",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
            <User className="w-8 h-8 mr-3 text-blue-400" />
            Account Settings
          </h1>
          <p className="text-slate-400">Manage your personal account and preferences</p>
        </div>
        <Button onClick={handleSaveProfile} className="bg-purple-600 hover:bg-purple-700 text-white">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      {/* Account Overview */}
      <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">JD</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {profile.firstName} {profile.lastName}
                </h3>
                <p className="text-slate-300">{profile.role}</p>
                <div className="flex items-center space-x-4 mt-1">
                  <Badge className="bg-green-500/20 text-green-300">Active</Badge>
                  <span className="text-slate-400 text-sm">Member since {profile.joinDate}</span>
                </div>
              </div>
            </div>
            <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
              <Camera className="w-4 h-4 mr-2" />
              Change Photo
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Account Tabs */}
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="profile" className="data-[state=active]:bg-slate-700">
            Profile
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-slate-700">
            Security
          </TabsTrigger>
          <TabsTrigger value="preferences" className="data-[state=active]:bg-slate-700">
            Preferences
          </TabsTrigger>
          <TabsTrigger value="billing" className="data-[state=active]:bg-slate-700">
            Billing
          </TabsTrigger>
          <TabsTrigger value="activity" className="data-[state=active]:bg-slate-700">
            Activity
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Personal Information */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-400" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-slate-300">First Name</Label>
                    <Input
                      value={profile.firstName}
                      onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Last Name</Label>
                    <Input
                      value={profile.lastName}
                      onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Email Address</Label>
                  <Input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Phone Number</Label>
                  <Input
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Bio</Label>
                  <Textarea
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white min-h-[100px]"
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Professional Information */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Professional Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-slate-300">Role</Label>
                  <Input
                    value={profile.role}
                    onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Location</Label>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <Input
                      value={profile.location}
                      onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Website</Label>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-slate-400" />
                    <Input
                      value={profile.website}
                      onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Instagram</Label>
                  <Input
                    value={profile.instagram}
                    onChange={(e) => setProfile({ ...profile, instagram: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="@username"
                  />
                </div>

                <Separator className="bg-slate-600" />

                <div className="space-y-2">
                  <Label className="text-slate-300">Member Since</Label>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-white">{profile.joinDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Password Settings */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Key className="w-5 h-5 mr-2 text-green-400" />
                  Password Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-slate-300">Current Password</Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={security.currentPassword}
                      onChange={(e) => setSecurity({ ...security, currentPassword: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white pr-10"
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

                <div className="space-y-2">
                  <Label className="text-slate-300">New Password</Label>
                  <Input
                    type="password"
                    value={security.newPassword}
                    onChange={(e) => setSecurity({ ...security, newPassword: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Confirm New Password</Label>
                  <Input
                    type="password"
                    value={security.confirmPassword}
                    onChange={(e) => setSecurity({ ...security, confirmPassword: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <Button onClick={handleChangePassword} className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Key className="w-4 h-4 mr-2" />
                  Change Password
                </Button>
              </CardContent>
            </Card>

            {/* Security Features */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-purple-400" />
                  Security Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div>
                    <Label className="text-slate-300">Two-Factor Authentication</Label>
                    <p className="text-slate-400 text-sm">Add extra security to your account</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={security.twoFactorEnabled}
                      onCheckedChange={(checked) => setSecurity({ ...security, twoFactorEnabled: checked })}
                    />
                    {!security.twoFactorEnabled && (
                      <Button
                        size="sm"
                        onClick={handleEnable2FA}
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                      >
                        Setup
                      </Button>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div>
                    <Label className="text-slate-300">Login Alerts</Label>
                    <p className="text-slate-400 text-sm">Get notified of new login attempts</p>
                  </div>
                  <Switch
                    checked={security.loginAlerts}
                    onCheckedChange={(checked) => setSecurity({ ...security, loginAlerts: checked })}
                  />
                </div>

                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-green-300 text-sm font-medium">Account Security Score</span>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-green-200 text-sm">Strong</span>
                      <span className="text-green-200 text-sm">85%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Notification Preferences */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-yellow-400" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-slate-300">Email Notifications</Label>
                    <p className="text-slate-400 text-sm">Receive notifications via email</p>
                  </div>
                  <Switch
                    checked={preferences.emailNotifications}
                    onCheckedChange={(checked) => setPreferences({ ...preferences, emailNotifications: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-slate-300">SMS Notifications</Label>
                    <p className="text-slate-400 text-sm">Receive notifications via SMS</p>
                  </div>
                  <Switch
                    checked={preferences.smsNotifications}
                    onCheckedChange={(checked) => setPreferences({ ...preferences, smsNotifications: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-slate-300">Marketing Emails</Label>
                    <p className="text-slate-400 text-sm">Receive promotional content</p>
                  </div>
                  <Switch
                    checked={preferences.marketingEmails}
                    onCheckedChange={(checked) => setPreferences({ ...preferences, marketingEmails: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-slate-300">Weekly Reports</Label>
                    <p className="text-slate-400 text-sm">Receive weekly analytics reports</p>
                  </div>
                  <Switch
                    checked={preferences.weeklyReports}
                    onCheckedChange={(checked) => setPreferences({ ...preferences, weeklyReports: checked })}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Display Preferences */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Display Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-slate-300">Theme</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant={preferences.theme === "dark" ? "default" : "outline"}
                      onClick={() => setPreferences({ ...preferences, theme: "dark" })}
                      className={
                        preferences.theme === "dark"
                          ? "bg-purple-600"
                          : "border-slate-600 text-slate-300 bg-transparent"
                      }
                    >
                      Dark
                    </Button>
                    <Button
                      variant={preferences.theme === "light" ? "default" : "outline"}
                      onClick={() => setPreferences({ ...preferences, theme: "light" })}
                      className={
                        preferences.theme === "light"
                          ? "bg-purple-600"
                          : "border-slate-600 text-slate-300 bg-transparent"
                      }
                    >
                      Light
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Language</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant={preferences.language === "en" ? "default" : "outline"}
                      onClick={() => setPreferences({ ...preferences, language: "en" })}
                      className={
                        preferences.language === "en"
                          ? "bg-purple-600"
                          : "border-slate-600 text-slate-300 bg-transparent"
                      }
                    >
                      English
                    </Button>
                    <Button
                      variant={preferences.language === "es" ? "default" : "outline"}
                      onClick={() => setPreferences({ ...preferences, language: "es" })}
                      className={
                        preferences.language === "es"
                          ? "bg-purple-600"
                          : "border-slate-600 text-slate-300 bg-transparent"
                      }
                    >
                      Spanish
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-green-400" />
                Billing Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <CreditCard className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Billing Management</h3>
                <p className="text-slate-400 mb-6">Manage your subscription and payment methods</p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Manage Billing
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activityLog.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div>
                      <h4 className="font-medium text-white">{activity.action}</h4>
                      <p className="text-slate-400 text-sm">{activity.timestamp}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-300 text-sm">{activity.device}</p>
                      <p className="text-slate-400 text-xs">{activity.ip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Data Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                <div>
                  <Label className="text-slate-300">Export Account Data</Label>
                  <p className="text-slate-400 text-sm">Download all your account data</p>
                </div>
                <Button
                  onClick={handleExportData}
                  variant="outline"
                  className="border-slate-600 text-slate-300 bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <div>
                  <Label className="text-red-300">Delete Account</Label>
                  <p className="text-red-200 text-sm">Permanently delete your account and all data</p>
                </div>
                <Button
                  onClick={handleDeleteAccount}
                  variant="outline"
                  className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white bg-transparent"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
