import React from 'react'

import './globals.css'

export const metadata = {
  title: 'Spotify | Home',
  description: 'Listen to Spotify music',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="pt-BR">
    <body className="bg-zinc-900 text-zinc-50">{children}</body>
  </html>
)

export default RootLayout
