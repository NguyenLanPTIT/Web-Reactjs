import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Logo from "../../image/logo.webp";
import "./header.scss";
function Header() {
  const [inputValue, setInputValue] = useState("");
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
                  <Link className="link-title" to="/">
                    THỂ LOẠI
                  </Link>
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
                  <Link className="link-title" to="/">
                    QUỐC GIA
                  </Link>

                  <ul className="sub-menu">
                    {" "}
                    <li
                      className="sub-menu-link"
                    >
                      Phim Trung Quốc
                    </li>

                    <li
                      className="sub-menu-link"
                    >
                      Phim Hàn Quốc
                    </li>

                    <li
                      className="sub-menu-link"
                    >
                      Phim Nhật Bản
                    </li>


                    <li
                      className="sub-menu-link"
                    >
                      Phim Âu Mỹ
                    </li>

                    <li
                      className="sub-menu-link"
                    >
                      Phim Thái Lan
                    </li>

                    <li
                      className="sub-menu-link"
                    >
                      Phim Đài Loan
                    </li>

                    <li
                      className="sub-menu-link"
                    >
                      Phim Tổng Hợp
                    </li>

                    <li
                      className="sub-menu-link"
                    >
                      Phim Hồng Kông
                    </li>

                    <li
                      className="sub-menu-link"
                    >
                      Phim Ấn Độ
                    </li>

                  </ul>
                </li>
                <li>
                  <Link className="link-title" to="/">
                    NĂM PHÁT HÀNH
                  </Link>

                  <ul className="sub-menu">
                    {" "}
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p
                        className="sub-menu-link"
                      >
                        Phim 2024
                      </p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p
                        className="sub-menu-link"
                      >
                        Phim 2023
                      </p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p
                        className="sub-menu-link"
                      >
                        Phim 2022
                      </p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p
                        className="sub-menu-link"
                      >
                        Phim 2021
                      </p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p
                        className="sub-menu-link"
                      >
                        Phim 2020
                      </p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p
                        className="sub-menu-link"
                      >
                        Phim 2019
                      </p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p
                        className="sub-menu-link"
                      >
                        Phim 2018
                      </p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p
                        className="sub-menu-link"
                      >
                        Phim 2017
                      </p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p
                        className="sub-menu-link"
                      >
                        Phim 2016
                      </p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p
                        className="sub-menu-link"
                      >
                        Phim 2015
                      </p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p
                        className="sub-menu-link"
                      >
                        Phim 2014
                      </p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p
                        className="sub-menu-link"
                      >
                        Phim 2013
                      </p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p
                        className="sub-menu-link"
                      >
                        Phim 2012
                      </p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p
                        className="sub-menu-link"
                      >
                        Phim 2011
                      </p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p
                        className="sub-menu-link"
                      >
                        Phim 2010
                      </p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p
                        className="sub-menu-link"
                      >
                        Phim 2009
                      </p>{" "}
                    </li>
                    <li>
                      {" "}
                      <span className="icon"></span>{" "}
                      <p
                        className="sub-menu-link"
                      >
                        Phim 2008
                      </p>{" "}
                    </li>
                    <li>
                      <span className="icon"></span>{" "}
                      <p
                        className="sub-menu-link"
                      >
                        Phim trước 2007
                      </p>{" "}
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
                  <Link className="vip link-title" to="/">
                    TOP PHIM
                  </Link>
                  <ul className="sub-menu">

                    <li title="Phim top imdb">
                      Top IMDB
                    </li>{" "}

                    <li title="Phim hot" >
                      Phim hot
                    </li>{" "}

                    <li title="Phim Netflix" >
                      Phim Netflix
                    </li>{" "}

                    <li title="Phim DC Comic" >
                      Phim DC Comic
                    </li>{" "}

                    <li title="Phim Marvel" >
                      Phim Marvel
                    </li>{" "}

                    <li title="Phim HD" >
                      Phim HD
                    </li>{" "}
                  </ul>
                </li>
              </ul>
            </div>
            <form className="nav__search" action="tim-kiem/">
              <input
                placeholder="Tìm tên phim, diễn viên..."
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              ></input>
              <FaSearch className="nav__search__icons" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
