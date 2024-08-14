import React from 'react';
import './style.css';

class Header extends React.Component{
  render() {
    return (
      <header className="header">
        <div className='div'>
          <nav className='nav'>
            <ul className='ul'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About us</a></li>
              <li><a href='#'>Products</a></li>
              <li><a href='#'>Service</a></li>
              <li><a href='#'>Contuct Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
