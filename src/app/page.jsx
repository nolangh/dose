import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import signup from "./signup/page.jsx"
import Login from "./login/page.jsx"

export default function Home() {
  return (
  <main> 
      <p>Home page</p>
        <button> 
        <Link href="/signup">
          Sign Up
          </Link>
        </button>

      <button>
      <Link href="./login/">
      Login
      </Link>
      </button>
    </main>
  )
}
