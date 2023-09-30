'use client'
import '@ionic/react/css/core.css'
import { setupIonicReact } from '@ionic/react'
import React from 'react'
import Link from 'next/link'
import { IonButton } from '@ionic/react'

setupIonicReact()

export default function Login(){
  return (
  <main>
  <p>Login page</p>

      <IonButton>
      <Link href="/">Home</Link>
      </IonButton>
  </main>
)
}
