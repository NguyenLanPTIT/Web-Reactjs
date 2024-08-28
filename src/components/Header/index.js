import React from 'react';
import { Link } from 'react-router-dom';

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Logo from "../../image/logo.webp";
import "./header.scss";
function Header() {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <div className="header">
        <div className='content'>
        <div className="nav">
          <div className='container-nav'>
          <div className="nav__img">
            <Link className="image" to="/">
              <img src={Logo}alt="phimmoi"></img>
            </Link>
          </div>
          <ul className="nav__menu">
            <li><Link className='link-title' to="/movies">PHIMMOI</Link></li>
            <li><Link className='link-title' to="/categories/phim-le">PHIM LẺ</Link></li>
            <li><Link className='link-title' to="/categories/phim-bo">PHIM BỘ</Link></li>
            <li><Link className='link-title' to="/categories/phim-le">THỂ LOẠI</Link></li>
            <li><Link className='link-title' to="/categories/phim-le">QUỐC GIA</Link></li>
            <li><Link className='link-title' to="/categories/phim-le">NĂM PHÁT HÀNH</Link></li>
            <li><Link className='link-title' to="/categories/phim-chieu-rap">PHIM CHIẾU RẠP</Link></li>
            <li><Link className='link-title' to="/categories/phim-le">TRAILER</Link></li>
            <li><Link className='vip link-title' to="/categories/phim-le">TOP PHIM</Link></li>


          </ul>
          </div>
          <form className="nav__search" action='tim-kiem/'>
            <input  placeholder="Tìm tên phim, diễn viên..."
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            >
            </input>
            <FaSearch className="nav__search__icons" />
          </form>
        </div>
        </div>
      

      </div >
    </>
  )
}

export default Header