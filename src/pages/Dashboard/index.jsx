
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { hiredPeople } = props

  const [people, setPeople] = useState([])

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard
