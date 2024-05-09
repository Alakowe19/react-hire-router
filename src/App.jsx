import { useState } from 'react'
import PeopleList from './pages/Dashboard/components/PeopleList'
import HireForm from './pages/PersonProfile/components/HireForm'
import './App.css'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const handleHire  = (newPerson) => {
    setHiredPeople([...hiredPeople, newPerson])
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <HireForm onHire={handleHire}/>
        <nav>
          <ul>
            <li>Dashboard</li>
            <PeopleList people={hiredPeople}/>
          </ul>
        </nav>
      </header>
    </>
  )
}
