import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './navBar.css'
import Books from './Books'
import Comments from './Comments'
import Home from './Home'

function Nav() {
  return (
    <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/book'>Your Books</Link></li>
                        <li><Link to='/comments'>Book Review</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/book' Component={Books} />
                    <Route path='/comments' Component={Comments} />
                </Routes>
            </div>
        </Router>
  )
}

export default Nav