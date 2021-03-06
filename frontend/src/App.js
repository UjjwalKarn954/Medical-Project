//import logo from './logo.svg';
import './App.css';
import './index.css';
import {BrowserRouter, Route,Switch, Link,useParams} from 'react-router-dom';
import React from 'react';

import {useRoutes,A} from 'hookrouter';
import routes from './router'

function App() {

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <A href='/'>PharmaShop</A>
      </div>
      <div className="header-links">
        <Link to="cart.html">Cart</Link>
        <Link to="signin.html">Sign In</Link>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <Link to="index.html">Homeopathic</Link>
        </li>

        <li>
            <Link to="index.html">Alopathic</Link>
          </li>
          
          <li>
            <Link to="index.html">Aurvadhic</Link>
          </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
{useRoutes(routes)}        
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
