import { Poppins } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins( {
  subsets: [ "latin" ],
  weight: [ "400",  "700" ],
  variable: "--font-poppins",
 })

export const metadata = {
  title: "InkFlow - Tattoo Booking & CRM",
  description: "Professional tattoo booking and client management system",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
