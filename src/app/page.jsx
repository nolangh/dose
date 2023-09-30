import Image from 'next/image'
import Link from 'next/link'
import Button from "react-bootstrap/Button"

export default function Home() {
  return (
  <main> 
      <p>Home page</p>
        <button> 
        <Link href="/signup">
          Sign Up
          </Link>
        </button>

      <Button type="button" variant="outline-danger">
      <Link href="./login/">
      Login
      </Link>
      </Button>
    </main>
  )
}
