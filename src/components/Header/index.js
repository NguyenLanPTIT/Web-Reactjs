import React from 'react';
import { Link } from 'react-router-dom';

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./header.scss";
function Header() {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <div className="header">
        <div className="nav">
          <div className='nav-content'>
            <div className="nav__img">
              <Link className="image" to="/">
                <img src="https://phimmoichillv.net/dev/images/logo.png" alt="phimmoi"></img>
              </Link>
            </div>
            <ul className="nav__menu">
              <li><Link to="/movies">PHIMMOI</Link></li>
              <li><Link to="/categories/phim-le">PHIM LẺ</Link></li>
              <li><Link to="/categories/phim-bo">PHIM BỘ</Link></li>
              <li><Link to="/categories/phim-le">THỂ LOẠI</Link></li>
              <li><Link to="/categories/phim-le">QUỐC GIA</Link></li>
              <li><Link to="/categories/phim-le">NĂM PHÁT HÀNH</Link></li>
            </ul>
          </div>
          <div className="nav__search">
            <input placeholder="Tìm tên phim, diễn viên..."

              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            >
            </input>
            <FaSearch className="nav__search__icons" />
          </div>
        </div>
      </div >
    </>
  ) 
}

export default Header