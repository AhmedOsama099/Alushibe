import React from "react";
import { Metadata} from "next";

// Import global styles
import "@/styles/globals.css"

export const metadata : Metadata = {
  title: {
    template: '%s | Alushibe',
    default: "Alushibe - Home",
  },
  description: "Alushibe Company LLC",
  icons: ['/logo.ico'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
