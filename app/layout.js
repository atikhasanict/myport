import './globals.css'

export const metadata = {
  title: 'Atik - Portfolio',
  description: 'Beginner Web Developer | Next.js & Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
