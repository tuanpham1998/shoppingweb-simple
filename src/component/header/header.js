import React from 'react';
import {Link} from 'react-router-dom';
import '../../style/header.css';
import logo2 from '../../images/logo2.png';
import Logres from './log-res';

const style= {
  textDecoration: 'none',
  color: 'white'
}

const style1 = {
  position: 'relative',
  zIndex: '999'
}

function Header() {
  return (
    <div className='header'>
        <div>
          <Link to='/'><img src={logo2} alt="" className='logo'/></Link>
        </div>
        <div className='container'>
            <input type="search" id='search' placeholder='search' />
            <button className="btn-find"><i className='fa fa-search'></i></button>
        </div>
        <Logres />
        <div className='menu'>
          <nav>
            <ul>
              <li>
                <Link to='/ao' style={style}>Áo</Link>
                <ul className='dropmenu' style={style1}>
                  <Link to='/ao-khoac'><li>Áo Khoác</li></Link>
                  <Link to='/ao-thun'><li>Áo Thun</li></Link>
                  <Link to='/ao-so-mi'><li>Áo sơ-mi</li></Link>
                </ul>
              </li>
              
              <li>
                <Link to='/quan' style={style}>Quần</Link>
                <ul className='dropmenu' style={style1}>
                  <Link to='/quan-jean'><li>Quần jean</li></Link>
                  <Link to='/quan-short'><li>Quần short</li></Link>
                </ul>
              </li>
              
              <li>
                <Link to='/giay' style={style}>Giày</Link>
              </li>
            
              <li>
                <Link to='/non' style={style}>Nón</Link>
              </li>
            </ul>
          </nav>
        </div>
    </div>
  );
}
export default Header;
