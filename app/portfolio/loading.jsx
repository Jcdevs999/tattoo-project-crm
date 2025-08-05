import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function PortfolioLoading() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section Skeleton */}
      <div className="relative bg-gradient-to-r from-purple-900/50 to-pink-900/50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Skeleton className="h-16 w-96 mx-auto mb-4 bg-slate-700" />
          <Skeleton className="h-6 w-2/3 mx-auto mb-8 bg-slate-700" />
          <div className="flex flex-wrap justify-center gap-4">
            <Skeleton className="h-6 w-32 bg-slate-700" />
            <Skeleton className="h-6 w-32 bg-slate-700" />
            <Skeleton className="h-6 w-32 bg-slate-700" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters Skeleton */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <Skeleton className="flex-1 h-10 bg-slate-700" />
              <Skeleton className="w-full lg:w-48 h-10 bg-slate-700" />
              <Skeleton className="w-full lg:w-48 h-10 bg-slate-700" />
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} className="bg-slate-800/50 border-slate-700 overflow-hidden">
              <Skeleton className="w-full h-64 bg-slate-700" />
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Skeleton className="h-5 w-20 bg-slate-700" />
                  <Skeleton className="h-4 w-12 bg-slate-700" />
                </div>
                <Skeleton className="h-6 w-full mb-2 bg-slate-700" />
                <div className="flex items-center justify-between mb-3">
                  <Skeleton className="h-4 w-16 bg-slate-700" />
                  <Skeleton className="h-4 w-20 bg-slate-700" />
                </div>
                <Skeleton className="h-10 w-full bg-slate-700" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Artist Section Skeleton */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Skeleton className="h-8 w-48 mb-4 bg-slate-700" />
                <Skeleton className="h-4 w-full mb-2 bg-slate-700" />
                <Skeleton className="h-4 w-full mb-2 bg-slate-700" />
                <Skeleton className="h-4 w-3/4 mb-6 bg-slate-700" />
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="text-center p-4 bg-slate-700/30 rounded-lg">
                      <Skeleton className="h-8 w-12 mx-auto mb-2 bg-slate-700" />
                      <Skeleton className="h-4 w-20 mx-auto bg-slate-700" />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Skeleton className="h-6 w-40 mb-4 bg-slate-700" />
                <div className="space-y-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <Skeleton className="w-5 h-5 bg-slate-700" />
                      <div className="flex-1">
                        <Skeleton className="h-4 w-full mb-1 bg-slate-700" />
                        <Skeleton className="h-3 w-2/3 bg-slate-700" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
