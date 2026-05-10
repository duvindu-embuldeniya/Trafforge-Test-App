import './assets/css/style.css'
import Main from './Components/Main'
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './Components/Register'
import Login from './Components/Login'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>

        <Header></Header>

          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>

        <Footer></Footer>

      </BrowserRouter>
    </>
  )
}

export default App
