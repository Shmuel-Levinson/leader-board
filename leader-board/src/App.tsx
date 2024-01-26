
import './App.css'
import CompetitorCard from './components/competitor-card/CompetitorCard'
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
