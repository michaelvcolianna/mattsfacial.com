import './index.css'

export const metadata = {
  title: 'Matt Gives Himself A FACIAL!!Create Next App',
  robots: 'noai, noimageai'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
