import Navbar from "@/components/navbar"

import "@/styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <>
          <Navbar />
          {children}
        </>
      </body>
    </html>
  )
}
