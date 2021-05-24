import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Random from './pages/Random'

function App () {
  return (
    <Router>
      <div className='App'>
        <main className='card'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/search' component={Search} />
            <Route path='/random' component={Random} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
