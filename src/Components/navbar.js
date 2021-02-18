import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Navbar, li, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Home from './Home';
import Features from './Features';
import Login from './Login';
import Register from './Register';
import './navbar.css';



function navbar(props) {
    return (
        <div>
           <Router>
            <Navbar className="box" bg="light" expand="lg">
                <Navbar.Brand  className="logo" href="#home">Fit To Fly</Navbar.Brand>
                    <ul className="list">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/features">Features</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
            </Navbar>

            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/features">
                    <Features />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                <Register />
            </Route>
            </Switch>
            </Router>
        </div>
    );
}

export default navbar;



// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }