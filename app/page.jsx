"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Clock, MapPin, Phone, Mail, Instagram, Facebook, Star, User, LogOut, Settings, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userType, setUserType] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    tattooDescription: "",
    size: "",
    placement: "",
    style: "",
    preferredDate: "",
    preferredTime: "",
    budget: "",
    hasReferences: false,
  })
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    const storedUserType = localStorage.getItem("userType")
    const storedUserEmail = localStorage.getItem("userEmail")
    if (storedUserType && storedUserEmail) {
      setIsLoggedIn(true)
      setUserType(storedUserType)
      setUserEmail(storedUserEmail)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("userType")
    localStorage.removeItem("userEmail")
    setIsLoggedIn(false)
    setUserType("")
    setUserEmail("")
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    })
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    toast({
      title: "Booking Request Submitted!",
      description: "We'll review your request and get back to you within 24 hours.",
    })
    setBookingForm({
      name: "",
      email: "",
      phone: "",
      tattooDescription: "",
      size: "",
      placement: "",
      style: "",
      preferredDate: "",
      preferredTime: "",
      budget: "",
      hasReferences: false,
    })
  }

  const testimonials = [
    {
      name: "Maria Santos",
      rating: 5,
      text: "Amazing work! The artist was professional and the studio was very clean. Highly recommend!",
      tattoo: "Rose sleeve",
    },
    {
      name: "John Cruz",
      rating: 5,
      text: "Best tattoo experience I've ever had. The attention to detail is incredible.",
      tattoo: "Dragon back piece",
    },
    {
      name: "Ana Reyes",
      rating: 5,
      text: "Professional, clean, and artistic. Will definitely be coming back for more work!",
      tattoo: "Geometric design",
    },
  ]

  const featuredWork = [
    {
      id: 1,
      title: "Dragon Sleeve",
      image: "/placeholder.svg?height=300&width=300&text=Dragon+Sleeve",
      style: "Traditional Japanese",
      likes: 234,
    },
    {
      id: 2,
      title: "Portrait Realism",
      image: "/placeholder.svg?height=300&width=300&text=Portrait+Realism",
      style: "Black & Grey",
      likes: 189,
    },
    {
      id: 3,
      title: "Watercolor Phoenix",
      image: "/placeholder.svg?height=300&width=300&text=Watercolor+Phoenix",
      style: "Watercolor",
      likes: 298,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">InkFlow Studio</h1>
                <p className="text-slate-400 text-sm">Premium Tattoo Artistry</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300 text-sm">{userEmail}</span>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                      {userType}
                    </Badge>
                  </div>
                  {userType === "admin" && (
                    <Button
                      onClick={() => router.push("/admin")}
                      variant="outline"
                      size="sm"
                      className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Admin Panel
                    </Button>
                  )}
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    size="sm"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => router.push("/login")}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  Login
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Express Your
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Story</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Professional tattoo artistry in the heart of the Philippines. Custom designs, premium quality, and
            exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
                >
                  Book Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-slate-800 border-slate-700 text-white">
                <DialogHeader>
                  <DialogTitle>Book Your Tattoo Consultation</DialogTitle>
                  <DialogDescription className="text-slate-400">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-300">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        className="bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-300">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                        className="bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-300">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        className="bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-slate-300">
                        Budget (PHP)
                      </Label>
                      <Input
                        id="budget"
                        value={bookingForm.budget}
                        onChange={(e) => setBookingForm({ ...bookingForm, budget: e.target.value })}
                        placeholder="e.g., ₱5,000 - ₱10,000"
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="size" className="text-slate-300">
                        Tattoo Size
                      </Label>
                      <Select
                        value={bookingForm.size}
                        onValueChange={(value) => setBookingForm({ ...bookingForm, size: value })}
                      >
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small (2-4 inches)</SelectItem>
                          <SelectItem value="medium">Medium (4-8 inches)</SelectItem>
                          <SelectItem value="large">Large (8-12 inches)</SelectItem>
                          <SelectItem value="extra-large">Extra Large (12+ inches)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="placement" className="text-slate-300">
                        Placement
                      </Label>
                      <Input
                        id="placement"
                        value={bookingForm.placement}
                        onChange={(e) => setBookingForm({ ...bookingForm, placement: e.target.value })}
                        placeholder="e.g., Arm, Back, Leg"
                        className="bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="style" className="text-slate-300">
                        Style
                      </Label>
                      <Select
                        value={bookingForm.style}
                        onValueChange={(value) => setBookingForm({ ...bookingForm, style: value })}
                      >
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue placeholder="Select style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="traditional">Traditional</SelectItem>
                          <SelectItem value="realism">Realism</SelectItem>
                          <SelectItem value="geometric">Geometric</SelectItem>
                          <SelectItem value="watercolor">Watercolor</SelectItem>
                          <SelectItem value="minimalist">Minimalist</SelectItem>
                          <SelectItem value="tribal">Tribal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredDate" className="text-slate-300">
                        Preferred Date
                      </Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={bookingForm.preferredDate}
                        onChange={(e) => setBookingForm({ ...bookingForm, preferredDate: e.target.value })}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-slate-300">
                      Tattoo Description
                    </Label>
                    <Textarea
                      id="description"
                      value={bookingForm.tattooDescription}
                      onChange={(e) => setBookingForm({ ...bookingForm, tattooDescription: e.target.value })}
                      placeholder="Describe your tattoo idea in detail..."
                      className="bg-slate-700 border-slate-600 text-white"
                      rows={4}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="references"
                      checked={bookingForm.hasReferences}
                      onChange={(e) => setBookingForm({ ...bookingForm, hasReferences: e.target.checked })}
                      className="rounded border-slate-600"
                    />
                    <Label htmlFor="references" className="text-slate-300">
                      I have reference images to share
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  >
                    Submit Booking Request
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            <Button
              size="lg"
              variant="outline"
              onClick={() => router.push("/portfolio")}
              className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent px-8 py-3"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Featured Work</h3>
            <p className="text-slate-300 text-lg">A glimpse of our artistic excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredWork.map((work) => (
              <Card
                key={work.id}
                className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-2 text-white">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">{work.likes} likes</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-white text-lg mb-1">{work.title}</h4>
                  <p className="text-slate-400 text-sm">{work.style}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => router.push("/portfolio")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
            >
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-white text-center mb-12">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-white">Custom Tattoos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Unique, personalized designs created specifically for you by our talented artists.
                </p>
                <div className="text-purple-400 font-semibold">Starting at ₱3,000</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-white">Cover-ups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Transform old or unwanted tattoos into beautiful new artwork with our cover-up expertise.
                </p>
                <div className="text-purple-400 font-semibold">Starting at ₱5,000</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-white">Touch-ups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">
                  Refresh and restore your existing tattoos to their original vibrancy and detail.
                </p>
                <div className="text-purple-400 font-semibold">Starting at ₱2,000</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-white text-center mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-slate-400 text-sm">{testimonial.tattoo}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-bold text-white mb-8">Visit Our Studio</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <div>
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-slate-300">123 Rizal Street, Makati City, Metro Manila</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-slate-300">+63 917 123 4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-slate-300">info@inkflowstudio.ph</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-purple-400" />
                  <div>
                    <div className="text-white font-semibold">Hours</div>
                    <div className="text-slate-300">
                      Mon-Fri: 10AM-8PM
                      <br />
                      Sat-Sun: 10AM-10PM
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
              </div>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-8">
              <h4 className="text-2xl font-bold text-white mb-6">Studio Guidelines</h4>
              <ul className="space-y-3 text-slate-300">
                <li>• Must be 18+ or have parental consent</li>
                <li>• Valid ID required for all appointments</li>
                <li>• ₱1,000 deposit required to secure booking</li>
                <li>• 24-hour cancellation policy</li>
                <li>• No alcohol or drugs before appointment</li>
                <li>• Eat a good meal before your session</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 border-t border-slate-700">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">I</span>
            </div>
            <span className="text-white font-bold text-xl">InkFlow Studio</span>
          </div>
          <p className="text-slate-400">© 2024 InkFlow Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
