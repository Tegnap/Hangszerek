import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { ListPage } from './ListPage'
import { Egy } from './Egy'
import {Uj} from './Uj'



import './App.css'

export const App = () => {


  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'}>
              <span className="nav-link">Hangszerek</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/uj'}>
              <span className="nav-link">Új hangszer</span></NavLink>
            </li>
          </ul>
        </div>
      </nav>


      <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/egy" element={<Egy />} />
            <Route path="/uj" element={<Uj />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
