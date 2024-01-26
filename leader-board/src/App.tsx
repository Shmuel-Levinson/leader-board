import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompetitorCard from './components/competitor-card'
import { demoCompetitor } from './models/models'

function App() {

  return (
    <>
      <h1>Leader Board</h1>
      <CompetitorCard competitor={demoCompetitor} />
    </>
  )
}

export default App
