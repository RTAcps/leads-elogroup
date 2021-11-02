import Footer from 'components/Footer'
import NavBar from 'components/NavBar'
import SingUp from 'components/SingUp'

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <SingUp />
      </div>
      <Footer />
    </>
  )
}

export default App
