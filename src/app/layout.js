
'use client';
import './globals.css'
import { useEffect } from 'react';


export default function RootLayout({ children }) {
  useEffect(() => {
  }, []);
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  )
}

