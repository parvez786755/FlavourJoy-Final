import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img 
          src="https://github.com/parvez786755/FlavoursJoy/blob/main/logooooo.png?raw=trnodeue" 
          alt="FlavorJoy Logo" 
          className="logo-image"
        />
      </div>
      <nav>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/recipes">Recipes</a></li>
          <li><a href="/contact">Contact</a></li>
          <li>
            <form className="search-bar">
              <input type="text" placeholder="Search recipes..." />
              <button type="submit">🔍</button>
            </form>
          </li>
          <li><a href="/registration1" className="login-button">Signin</a></li>
          <li><a href="/sign" className="login-button">SignUp</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
