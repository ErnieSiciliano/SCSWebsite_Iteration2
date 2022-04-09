import React from 'react';
import './style.css';
// import data from './data';
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ItemPage from './Pages/ItemPage';


function App() {
  const showMenu = () => {
    document.querySelector('.side-menu').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.side-menu').classList.remove('open');
  };

  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className='header'>
        <div className="home">
            <button onClick={showMenu}>
               &#9776; 
            </button> 
            <Link to="/" >Sports Store</Link>
            {/* <a href="index.html"> Sports Store </a>  */}
        </div>
        <div className="header-links"> 
            <a href="AboutUs.html"> About Us </a>
            <a href="login.html"> Login </a>
            <a href="cart.html"> Cart </a>  
             
        </div>                      
        </header>
      
    <aside className="side-menu"> 
        <button onClick={closeMenu}>
            X Close Menu
         </button> 
        <h2>Leagues</h2>
        <ul>
            <li>
                <a href="index.html">Premier League </a>
            </li>
            <li>
                <a href="index.html">Bundesliga </a>
            </li>
            <li>
                <a href="index.html">La Liga </a>
            </li>
        </ul>
    </aside>
        <main className="main"> 
            <div className="content">
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/item/:slug" element={<ItemPage />} /> 
            </Routes>
            
            </div>
        </main>
    
    <footer className="footer">
        This is a footer!
    </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
