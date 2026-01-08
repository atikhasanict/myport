import './globals.css'
import { ClientWrapper } from './ClientWrapper'

export const metadata = {
  title: 'Atik - Portfolio',
  description: 'Beginner Web Developer | Next.js & Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  )
}
