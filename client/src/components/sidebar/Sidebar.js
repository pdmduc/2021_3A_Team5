import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SidebarData from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';

function Sidebar() {
  const [slidebar, setSlidebar] = useState(false);

  const showSlidebar = () => setSlidebar(!slidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="sidebar">
          <Link to="#" className="sidebar-menu-bars">
            <FaIcons.FaBars onClick={showSlidebar} />
          </Link>
        </div>
        <nav
          className={slidebar ? 'sidebar-nav-menu active' : 'sidebar-nav-menu'}
        >
          <ul className="sidebar-nav-menu-items">
            <li className="sidebar-navbar-toggle">
              <Link to="#" className="sidebar-menu-bars">
                <AiIcons.AiOutlineClose onClick={showSlidebar} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index}>
                  <button className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
