import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'
import Square from './Square'
import Board from './Board'
import Navbar from './Navbar'

function App() {

  
  return (
    <div>
      <Navbar/>
      <Board/>
    </div>
  )
}

export default App
