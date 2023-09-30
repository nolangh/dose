import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { IonButton } from '@ionic/react'

export default function Home() {
  return (
  <main> 
      <p>Home page</p>
        <button> 
        <Link href="/signup">
          Sign Up
          </Link>
        </button>

      <IonButton>
      <Link href="./login/">
      Login
      </Link>
      </IonButton>
    </main>
  )
}
