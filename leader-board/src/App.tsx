
import './App.css'
import CompetitorCard from './components/competitor-card/CompetitorCard'
import { foxDemo, wolfDemo } from './models/models'
// import api from '../src/api'
// const allCompetitors = api.getAllCompetitors()
const allCompetitors = [foxDemo,wolfDemo,foxDemo,wolfDemo]

function App() {
  return (
    <>
      <h1>Leader Board</h1>
      <div className='cards-container'>
        {
          allCompetitors.map((competitor) => (
            <CompetitorCard competitor={competitor} />
            
          ))
        }
      </div>
    </>
  )
}

export default App
