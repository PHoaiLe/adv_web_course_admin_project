import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  )
}
