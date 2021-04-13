import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Sidebar from '../sidebar/Sidebar';

class Navbar extends Component {
  state = { clicked: false };

  render() {
    return (
      <nav className="NavbarItems">
        <div className="menu-icon">
          <Sidebar />
          <button className="nav-logo" href={'/login'}>
            <Logo />
          </button>
        </div>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <button className={item.cName} href={item.url}>
                  {item.title}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
