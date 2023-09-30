'use client'
import '@ionic/react/css/core.css'
import { setupIonicReact } from '@ionic/react'
import React from 'react'
import Link from 'next/link'
import { IonButton } from '@ionic/react'

setupIonicReact()
export default function Signup(){
  return (
<main>

      <IonButton>
<Link href="/">
          Home
        </Link>
      </IonButton>
  Signup
  </main>
  )
}
