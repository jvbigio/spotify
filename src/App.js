import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

import Home from './pages/Home'
import Search from './pages/Search'
import Random from './pages/Random'
import Sidebar from './components/Sidebar'

function App () {
  return (
    <Router>
      <div className='App'>
        <div className='wrapper'>
          <Sidebar />
          <main className='content'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/search' component={Search} />
              <Route path='/random' component={Random} />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
