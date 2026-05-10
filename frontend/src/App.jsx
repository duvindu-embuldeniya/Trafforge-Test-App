import './assets/css/style.css'
// import Footer from './Components/Footer'
// import Header from './Components/Header'
import Main from './Components/Main'
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './Components/Register'
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
          </Routes>

        <Footer></Footer>

      </BrowserRouter>
    </>
  )
}

export default App
