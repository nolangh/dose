
  'use client'
import '@ionic/react/css/core.css'
import { setupIonicReact } from '@ionic/react'
import React from 'react'
import Link from 'next/link'
import { IonButton } from '@ionic/react'

setupIonicReact()

export default function Home() {
  return (
  <main> 
      <p>Home page</p>
        <IonButton> 
        <Link href="/signup">
          Sign Up
          </Link>
        </IonButton>

      <IonButton>
      <Link href="./login/">
      Login
      </Link>
      </IonButton>
    </main>
  )
}
