export const metadata = {
  title: 'Auth with cookie',
  description: 'Firebase Authentication with cookie and Next.js App Router',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  )
}
