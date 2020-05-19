import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

function Nav() {
  return (
    <nav className='menu'>
        <ul>
            <Link to='/app'><li>Ao</li></Link>
            <Link to='/test'><li>Quan</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;
