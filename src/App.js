import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Random from './pages/Random'
// import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'

function App () {
  return (
    <Router>
      <div className='App'>
        <Sidebar />
      </div>
    </Router>
  )
}

export default App
