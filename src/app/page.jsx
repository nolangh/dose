import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
      <main>
      <p>Home page</p>
      <p>Test for prettier</p>
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
