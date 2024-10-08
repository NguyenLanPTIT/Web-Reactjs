import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Logo from "../../image/logo.webp";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";

import "./header.scss";
import "./responsive.scss";
function Header() {
  const [inputValue, setInputValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const toggleSubMenu = (index) => {
    if (activeSubMenu === index) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(index);
    }
  };
  return (
    <>
      <div className="header">
        <div className="content-header">
          <div className="nav">
            <div className="container-nav">
              <div className="nav__img">
                <Link className="image" to="/">
                  <img src={Logo} alt="phimmoi"></img>
                </Link>
              </div>
              <ul className="nav__menu">
                <li>
                  <Link className="link-title" to="/movies">
                    PHIMMOI
                  </Link>
                </li>
                <li>
                  <Link className="link-title" to="/categories/phim-le">
                    PHIM LẺ
                  </Link>
                </li>
                <li>
                  <Link className="link-title" to="/categories/phim-bo">
                    PHIM BỘ
                  </Link>
                </li>
                <li>
                  <div className="link-title">THỂ LOẠI</div>
                  <ul className="sub-menu span-6">
                    <li className="sub-menu-link">Phim Hành Động</li>
                    <li className="sub-menu-link">Phim Võ Thuật</li>

                    <li className="sub-menu-link">Phim Tình Cảm</li>

                    <li className="sub-menu-link">Phim Hoạt Hình</li>

                    <li className="sub-menu-link">Phim Hài Hước</li>

                    <li className="sub-menu-link">Phim Viễn Tưởng</li>

                    <li className="sub-menu-link">Phim Cổ Trang</li>

                    <li className="sub-menu-link">Phim Phiêu Lưu</li>

                    <li className="sub-menu-link">Phim Tâm Lý</li>

                    <li className="sub-menu-link">Phim Khoa Học</li>

                    <li className="sub-menu-link">Phim Hình Sự</li>

                    <li className="sub-menu-link">Phim Ma - Kinh Dị</li>

                    <li className="sub-menu-link">Phim Chiến Tranh</li>

                    <li className="sub-menu-link">Phim Âm Nhạc</li>

                    <li className="sub-menu-link">Phim Thể Thao</li>

                    <li className="sub-menu-link">Phim Thần Thoại</li>

                    <li className="sub-menu-link">Game show</li>

                    <li className="sub-menu-link">Phim Truyền Hình</li>

                    <li className="sub-menu-link">Phim Chiếu Rạp</li>

                    <li className="sub-menu-link"> Phim Anime</li>

                    <li className="sub-menu-link">Phim Sắp Chiếu</li>

                    <li className="sub-menu-link">Phim Thuyết Minh</li>
                  </ul>
                </li>
                <li>
                  <div className="link-title">QUỐC GIA</div>

                  <ul className="sub-menu">
                    {" "}
                    <li className="sub-menu-link">Phim Trung Quốc</li>
                    <li className="sub-menu-link">Phim Hàn Quốc</li>
                    <li className="sub-menu-link">Phim Nhật Bản</li>
                    <li className="sub-menu-link">Phim Âu Mỹ</li>
                    <li className="sub-menu-link">Phim Thái Lan</li>
                    <li className="sub-menu-link">Phim Đài Loan</li>
                    <li className="sub-menu-link">Phim Tổng Hợp</li>
                    <li className="sub-menu-link">Phim Hồng Kông</li>
                    <li className="sub-menu-link">Phim Ấn Độ</li>
                  </ul>
                </li>
                <li>
                  <div className="link-title">NĂM PHÁT HÀNH</div>

                  <ul className="sub-menu">
                    {" "}
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p className="sub-menu-link">Phim 2024</p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p className="sub-menu-link">Phim 2023</p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p className="sub-menu-link">Phim 2022</p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p className="sub-menu-link">Phim 2021</p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p className="sub-menu-link">Phim 2020</p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p className="sub-menu-link">Phim 2019</p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p className="sub-menu-link">Phim 2018</p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p className="sub-menu-link">Phim 2017</p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p className="sub-menu-link">Phim 2016</p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p className="sub-menu-link">Phim 2015</p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p className="sub-menu-link">Phim 2014</p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p className="sub-menu-link">Phim 2013</p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p className="sub-menu-link">Phim 2012</p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p className="sub-menu-link">Phim 2011</p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p className="sub-menu-link">Phim 2010</p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p className="sub-menu-link">Phim 2009</p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p className="sub-menu-link">Phim 2008</p>{" "}
                    </li>
                    <li>
                      <span className="icon"></span>{" "}
                      <p className="sub-menu-link">Phim trước 2007</p>{" "}
                    </li>{" "}
                  </ul>
                </li>
                <li>
                  <Link className="link-title" to="/categories/phim-chieu-rap">
                    PHIM CHIẾU RẠP
                  </Link>
                </li>
                <li>
                  <Link className="link-title" to="/categories/phim-sap-chieu">
                    TRAILER
                  </Link>
                </li>
                <li>
                  <div className="vip link-title">TOP PHIM</div>
                  <ul className="sub-menu">
                    <li title="Phim top imdb">Top IMDB</li>{" "}
                    <li title="Phim hot">Phim hot</li>{" "}
                    <li title="Phim Netflix">Phim Netflix</li>{" "}
                    <li title="Phim DC Comic">Phim DC Comic</li>{" "}
                    <li title="Phim Marvel">Phim Marvel</li>{" "}
                    <li title="Phim HD">Phim HD</li>{" "}
                  </ul>
                </li>
              </ul>
            </div>
            <div className="nav__search" action="tim-kiem/">
              <input
                placeholder="Tìm tên phim, diễn viên..."
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              ></input>
              <FaSearch className="nav__search__icons" />
            </div>
          </div>
        </div>
        <div className="mobile-header">
          {" "}
          {isMenuOpen ? (
            <IoClose
              className="menu-toggle"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <TiThMenu
              className="menu-toggle"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
          <div className="nav__img">
            <Link className="image" to="/">
              <img src={Logo} alt="phimmoi"></img>
            </Link>
          </div>
          {isSearchOpen ? (
            <div className="menu-toggle1">  
            < IoClose
            onClick={() => setIsSearchOpen(false)}
          /></div>
           
          ) : (
            <FaSearch
              className="menu-toggle"
              onClick={() => setIsSearchOpen(true)}
            />
          )}
         
        </div>
        {isMenuOpen && (
          <div className={`menu-mobile ${isMenuOpen ? "menu-active" : ""}`}>
            <ul className="nav__menu">
              <li>
                <Link className="link-title" to="/movies" onClick={() => setIsMenuOpen(false)}>
                  PHIMMOI
                </Link>
              </li>
              <li>
                <Link className="link-title" to="/categories/phim-le" onClick={() => setIsMenuOpen(false)}>
                  PHIM LẺ
                </Link>
              </li>
              <li>
                <Link className="link-title" to="/categories/phim-bo" onClick={() => setIsMenuOpen(false)}>
                  PHIM BỘ
                </Link>
              </li>
              <li>
                <div className="link-title" onClick={() => toggleSubMenu(0)}>
                  THỂ LOẠI
                  {activeSubMenu === 0 ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </li>
              <ul className={`sub-menu ${activeSubMenu === 0 ? "open" : ""}`}>
                <li className="sub-menu-link">
                  <span>Phim Hành Động</span>
                </li>
                <li className="sub-menu-link">
                  <span>Phim Võ Thuật</span></li>

                <li className="sub-menu-link">
                  <span> Phim Tình Cảm</span>
                </li>

                <li className="sub-menu-link">
                  <span>  Phim Hoạt Hình</span>
                 </li>

                <li className="sub-menu-link">
                  <span>Phim Hài Hước </span>
                  </li>

                <li className="sub-menu-link">
                  <span>Phim Viễn Tưởng </span>
                  </li>

                <li className="sub-menu-link">
                  <span>Phim Cổ Trang </span>
                  </li>

                <li className="sub-menu-link">
                  <span>Phim Phiêu Lưu </span>
                  </li>

                <li className="sub-menu-link">
                  <span>Phim Tâm Lí</span>
                  </li>

                <li className="sub-menu-link">
                  <span>Phim Khoa Học </span>
                  </li>

                <li className="sub-menu-link">
                  <span>Phim Hình Sự</span>
                 </li>

                <li className="sub-menu-link">
                 <span>Phim Kinh Dị</span></li>

                <li className="sub-menu-link">
                  <span>Phim Chiến Tranh </span>
                  </li>

                <li className="sub-menu-link">
                  <span>Phim Âm Nhạc</span>
                  </li>

                <li className="sub-menu-link">
                  <span>Phim Thể Thao </span>
                  </li>

                <li className="sub-menu-link">
                  <span>Phim Thần Thoại </span>
                  </li>

                <li className="sub-menu-link">
                  <span>Gam Shows</span>
                  </li>

                <li className="sub-menu-link">
                  <span>Phim Truyền Hình </span>
                  </li>

                <li className="sub-menu-link">
                  <span>Phim Chiếu Rạp </span>
                  </li>

                <li className="sub-menu-link">
                  <span> Phim Anime</span>
                  </li>

                <li className="sub-menu-link">
                  <span>Phim Sắp Chiếu </span>
                  </li>

                <li className="sub-menu-link">
                  <span>Phim Thuyết Minh </span>
                  </li>
              </ul>
              <li>
                <div className="link-title" onClick={() => toggleSubMenu(1)}>
                  QUỐC GIA
                  {activeSubMenu === 1 ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </li>
              <ul className={`sub-menu ${activeSubMenu === 1 ? "open" : ""}`}>
                {" "}
                <li className="sub-menu-link">
                  <span>Phim Trung Quốc</span>
                </li>
                <li className="sub-menu-link">
                  <span>Phim Hàn Quốc</span>
                </li>
                <li className="sub-menu-link">
                  <span>Phim Nhật Bản</span>
                </li>
                <li className="sub-menu-link">
                  <span>Phim Âu Mỹ</span>
                </li>
                <li className="sub-menu-link">
                  <span>Phim Thái Lan</span>
                </li>
                <li className="sub-menu-link">
                  <span>Phim Đài Loan</span>
                </li>
                <li className="sub-menu-link">
                  <span>Phim Tổng Hợp</span>
                </li>
                <li className="sub-menu-link">
                  <span>Phim Hồng Kông</span>
                </li>
                <li className="sub-menu-link">
                  <span>Phim Ấn Độ</span>
                </li>
              </ul>
              <li>
                <div className="link-title" onClick={() => toggleSubMenu(2)}>
                  NĂM PHÁT HÀNH
                  {activeSubMenu === 2 ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </li>
              <ul className={`sub-menu ${activeSubMenu === 2 ? "open" : ""}`}>
                {" "}
                <li className="sub-menu-link">
                  <span>Phim 2024</span></li>{" "}
                <li className="sub-menu-link">
                  <span>Phim 2023</span></li>{" "}
                <li className="sub-menu-link">
                  <span>Phim 2022</span></li>{" "}
                <li className="sub-menu-link">
                  <span>Phim 2021</span></li>{" "}
                <li className="sub-menu-link">
                  <span>Phim 2020</span></li>{" "}
                <li className="sub-menu-link">
                  <span>Phim 2019</span></li>{" "}
                <li className="sub-menu-link">
                  <span>Phim 2018</span></li>{" "}
                <li className="sub-menu-link">
                  <span>Phim 2017</span></li>{" "}
                <li className="sub-menu-link">
                  <span>Phim 2016</span></li>{" "}
                <li className="sub-menu-link">
                  <span>Phim 2015</span></li>{" "}
                <li className="sub-menu-link">
                  <span>Phim 2014</span></li>{" "}
                <li className="sub-menu-link">
                  <span>Phim 2013</span></li>{" "}
                <li className="sub-menu-link">
                  <span>Phim 2012</span></li>{" "}
                <li className="sub-menu-link">
                  <span>Phim 2011</span></li>{" "}
                <li className="sub-menu-link">
                  <span>Phim 2010</span></li>{" "}
                <li className="sub-menu-link">
                  <span>Phim 2009</span></li>{" "}
                <li className="sub-menu-link">
                  <span>Phim 2008</span></li>{" "}
                <li className="sub-menu-link">
                  <span>Phim trước 2007</span></li>{" "}
              </ul>
              <li>
                <Link className="link-title" to="/categories/phim-chieu-rap" onClick={() => setIsMenuOpen(false)}>
                  PHIM CHIẾU RẠP
                </Link>
              </li>
              <li>
                <Link className="link-title" to="/categories/phim-sap-chieu" onClick={() => setIsMenuOpen(false)}>
                  TRAILER
                </Link>
              </li>
              <li>
                <div className="link-title" onClick={() => toggleSubMenu(3)}>
                  TOP PHIM
                  {activeSubMenu === 3 ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </li>
              <ul className={`sub-menu ${activeSubMenu === 3 ? "open" : ""}`}>
                <li className="sub-menu-link"  >
                  <span>Top IMDB</span>
                </li>
                <li className="sub-menu-link" >
                  <span>Phim hot</span>
                </li>
                <li className="sub-menu-link" >
                  <span>Phim Netflix</span>
                </li>
                <li className="sub-menu-link"  >
                  <span>Phim DC Comic</span>
                </li>
                <li className="sub-menu-link" >
                  <span>Phim Marvel</span>
                </li>
                <li className="sub-menu-link" >
                  <span>Phim HD</span>
                </li>
              </ul>
            </ul>
          </div>
        )}

        {isSearchOpen && (
          <div className="mobile-search-bar">
            <form className="mobile-search-form">
            <input
              name="keyword"
              id="keyword"
              value={inputValue}
              type="text"
              placeholder="Tìm kiếm..."
              onChange={(e) => setInputValue(e.target.value)}
            /> </form>
           
          
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
