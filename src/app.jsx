import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Card from './components/cards'

export function App() {
    
  
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '>Tailwind test</h1>
      <Card username="chaiaurcode"    />
      <Card username="Suyash"/>


    </>
  )
}
