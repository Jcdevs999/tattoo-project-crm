"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, ChevronLeft, ChevronRight, Plus, Clock, User, Palette, MapPin, DollarSign } from "lucide-react"
import { format, addDays, startOfWeek, addWeeks, subWeeks, isSameDay, parseISO } from "date-fns"

export default function CalendarPage() {
  const [currentWeek, setCurrentWeek] = useState(new Date())
  const [viewMode, setViewMode] = useState("week")
  const [selectedDate, setSelectedDate] = useState(new Date())

  // Sample appointments data
  const appointments = [
    {
      id: 1,
      client: "Sarah Johnson",
      tattoo: "Rose on shoulder",
      date: "2024-01-15",
      startTime: "14:00",
      endTime: "16:00",
      duration: 2,
      status: "confirmed",
      deposit: 150,
      style: "Traditional",
      placement: "Shoulder",
    },
    {
      id: 2,
      client: "Mike Chen",
      tattoo: "Dragon sleeve (Session 1)",
      date: "2024-01-16",
      startTime: "10:00",
      endTime: "14:00",
      duration: 4,
      status: "confirmed",
      deposit: 300,
      style: "Realism",
      placement: "Arm",
    },
    {
      id: 3,
      client: "Emma Davis",
      tattoo: "Geometric pattern",
      date: "2024-01-17",
      startTime: "16:00",
      endTime: "17:30",
      duration: 1.5,
      status: "confirmed",
      deposit: 100,
      style: "Geometric",
      placement: "Wrist",
    },
    {
      id: 4,
      client: "Alex Rodriguez",
      tattoo: "Memorial piece",
      date: "2024-01-18",
      startTime: "13:00",
      endTime: "17:00",
      duration: 4,
      status: "tentative",
      deposit: 250,
      style: "Realism",
      placement: "Back",
    },
  ]

  const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(startOfWeek(currentWeek), i)
    return date
  })

  const getAppointmentsForDate = (date) => {
    const dateStr = format(date, "yyyy-MM-dd")
    return appointments.filter((apt) => apt.date === dateStr)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "tentative":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "cancelled":
        return "bg-red-500/20 text-red-300 border-red-500/30"
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/30"
    }
  }

  const nextWeek = () => setCurrentWeek(addWeeks(currentWeek, 1))
  const prevWeek = () => setCurrentWeek(subWeeks(currentWeek, 1))
  const today = () => setCurrentWeek(new Date())

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Calendar</h1>
          <p className="text-slate-400">Manage your appointments and schedule</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              New Appointment
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl bg-slate-800 border-slate-700 text-white">
            <DialogHeader>
              <DialogTitle>Schedule New Appointment</DialogTitle>
              <DialogDescription className="text-slate-400">Create a new appointment for a client</DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Client Name</Label>
                <Input className="bg-slate-700 border-slate-600 text-white" />
              </div>
              <div className="space-y-2">
                <Label>Phone</Label>
                <Input className="bg-slate-700 border-slate-600 text-white" />
              </div>
              <div className="space-y-2">
                <Label>Date</Label>
                <Input type="date" className="bg-slate-700 border-slate-600 text-white" />
              </div>
              <div className="space-y-2">
                <Label>Time</Label>
                <Select>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Duration (hours)</Label>
                <Select>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 hour</SelectItem>
                    <SelectItem value="1.5">1.5 hours</SelectItem>
                    <SelectItem value="2">2 hours</SelectItem>
                    <SelectItem value="3">3 hours</SelectItem>
                    <SelectItem value="4">4 hours</SelectItem>
                    <SelectItem value="5">5 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Deposit</Label>
                <Input type="number" placeholder="150" className="bg-slate-700 border-slate-600 text-white" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label>Tattoo Description</Label>
                <Textarea className="bg-slate-700 border-slate-600 text-white" />
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                Cancel
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Schedule Appointment</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Calendar Controls */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevWeek}
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextWeek}
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={today}
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                >
                  Today
                </Button>
              </div>
              <h2 className="text-xl font-semibold text-white">{format(currentWeek, "MMMM yyyy")}</h2>
            </div>
            <Select value={viewMode} onValueChange={setViewMode}>
              <SelectTrigger className="w-32 bg-slate-700 border-slate-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Week</SelectItem>
                <SelectItem value="day">Day</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Calendar Grid */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-0">
          {viewMode === "week" ? (
            <div className="grid grid-cols-8 min-h-[600px]">
              {/* Time column */}
              <div className="border-r border-slate-700">
                <div className="h-16 border-b border-slate-700 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-slate-400" />
                </div>
                {timeSlots.map((time) => (
                  <div
                    key={time}
                    className="h-16 border-b border-slate-700 flex items-center justify-center text-slate-400 text-sm"
                  >
                    {time}
                  </div>
                ))}
              </div>

              {/* Day columns */}
              {weekDays.map((day, dayIndex) => (
                <div key={dayIndex} className="border-r border-slate-700 last:border-r-0">
                  {/* Day header */}
                  <div className="h-16 border-b border-slate-700 flex flex-col items-center justify-center p-2">
                    <div className="text-slate-400 text-xs uppercase">{format(day, "EEE")}</div>
                    <div
                      className={`text-lg font-semibold ${
                        isSameDay(day, new Date()) ? "text-purple-400" : "text-white"
                      }`}
                    >
                      {format(day, "d")}
                    </div>
                  </div>

                  {/* Time slots */}
                  {timeSlots.map((time, timeIndex) => {
                    const dayAppointments = getAppointmentsForDate(day)
                    const slotAppointment = dayAppointments.find((apt) => apt.startTime === time)

                    return (
                      <div key={timeIndex} className="h-16 border-b border-slate-700 p-1 relative">
                        {slotAppointment && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <div
                                className={`absolute inset-1 rounded p-2 cursor-pointer border ${getStatusColor(slotAppointment.status)}`}
                              >
                                <div className="text-xs font-medium truncate">{slotAppointment.client}</div>
                                <div className="text-xs opacity-75 truncate">{slotAppointment.tattoo}</div>
                              </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl bg-slate-800 border-slate-700 text-white">
                              <DialogHeader>
                                <DialogTitle className="flex items-center space-x-3">
                                  <User className="w-5 h-5 text-purple-400" />
                                  <span>{slotAppointment.client}</span>
                                  <Badge className={getStatusColor(slotAppointment.status)}>
                                    {slotAppointment.status}
                                  </Badge>
                                </DialogTitle>
                                <DialogDescription className="text-slate-400">
                                  {format(parseISO(slotAppointment.date), "EEEE, MMMM d, yyyy")} •{" "}
                                  {slotAppointment.startTime} - {slotAppointment.endTime}
                                </DialogDescription>
                              </DialogHeader>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                  <div>
                                    <Label className="text-slate-400">Tattoo Design</Label>
                                    <p className="text-white font-medium">{slotAppointment.tattoo}</p>
                                  </div>
                                  <div>
                                    <Label className="text-slate-400">Style</Label>
                                    <div className="flex items-center space-x-2">
                                      <Palette className="w-4 h-4 text-purple-400" />
                                      <span className="text-white">{slotAppointment.style}</span>
                                    </div>
                                  </div>
                                  <div>
                                    <Label className="text-slate-400">Placement</Label>
                                    <div className="flex items-center space-x-2">
                                      <MapPin className="w-4 h-4 text-blue-400" />
                                      <span className="text-white">{slotAppointment.placement}</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="space-y-4">
                                  <div>
                                    <Label className="text-slate-400">Duration</Label>
                                    <div className="flex items-center space-x-2">
                                      <Clock className="w-4 h-4 text-green-400" />
                                      <span className="text-white">{slotAppointment.duration} hours</span>
                                    </div>
                                  </div>
                                  <div>
                                    <Label className="text-slate-400">Deposit</Label>
                                    <div className="flex items-center space-x-2">
                                      <DollarSign className="w-4 h-4 text-green-400" />
                                      <span className="text-white">${slotAppointment.deposit}</span>
                                    </div>
                                  </div>
                                  <div>
                                    <Label className="text-slate-400">Status</Label>
                                    <Badge className={getStatusColor(slotAppointment.status)}>
                                      {slotAppointment.status}
                                    </Badge>
                                  </div>
                                </div>
                              </div>

                              <div className="flex justify-end space-x-3 pt-4 border-t border-slate-700">
                                <Button variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                                  Reschedule
                                </Button>
                                <Button
                                  variant="outline"
                                  className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white bg-transparent"
                                >
                                  Cancel
                                </Button>
                                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                                  Edit Appointment
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        )}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          ) : (
            // Day view
            <div className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white">{format(selectedDate, "EEEE, MMMM d, yyyy")}</h3>
              </div>
              <div className="space-y-4">
                {getAppointmentsForDate(selectedDate).map((appointment) => (
                  <Card key={appointment.id} className="bg-slate-700/50 border-slate-600">
                    <CardContent className="pt-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-white">{appointment.startTime}</div>
                            <div className="text-sm text-slate-400">{appointment.duration}h</div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">{appointment.client}</h4>
                            <p className="text-slate-300">{appointment.tattoo}</p>
                            <p className="text-sm text-slate-400">
                              {appointment.style} • {appointment.placement}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                          <div className="text-right">
                            <div className="text-white font-medium">${appointment.deposit}</div>
                            <div className="text-sm text-slate-400">deposit</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {getAppointmentsForDate(selectedDate).length === 0 && (
                  <div className="text-center py-12">
                    <Calendar className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-400">No appointments scheduled for this day</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
