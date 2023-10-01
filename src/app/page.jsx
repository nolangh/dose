  'use client'
import React from 'react'
import Link from 'next/link'

setupIonicReact()

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
