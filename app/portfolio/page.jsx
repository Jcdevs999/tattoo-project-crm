"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
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
import { Separator } from "@/components/ui/separator"
import {
  Search,
  Filter,
  Heart,
  Star,
  Calendar,
  Clock,
  DollarSign,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Share2,
  Eye,
  Award,
  Users,
} from "lucide-react"
import { portfolioItems } from "@/data/mock-data"

export default function PortfolioPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [favorites, setFavorites] = useState(new Set())

  

  const categories = [
    "all",
    "Traditional",
    "Realism",
    "Geometric",
    "Watercolor",
    "Minimalist",
    "Tribal",
    "Neo-Traditional",
    "Blackwork",
  ]

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(id)) {
      newFavorites.delete(id)
    } else {
      newFavorites.add(id)
    }
    setFavorites(newFavorites)
  }

  const filteredItems = portfolioItems
    .filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "newest":
        default:
          return b.id - a.id
      }
    })

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900/50 to-pink-900/50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Tattoo Portfolio</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Explore our collection of custom tattoo artistry, featuring diverse styles and exceptional craftsmanship
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-slate-300">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>48 Tattoos Completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span>250+ Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>4.9 Average Rating</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    placeholder="Search tattoos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-slate-700 border-slate-600 text-white"
                  />
                </div>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48 bg-slate-700 border-slate-600 text-white">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-48 bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="p-0 gap-0 bg-slate-800/50 border-slate-700 overflow-hidden group hover:border-purple-500/50 transition-all duration-300"
            >
              <CardHeader className="gap-0 p-0">
                 <div className="relative">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-70 object-cover"
                />
                {item.featured && (
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    Featured
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className={`absolute top-3 right-3 ${
                    favorites.has(item.id) ? "text-red-400" : "text-slate-400"
                  } hover:text-red-400`}
                  onClick={() => toggleFavorite(item.id)}
                >
                  <Heart className={`w-4 h-4 ${favorites.has(item.id) ? "fill-current" : ""}`} />
                </Button>
               
              </div>
             </CardHeader>
              <CardContent className="p-4 gap-0">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-slate-400">{item.rating}</span>
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2 line-clamp-1">{item.title}</h3>
                <div className="flex items-center justify-between text-sm text-slate-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="w-3 h-3" />
                    <span>₱{item.price.toLocaleString()}</span>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl bg-slate-800 border-slate-700 text-white">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{item.title}</DialogTitle>
                      <DialogDescription className="text-slate-400">
                        {item.category} • {item.size} • {item.duration}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-80 object-cover rounded-lg"
                        />
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold mb-2">Description</h4>
                          <p className="text-slate-300">{item.description}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-slate-400">Price</h5>
                            <p className="text-xl font-bold text-green-400">₱{item.price.toLocaleString()}</p>
                          </div>
                          <div>
                            <h5 className="font-medium text-slate-400">Duration</h5>
                            <p className="text-white">{item.duration}</p>
                          </div>
                          <div>
                            <h5 className="font-medium text-slate-400">Size</h5>
                            <p className="text-white">{item.size}</p>
                          </div>
                          <div>
                            <h5 className="font-medium text-slate-400">Rating</h5>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-white">{item.rating}</span>
                              <span className="text-slate-400">({item.reviews} reviews)</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-medium text-slate-400 mb-2">Client Testimonial</h5>
                          <blockquote className="bg-slate-700/50 p-3 rounded-lg">
                            <p className="text-slate-300 italic">"{item.clientTestimonial}"</p>
                            <footer className="text-slate-400 text-sm mt-2">- {item.clientName}</footer>
                          </blockquote>
                        </div>
                        <div className="flex space-x-3">
                          <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                            <Calendar className="w-4 h-4 mr-2" />
                            Book Now
                          </Button>
                          <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Artist Section */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Meet the Artist</h2>
                <p className="text-slate-300 mb-6">
                  With over 8 years of experience in the tattoo industry, our lead artist specializes in creating
                  unique, custom designs that tell your story. From traditional to contemporary styles, every piece is
                  crafted with precision, creativity, and passion.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">250+</div>
                    <div className="text-slate-400 text-sm">Happy Clients</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-pink-400">8+</div>
                    <div className="text-slate-400 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">48</div>
                    <div className="text-slate-400 text-sm">Portfolio Pieces</div>
                  </div>
                  <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400">4.9</div>
                    <div className="text-slate-400 text-sm">Average Rating</div>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                    <Instagram className="w-4 h-4 mr-2" />
                    @inkflowstudio
                  </Button>
                  <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                    <Facebook className="w-4 h-4 mr-2" />
                    InkFlow Studio
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Studio Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-white">123 Art Street, Makati City</p>
                      <p className="text-slate-400 text-sm">Metro Manila, Philippines 1200</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="text-white">+63 917 123 4567</p>
                      <p className="text-slate-400 text-sm">Call or text for appointments</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-white">info@inkflowstudio.com</p>
                      <p className="text-slate-400 text-sm">Email for consultations</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <div>
                      <p className="text-white">Mon-Sat: 10AM-8PM</p>
                      <p className="text-slate-400 text-sm">Sunday: 12PM-6PM</p>
                    </div>
                  </div>
                </div>
                <Separator className="my-6 bg-slate-600" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Studio Guidelines</h4>
                  <ul className="text-slate-300 text-sm space-y-2">
                    <li>• Consultations are free and highly recommended</li>
                    <li>• 50% deposit required to secure your appointment</li>
                    <li>• Please arrive 15 minutes early for your session</li>
                    <li>• Bring a valid ID and eat before your appointment</li>
                    <li>• Follow aftercare instructions for best results</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
