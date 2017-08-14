import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

const sideNavlinks = [
  {
    isExact: true,
    linkTo: '/',
    text: 'RingLeader',
    customClass: 'sideNavHeader'
  },
  { isExact: true, linkTo: '/', text: 'Home', customClass: 'sideNavItem' },
  {
    isExact: false,
    linkTo: '/locations',
    text: 'Locations',
    customClass: 'sideNavItem'
  },
]

class Sidebar extends Component {
  render() {
    return (
    	          <div id="sidebar">
            <div className="inner">

  
                <section id="search" className="alt">
                  <form method="post" action="#">
                    <input type="text" name="query" id="query" placeholder="Search" />
                  </form>
                </section>


                <nav id="menu">
                  <header className="major">
                    <h2>RingLeader</h2>
                  </header>
                  <ul>
                  	      <NavLink
          activeClassName='active'
        
        to='/'
        >
        <li>Home</li>
        </NavLink>
                     	      <NavLink
          activeClassName='active'
        
        to='/locations'
        >
        <li>Locations</li>
        </NavLink>
                    
                    
                  </ul>
                </nav>

                <footer id="footer">
                  <p className="copyright">&copy; Untitled. All rights reserved. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
                </footer>

            </div>
          </div>
        );
  }
}

export default Sidebar;