"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Heart, Star, Gift, Users, TrendingUp, Crown, Award, Zap, Plus, Edit, Trash2 } from "lucide-react"

export default function LoyaltyPage() {
  const [selectedTier, setSelectedTier] = useState("bronze")

  const loyaltyStats = [
    {
      title: "Active Members",
      value: "342",
      change: "+18%",
      icon: Users,
      color: "text-blue-400",
    },
    {
      title: "Points Redeemed",
      value: "12,450",
      change: "+25%",
      icon: Gift,
      color: "text-green-400",
    },
    {
      title: "Avg Points/Client",
      value: "156",
      change: "+12%",
      icon: Star,
      color: "text-yellow-400",
    },
    {
      title: "Retention Rate",
      value: "78%",
      change: "+8%",
      icon: Heart,
      color: "text-pink-400",
    },
  ]

  const loyaltyTiers = [
    {
      id: "bronze",
      name: "Ink Enthusiast",
      icon: Award,
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/30",
      pointsRequired: 0,
      benefits: ["5% discount on all services", "Birthday month special offer", "Priority booking notifications"],
      members: 156,
    },
    {
      id: "silver",
      name: "Ink Collector",
      icon: Star,
      color: "text-gray-400",
      bgColor: "bg-gray-500/20",
      borderColor: "border-gray-500/30",
      pointsRequired: 500,
      benefits: [
        "10% discount on all services",
        "Free touch-ups within 6 months",
        "Exclusive design previews",
        "Complimentary aftercare kit",
      ],
      members: 89,
    },
    {
      id: "gold",
      name: "Ink Connoisseur",
      icon: Crown,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/30",
      pointsRequired: 1500,
      benefits: [
        "15% discount on all services",
        "Free consultation sessions",
        "Priority scheduling",
        "Exclusive member events",
        "Custom design collaboration",
      ],
      members: 67,
    },
    {
      id: "platinum",
      name: "Ink Master",
      icon: Zap,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30",
      pointsRequired: 3000,
      benefits: [
        "20% discount on all services",
        "VIP treatment and amenities",
        "Free annual touch-up session",
        "Personal artist consultation",
        "Exclusive limited edition designs",
        "Referral bonus rewards",
      ],
      members: 23,
    },
    {
      id: "diamond",
      name: "Ink Legend",
      icon: Crown,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
      borderColor: "border-cyan-500/30",
      pointsRequired: 5000,
      benefits: [
        "25% discount on all services",
        "Lifetime touch-up guarantee",
        "Personal concierge service",
        "Exclusive artist collaborations",
        "VIP studio access",
        "Annual appreciation gift",
        "Legacy member recognition",
      ],
      members: 7,
    },
  ]

  const recentActivity = [
    {
      id: 1,
      client: "Sarah Johnson",
      action: "Earned 150 points",
      details: "Rose shoulder piece completion",
      date: "2024-01-15",
      points: 150,
    },
    {
      id: 2,
      client: "Mike Chen",
      action: "Redeemed 300 points",
      details: "Free touch-up session",
      date: "2024-01-14",
      points: -300,
    },
    {
      id: 3,
      client: "Emma Davis",
      action: "Tier upgrade",
      details: "Promoted to Ink Collector",
      date: "2024-01-13",
      points: 0,
    },
  ]

  const rewards = [
    {
      id: 1,
      name: "Free Touch-up Session",
      points: 200,
      category: "Service",
      available: true,
    },
    {
      id: 2,
      name: "Aftercare Kit",
      points: 100,
      category: "Product",
      available: true,
    },
    {
      id: 3,
      name: "Custom Design Consultation",
      points: 500,
      category: "Service",
      available: true,
    },
    {
      id: 4,
      name: "Studio Merchandise",
      points: 150,
      category: "Product",
      available: false,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
            <Heart className="w-8 h-8 mr-3 text-pink-400" />
            Loyalty Program
          </h1>
          <p className="text-slate-400">Manage customer loyalty tiers, rewards, and engagement</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
            <Plus className="w-4 h-4 mr-2" />
            Add Reward
          </Button>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-500">
            <Gift className="w-4 h-4 mr-2" />
            Create Campaign
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loyaltyStats.map((stat, index) => (
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

      {/* Loyalty Program Management */}
      <Tabs defaultValue="tiers" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="tiers" className="text-slate-300 data-[state=active]:text-white">
            Loyalty Tiers
          </TabsTrigger>
          <TabsTrigger value="members" className="text-slate-300 data-[state=active]:text-white">
            Members
          </TabsTrigger>
          <TabsTrigger value="rewards" className="text-slate-300 data-[state=active]:text-white">
            Rewards
          </TabsTrigger>
          <TabsTrigger value="activity" className="text-slate-300 data-[state=active]:text-white">
            Activity
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tiers" className="space-y-6">
          {/* Tier Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {loyaltyTiers.map((tier) => (
              <Card
                key={tier.id}
                className={`bg-slate-800/50 border-slate-700 hover:border-slate-600 cursor-pointer transition-all ${
                  selectedTier === tier.id ? tier.borderColor : ""
                }`}
                onClick={() => setSelectedTier(tier.id)}
              >
                <CardHeader className="text-center pb-3">
                  <div
                    className={`w-12 h-12 ${tier.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}
                  >
                    <tier.icon className={`w-6 h-6 ${tier.color}`} />
                  </div>
                  <CardTitle className="text-white text-lg">{tier.name}</CardTitle>
                  <CardDescription className="text-slate-400">
                    {tier.pointsRequired === 0 ? "Starting tier" : `${tier.pointsRequired}+ points`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{tier.members}</div>
                  <div className="text-slate-400 text-sm">Active Members</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Selected Tier Details */}
          {selectedTier && (
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {(() => {
                      const tier = loyaltyTiers.find((t) => t.id === selectedTier)
                      return (
                        <>
                          <div className={`w-10 h-10 ${tier.bgColor} rounded-full flex items-center justify-center`}>
                            <tier.icon className={`w-5 h-5 ${tier.color}`} />
                          </div>
                          <div>
                            <CardTitle className="text-white">{tier.name}</CardTitle>
                            <CardDescription className="text-slate-400">
                              {tier.pointsRequired === 0
                                ? "Entry level tier"
                                : `Requires ${tier.pointsRequired} points`}
                            </CardDescription>
                          </div>
                        </>
                      )
                    })()}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 bg-transparent">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="border-red-500 text-red-400 bg-transparent">
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Tier Benefits</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {loyaltyTiers
                        .find((t) => t.id === selectedTier)
                        ?.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-slate-300">{benefit}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="members" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Loyalty Members</CardTitle>
              <CardDescription className="text-slate-400">Manage customer loyalty status and points</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">SJ</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Sarah Johnson</h4>
                      <p className="text-sm text-slate-400">sarah@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-white font-semibold">1,250 points</div>
                      <Badge className="bg-yellow-500/20 text-yellow-300">Ink Connoisseur</Badge>
                    </div>
                    <div className="w-24">
                      <Progress value={83} className="h-2" />
                      <div className="text-xs text-slate-400 mt-1">83% to next tier</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">MC</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Mike Chen</h4>
                      <p className="text-sm text-slate-400">mike@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-white font-semibold">3,450 points</div>
                      <Badge className="bg-purple-500/20 text-purple-300">Ink Master</Badge>
                    </div>
                    <div className="w-24">
                      <Progress value={69} className="h-2" />
                      <div className="text-xs text-slate-400 mt-1">69% to next tier</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">ED</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Emma Davis</h4>
                      <p className="text-sm text-slate-400">emma@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-white font-semibold">750 points</div>
                      <Badge className="bg-gray-500/20 text-gray-300">Ink Collector</Badge>
                    </div>
                    <div className="w-24">
                      <Progress value={50} className="h-2" />
                      <div className="text-xs text-slate-400 mt-1">50% to next tier</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewards.map((reward) => (
              <Card key={reward.id} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">{reward.name}</CardTitle>
                    <Badge variant={reward.available ? "default" : "secondary"}>
                      {reward.available ? "Available" : "Out of Stock"}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-400">
                    {reward.category} • {reward.points} points
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">{reward.points}</div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 bg-transparent">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="border-red-500 text-red-400 bg-transparent">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Activity</CardTitle>
              <CardDescription className="text-slate-400">Latest loyalty program interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-white">{activity.client}</h4>
                        <Badge
                          className={
                            activity.points > 0
                              ? "bg-green-500/20 text-green-300"
                              : activity.points < 0
                                ? "bg-red-500/20 text-red-300"
                                : "bg-blue-500/20 text-blue-300"
                          }
                        >
                          {activity.points > 0
                            ? `+${activity.points}`
                            : activity.points < 0
                              ? activity.points
                              : "Tier Change"}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-400 mb-1">{activity.action}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-slate-500">{activity.date}</p>
                        <p className="text-xs text-slate-400">{activity.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
