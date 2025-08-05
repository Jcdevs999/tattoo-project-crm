"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, Brain, TrendingUp, Target, BarChart3, Settings, Lightbulb, Calculator, Star } from "lucide-react"

export default function AIPricingPage() {
  const [pricingInputs, setPricingInputs] = useState({
    size: "",
    placement: "",
    style: "",
    complexity: [5],
    sessionTime: [3],
    colors: [2],
  })

  const [aiSuggestion, setAiSuggestion] = useState(null)

  const generatePricing = () => {
    // Simulate AI pricing calculation
    const basePrice = 150
    const sizeMultiplier = pricingInputs.size === "large" ? 2.5 : pricingInputs.size === "medium" ? 1.8 : 1.2
    const complexityMultiplier = pricingInputs.complexity[0] / 5
    const timeMultiplier = pricingInputs.sessionTime[0] / 3
    const colorMultiplier = pricingInputs.colors[0] / 2

    const calculatedPrice = Math.round(
      basePrice * sizeMultiplier * complexityMultiplier * timeMultiplier * colorMultiplier,
    )
    const confidence = Math.round(85 + Math.random() * 10)

    setAiSuggestion({
      price: calculatedPrice,
      confidence: confidence,
      range: {
        min: Math.round(calculatedPrice * 0.85),
        max: Math.round(calculatedPrice * 1.15),
      },
      factors: [
        { name: "Size", impact: "High", value: `${Math.round(sizeMultiplier * 100)}%` },
        { name: "Complexity", impact: "Medium", value: `${Math.round(complexityMultiplier * 100)}%` },
        { name: "Time Required", impact: "High", value: `${pricingInputs.sessionTime[0]}h` },
        { name: "Color Count", impact: "Low", value: `${pricingInputs.colors[0]} colors` },
      ],
    })
  }

  const pricingHistory = [
    {
      id: 1,
      client: "Sarah Johnson",
      tattoo: "Rose shoulder piece",
      aiSuggestion: 450,
      finalPrice: 425,
      accuracy: 94,
      date: "2024-01-15",
    },
    {
      id: 2,
      client: "Mike Chen",
      tattoo: "Dragon sleeve",
      aiSuggestion: 1200,
      finalPrice: 1250,
      accuracy: 96,
      date: "2024-01-14",
    },
    {
      id: 3,
      client: "Emma Davis",
      tattoo: "Geometric pattern",
      aiSuggestion: 320,
      finalPrice: 300,
      accuracy: 94,
      date: "2024-01-13",
    },
  ]

  const aiMetrics = [
    {
      title: "Pricing Accuracy",
      value: "94.2%",
      change: "+2.1%",
      icon: Target,
      color: "text-green-400",
    },
    {
      title: "Avg Confidence",
      value: "87.5%",
      change: "+1.8%",
      icon: Brain,
      color: "text-blue-400",
    },
    {
      title: "Price Variance",
      value: "±8.3%",
      change: "-1.2%",
      icon: BarChart3,
      color: "text-purple-400",
    },
    {
      title: "Client Acceptance",
      value: "91.7%",
      change: "+3.4%",
      icon: Star,
      color: "text-yellow-400",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
            <Zap className="w-8 h-8 mr-3 text-yellow-400" />
            AI Pricing Engine
          </h1>
          <p className="text-slate-400">Intelligent pricing suggestions powered by machine learning</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
            <Settings className="w-4 h-4 mr-2" />
            Configure AI
          </Button>
          <Button className="bg-gradient-to-r from-yellow-500 to-orange-500">
            <Brain className="w-4 h-4 mr-2" />
            Train Model
          </Button>
        </div>
      </div>

      {/* AI Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {aiMetrics.map((metric, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">{metric.title}</CardTitle>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{metric.value}</div>
              <p className="text-xs text-green-400 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                {metric.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Pricing Tools */}
      <Tabs defaultValue="calculator" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger value="calculator" className="text-slate-300 data-[state=active]:text-white">
            <Calculator className="w-4 h-4 mr-2" />
            Price Calculator
          </TabsTrigger>
          <TabsTrigger value="history" className="text-slate-300 data-[state=active]:text-white">
            <BarChart3 className="w-4 h-4 mr-2" />
            Pricing History
          </TabsTrigger>
          <TabsTrigger value="insights" className="text-slate-300 data-[state=active]:text-white">
            <Lightbulb className="w-4 h-4 mr-2" />
            Market Insights
          </TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Form */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-blue-400" />
                  Tattoo Details
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Enter tattoo specifications for AI pricing analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-slate-300">Size</Label>
                    <Select onValueChange={(value) => setPricingInputs({ ...pricingInputs, size: value })}>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small (2-4 inches)</SelectItem>
                        <SelectItem value="medium">Medium (4-8 inches)</SelectItem>
                        <SelectItem value="large">Large (8+ inches)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Placement</Label>
                    <Select onValueChange={(value) => setPricingInputs({ ...pricingInputs, placement: value })}>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Select placement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="arm">Arm</SelectItem>
                        <SelectItem value="leg">Leg</SelectItem>
                        <SelectItem value="back">Back</SelectItem>
                        <SelectItem value="chest">Chest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-300">Style</Label>
                  <Select onValueChange={(value) => setPricingInputs({ ...pricingInputs, style: value })}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="traditional">Traditional</SelectItem>
                      <SelectItem value="realism">Realism</SelectItem>
                      <SelectItem value="geometric">Geometric</SelectItem>
                      <SelectItem value="watercolor">Watercolor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-slate-300">Complexity Level: {pricingInputs.complexity[0]}/10</Label>
                  <Slider
                    value={pricingInputs.complexity}
                    onValueChange={(value) => setPricingInputs({ ...pricingInputs, complexity: value })}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-slate-300">Estimated Time: {pricingInputs.sessionTime[0]} hours</Label>
                  <Slider
                    value={pricingInputs.sessionTime}
                    onValueChange={(value) => setPricingInputs({ ...pricingInputs, sessionTime: value })}
                    max={8}
                    min={1}
                    step={0.5}
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-slate-300">Number of Colors: {pricingInputs.colors[0]}</Label>
                  <Slider
                    value={pricingInputs.colors}
                    onValueChange={(value) => setPricingInputs({ ...pricingInputs, colors: value })}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>

                <Button
                  onClick={generatePricing}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500"
                  disabled={!pricingInputs.size || !pricingInputs.placement || !pricingInputs.style}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Generate AI Pricing
                </Button>
              </CardContent>
            </Card>

            {/* AI Results */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Target className="w-5 h-5 mr-2 text-green-400" />
                  AI Pricing Suggestion
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Machine learning powered price recommendation
                </CardDescription>
              </CardHeader>
              <CardContent>
                {aiSuggestion ? (
                  <div className="space-y-6">
                    {/* Main Price */}
                    <div className="text-center p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
                      <div className="text-4xl font-bold text-white mb-2">${aiSuggestion.price}</div>
                      <div className="text-slate-300 mb-3">Recommended Price</div>
                      <Badge className="bg-green-500/20 text-green-300">{aiSuggestion.confidence}% Confidence</Badge>
                    </div>

                    {/* Price Range */}
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">Price Range</span>
                        <span className="text-white font-semibold">
                          ${aiSuggestion.range.min} - ${aiSuggestion.range.max}
                        </span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>

                    {/* Pricing Factors */}
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold">Pricing Factors</h4>
                      {aiSuggestion.factors.map((factor, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                factor.impact === "High"
                                  ? "bg-red-400"
                                  : factor.impact === "Medium"
                                    ? "bg-yellow-400"
                                    : "bg-green-400"
                              }`}
                            ></div>
                            <span className="text-slate-300">{factor.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {factor.impact}
                            </Badge>
                            <span className="text-white font-medium">{factor.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">Accept Pricing</Button>
                      <Button variant="outline" className="flex-1 border-slate-600 text-slate-300 bg-transparent">
                        Adjust Manually
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Brain className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                    <p className="text-slate-400 mb-2">No pricing generated yet</p>
                    <p className="text-slate-500 text-sm">Fill in the tattoo details and click "Generate AI Pricing"</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Pricing History & Accuracy</CardTitle>
              <CardDescription className="text-slate-400">Track AI pricing performance over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pricingHistory.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-white">{item.client}</h4>
                        <Badge
                          className={`${
                            item.accuracy >= 95
                              ? "bg-green-500/20 text-green-300"
                              : item.accuracy >= 90
                                ? "bg-yellow-500/20 text-yellow-300"
                                : "bg-red-500/20 text-red-300"
                          }`}
                        >
                          {item.accuracy}% Accurate
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-400 mb-2">{item.tattoo}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-slate-500">{item.date}</p>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-slate-300">
                            AI: <span className="text-blue-400">${item.aiSuggestion}</span>
                          </span>
                          <span className="text-sm text-slate-300">
                            Final: <span className="text-green-400">${item.finalPrice}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Market Trends</CardTitle>
                <CardDescription className="text-slate-400">Current pricing trends in your area</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <span className="text-slate-300">Traditional Style</span>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">+15%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <span className="text-slate-300">Realism</span>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">+8%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <span className="text-slate-300">Geometric</span>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />
                    <span className="text-red-400">-3%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Optimization Tips</CardTitle>
                <CardDescription className="text-slate-400">
                  AI-powered recommendations to improve pricing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <p className="text-blue-300 font-medium mb-1">Increase Large Tattoo Pricing</p>
                      <p className="text-slate-400 text-sm">
                        Consider raising prices for large pieces by 10-15% based on market demand.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-5 h-5 text-purple-400 mt-0.5" />
                    <div>
                      <p className="text-purple-300 font-medium mb-1">Weekend Premium</p>
                      <p className="text-slate-400 text-sm">
                        Add a 20% weekend surcharge to maximize revenue during peak times.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-5 h-5 text-green-400 mt-0.5" />
                    <div>
                      <p className="text-green-300 font-medium mb-1">Color Complexity Pricing</p>
                      <p className="text-slate-400 text-sm">
                        Adjust pricing model to better account for color complexity and blending.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
