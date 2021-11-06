import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import NewLeads from 'components/NewLeads'
//import SingUp from 'components/SingUp'

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <NewLeads />
      </div>
      <Footer />
    </>
  )
}

export default App
