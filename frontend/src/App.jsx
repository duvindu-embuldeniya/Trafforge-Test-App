import './assets/css/style.css'
import Main from './Components/Main'
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './Components/Register'
import Login from './Components/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import FrontStart from './components/FrontStart'
import FrontReady from './components/FrontReady'
import FrontLive from './components/FrontLive'

function App() {

  return (
    <>
      <BrowserRouter>

        <Header></Header>

          <Routes>
            <Route path='/' element={<Main />} />

            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />

            <Route path='/front_start' element={<FrontStart />} />
            <Route path='/front_ready' element={<FrontReady />} />
            <Route path='/front_live' element={<FrontLive />} />
          </Routes>

        <Footer></Footer>

      </BrowserRouter>
    </>
  )
}

export default App
