import './App.css'
import Mainpage from './Mainpage/Mainpage'
import Navbar from './Navbar/Navbar'
import Roadmap from './Roadmap/Roadmap'

function App() {

  return (
    <div>
      <Navbar/>
      <div className="App">
      <Mainpage/>
      <Roadmap/>
      </div>
    </div>
  )
}

export default App
