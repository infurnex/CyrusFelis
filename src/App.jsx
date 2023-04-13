import About from './About/About'
import './App.css'
import Mainpage from './Mainpage/Mainpage'
import Navbar from './Navbar/Navbar'
import Story from './Story/Story'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Whiteboard from './Whiteboard/Whiteboard'
import FAQ from './FAQ/faq'

function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Mainpage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/story" element={<Story/>} />
        <Route path='/whiteboard' element={<Whiteboard/>}/>
        <Route path='/faq' element={<FAQ/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
