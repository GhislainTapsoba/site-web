import type { Metadata } from 'next'
import { Poppins, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: "--font-poppins"
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: 'Deep-Technologies | Solutions IT & Innovation Digitale',
  description: 'Deep-Technologies - Votre partenaire technologique au Burkina Faso. Support utilisateurs, développement web & mobile, solutions de centre d\'appel et infogérance.',
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
