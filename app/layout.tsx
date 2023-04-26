import './globals.css'

export const metadata = {
  title: 'Shoes CRUD Application',
  description: 'simple crud app using next.js, prisma, postgres',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
