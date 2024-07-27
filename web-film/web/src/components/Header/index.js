import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./header.scss";
function Header() {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <div className="header">
        <div className="nav">
          <div className="nav__img">
            <a href="https://phimmoichillv.net" title="Phim mới">
            <img src="https://phimmoichillv.net/dev/images/logo.png" alt="phimmoi"></img>
            </a>
          </div>
          <div className="nav__menu">
            <li>
              <a href="#">PHIMMOI</a>
            </li>
            <li>
              <a href="#">PHIM LẺ</a>
            </li>
            <li>
              <a href="#">PHIM BỘ</a>
            </li>
            <li>
              <a href="#">THỂ LOẠI</a>
            </li>
            <li>
              <a href="#">QUỐC GIA</a>
            </li>
            <li>
              <a href="#">NĂM PHÁT HÀNH</a>
            </li>
            <li>
              <a href="#">PHIM CHIẾU RẠP</a>
            </li>
            <li>
              <a href="#">TRAILER</a>
            </li>
            <li>
              <a href="#">TOP PHIM</a>
            </li>
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
      </div>
    </>
  )
}

export default Header