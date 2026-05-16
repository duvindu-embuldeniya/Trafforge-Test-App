import './assets/css/style.css'
import MainComponent from './Components/MainComponent/MainComponent'
import { BrowserRouter,Routes,Route} from "react-router-dom"
import RegisterComponent from './Components/RegisterComponent/RegisterComponent'
import LoginComponent from './Components/LoginComponent/LoginComponent'
import HeaderComponent from './Components/HeaderComponent/HeaderComponent'
import FooterComponent from './Components/FooterComponent/FooterComponent'
import FrontStartComponent from './Components/FrontStartComponent/FrontStartComponent'
import FrontReadyComponent from './Components/FrontReadyComponent/FrontReadyComponent'
import FrontLiveComponent from './Components/FrontLiveComponent/FrontLiveComponent'

function App() {

  return (
    <>
      <BrowserRouter>

        <HeaderComponent></HeaderComponent>

          <Routes>
            <Route path='/' element={<MainComponent />} />

            <Route path='/register' element={<RegisterComponent />} />
            <Route path='/login' element={<LoginComponent />} />

            <Route path='/front_start' element={<FrontStartComponent />} />
            <Route path='/front_ready' element={<FrontReadyComponent />} />
            <Route path='/front_live' element={<FrontLiveComponent />} />
          </Routes>

        <FooterComponent></FooterComponent>

      </BrowserRouter>
    </>
  )
}

export default App
