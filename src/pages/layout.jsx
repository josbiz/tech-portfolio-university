import Link from 'next/link'

export default function Layout({ children }) {
  const header = (
    <header>
      <div>
        <Link href="/">
          <h1>MD Blog with nextjs</h1>
        </Link>
        <p>Welcome to the blog</p>
        <br />
      </div>
    </header>
  )
  const footer = (
    <footer>
      <div>
        <p>Hecho por mi</p>
        <br />
      </div>
    </footer>
  )

  return (
    <>
      {header}
      <main>{children}</main>
      {footer}
    </>
  )
}
