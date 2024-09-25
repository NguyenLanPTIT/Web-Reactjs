import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import "./responsive.scss";
import Logo from "../../image/logo.webp";
import { useState } from "react";

import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";
function Footer() {
  const [activeLink, setActiveLink] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const toggleSubMenu = (index) => {
    if (activeSubMenu === index) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(index);
    }
  };
  const handleLinkClick = (id) => {
    setActiveLink(id);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="column footer-logo">
            <div className="nav__img">
              <Link className="image" to="/">
                <img src={Logo} alt="phimmoi"></img>
              </Link>
            </div>
            <p className="text-foot">
              Tận hưởng trải nghiệm xem phim mới nhất miễn phí ngay tại phimmoi và
              dành thời gian thư giãn chill cùng gia đình và bạn bè. Với một thư
              viện phim phong phú
            </p>
          </div>
          <div className="column contact">
            <p>
              <Link className="title-link" to="/movies">
                {" "}
                Phim Mới
              </Link></p>
            <ul>
              <li className={activeLink === 'phim-chieu-rap' ? 'active' : ''}
                onClick={() => handleLinkClick('phim-chieu-rap')}>
                <Link className="title-link" to="/categories/phim-chieu-rap">
                  {" "}
                  Phim chiếu rạp
                </Link>
              </li>
              <li className={activeLink === 'phim-le' ? 'active' : ''}
                onClick={() => handleLinkClick('phim-le')}>
                <Link className="title-link" to="/categories/phim-le">
                  {" "}
                  Phim lẻ
                </Link>
              </li>
              <li className={activeLink === 'phim-bo' ? 'active' : ''}
                onClick={() => handleLinkClick('phim-bo')}>
                <Link className="title-link" to="/categories/phim-bo">
                  {" "}
                  Phim bộ
                </Link>
              </li>
              <li>
                <Link className="title-link" to="/categories/phim-hanh-dong">
                  {" "}
                  Phim hành động
                </Link>
              </li>
              <li>
                <Link className="title-link" to="/categories/phim-vien-tuong">
                  {" "}
                  Phim viễn tưởng
                </Link>
              </li>
              <li>
                <Link className="title-link" to="/categories/phim-tam-ly">
                  {" "}
                  Phim tâm lý
                </Link>
              </li>
              <li>
                <Link className="title-link" to="/categories/phim-hai-huoc">
                  {" "}
                  Phim hài hước
                </Link>
              </li>
            </ul>
          </div>
          <div className="column contact">
            <p>Phim Hay</p>
            <ul>
              <li>
                <Link className="title-link" to="/categories/phim-my">
                  {" "}
                  Phim Mỹ
                </Link>
              </li>
              <li>
                <Link className="title-link" to="/categories/phim-han-quoc">
                  {" "}
                  Phim Hàn Quốc
                </Link>
              </li>
              <li>
                <Link className="title-link" to="/categories/phim-trung-quoc">
                  {" "}
                  Phim Trung Quốc
                </Link>
              </li>
              <li>
                <Link className="title-link" to="/categories/phim-thai-lan">
                  {" "}
                  Phim Thái Lan
                </Link>
              </li>
              <li>
                <Link className="title-link" to="/categories/phim-viet-nam">
                  {" "}
                  Phim Việt Nam
                </Link>
              </li>
              <li>
                <Link className="title-link" to="/categories/phim-ma-kinh-di">
                  {" "}
                  Phim Ma Kinh Dị
                </Link>
              </li>
              <li>
                <Link className="title-link" to="/categories/hoat-hinh">
                  {" "}
                  Phim Hoạt Hình
                </Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <p>Phim Hot</p>
            <ul>
              <li className={activeLink === 've-chung-toi' ? 'active' : ''}
                onClick={() => { handleLinkClick('ve-chung-toi'); scrollToTop(); }}>
                <Link className="title-link" to="/post/ve-chung-toi">
                  {" "}
                  Về chúng tôi
                </Link></li>
              <li className={activeLink === 'phim-moi' ? 'active' : ''}
                onClick={() => { handleLinkClick('phim-moi'); scrollToTop(); }}>

                <Link className="title-link" to="/movies">
                  {" "}
                  Phimmoi
                </Link></li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="column">
            <p>Trợ giúp</p>
            <ul>
              <li>Hỏi đáp</li>
              <li className={activeLink === 'lien-he' ? 'active' : ''}
                onClick={() => { handleLinkClick('lien-he'); scrollToTop(); }}>
                <Link className="title-link" to="/post/lien-he">
                  {" "}
                  Liên hệ
                </Link></li>
              <li>Tin tức</li>
            </ul>
          </div>
          <div className="column">
            <p>Thông tin</p>
            <ul>
              <li className={activeLink === 'dieu-khoan-su-dung' ? 'active' : ''}
                onClick={() => {handleLinkClick('dieu-khoan-su-dung'); scrollToTop(); }}>
                <Link className="title-link" to="/post/dieu-khoan-su-dung">
                  {" "}
                  Điều khoản sử dụng
                </Link></li>
              <li className={activeLink === 'chinh-sach-rieng-tu' ? 'active' : ''}
                onClick={() => {handleLinkClick('chinh-sach-rieng-tu'); scrollToTop(); }}>
                <Link className="title-link" to="/post/chinh-sach-rieng-tu">
                  {" "}
                  Chính sách riêng tư
                </Link></li>
              <li className={activeLink === 'khieu-nai-ban-quyen' ? 'active' : ''}
                onClick={() => {handleLinkClick('khieu-nai-ban-quyen'); scrollToTop(); }}>
                <Link className="title-link" to="/post/khieu-nai-ban-quyen">
                  {" "}
                  Khiếu nại bản quyền
                </Link></li>
              <li className="no-active">© 2023 PhimChill.Net</li>
            </ul>
          </div>
        </div>

        <div className="footer-mobile">
          <div className="column footer-logo">
            <div className="nav__img">
              <Link className="image" to="/">
                <img src={Logo} alt="phimmoi"></img>
              </Link>
            </div>
            <p className="text-foot">
              Tận hưởng trải nghiệm xem phim mới nhất miễn phí ngay tại phimmoi và
              dành thời gian thư giãn chill cùng gia đình và bạn bè. Với một thư
              viện phim phong phú
            </p>
          </div>
          <div className="column contact">
            <p onClick={() => toggleSubMenu(1)}>
              <Link className="title-link" to="/movies">
                {" "}
                Phim Mới
              </Link>
              {activeSubMenu === 1 ? <FaChevronUp /> : <FaChevronDown />}
            </p>
            <ul className={`sub-menu ${activeSubMenu === 1 ? "open" : ""}`}>
            <li className={activeLink === 'phim-chieu-rap' ? 'active' : ''}
                onClick={() => handleLinkClick('phim-chieu-rap')}>
                <Link className="title-link" to="/categories/phim-chieu-rap">
                  {" "}
                  Phim chiếu rạp
                </Link>
              </li>
              <li className={activeLink === 'phim-le' ? 'active' : ''}
                onClick={() => handleLinkClick('phim-le')}>
                <Link className="title-link" to="/categories/phim-le">
                  {" "}
                  Phim lẻ
                </Link>
              </li>
              <li className={activeLink === 'phim-bo' ? 'active' : ''}
                onClick={() => handleLinkClick('phim-bo')}>
                <Link className="title-link" to="/categories/phim-bo">
                  {" "}
                  Phim bộ
                </Link>
              </li>
              <li>
                <Link className="title-link" to="/categories/phim-hanh-dong">
                  {" "}
                  Phim hành động
                </Link>
              </li>
              <li>
                <Link className="title-link" to="/categories/phim-vien-tuong">
                  {" "}
                  Phim viễn tưởng
                </Link>
              </li>
              <li>
                <Link className="title-link" to="/categories/phim-tam-ly">
                  {" "}
                  Phim tâm lý
                </Link>
              </li>
              <li>
                <Link className="title-link" to="/categories/phim-hai-huoc">
                  {" "}
                  Phim hài hước
                </Link>
              </li>
            </ul>

            <p onClick={() => toggleSubMenu(2)}>Phim Hay
              {activeSubMenu === 2 ? <FaChevronUp /> : <FaChevronDown />}
            </p>
            <ul className={`sub-menu ${activeSubMenu === 2 ? "open" : ""}`}>
              <li>
                <Link className="title-link" to="/categories/phim-my">
                  {" "}
                  Phim Mỹ
                </Link>
              </li>
              <li>
                <Link className="title-link" to="/categories/phim-han-quoc">
                  {" "}
                  Phim Hàn Quốc
                </Link>
              </li>
              <li>
                <Link className="title-link" to="/categories/phim-trung-quoc">
                  {" "}
                  Phim Trung Quốc
                </Link>
              </li>
              <li>
                <Link className="title-link" to="/categories/phim-thai-lan">
                  {" "}
                  Phim Thái Lan
                </Link>
              </li>
              <li>
                <Link className="title-link" to="/categories/phim-viet-nam">
                  {" "}
                  Phim Việt Nam
                </Link>
              </li>
              <li>
                <Link className="title-link" to="/categories/phim-ma-kinh-di">
                  {" "}
                  Phim Ma Kinh Dị
                </Link>
              </li>
              <li>
                <Link className="title-link" to="/categories/hoat-hinh">
                  {" "}
                  Phim Hoạt Hình
                </Link>
              </li>
            </ul>
            <p onClick={() => toggleSubMenu(3)}>Phim Hot
              {activeSubMenu === 3 ? <FaChevronUp /> : <FaChevronDown />}

            </p>
            <ul className={`sub-menu ${activeSubMenu === 3 ? "open" : ""}`}>
            <li className={activeLink === 've-chung-toi' ? 'active' : ''}
                onClick={() => { handleLinkClick('ve-chung-toi'); scrollToTop(); }}>
                <Link className="title-link" to="/post/ve-chung-toi">
                  {" "}
                  Về chúng tôi
                </Link></li>
              <li className={activeLink === 'phim-moi' ? 'active' : ''}
                onClick={() => { handleLinkClick('phim-moi'); scrollToTop(); }}>

                <Link className="title-link" to="/movies">
                  {" "}
                  Phimmoi
                </Link></li>
              <li>Sitemap</li>
            </ul>
            <p onClick={() => toggleSubMenu(4)}>Trợ giúp
              {activeSubMenu === 4 ? <FaChevronUp /> : <FaChevronDown />}

            </p>
            <ul className={`sub-menu ${activeSubMenu === 4 ? "open" : ""}`}>
            <li>Hỏi đáp</li>
              <li className={activeLink === 'lien-he' ? 'active' : ''}
                onClick={() => { handleLinkClick('lien-he'); scrollToTop(); }}>
                <Link className="title-link" to="/post/lien-he">
                  {" "}
                  Liên hệ
                </Link></li>
              <li>Tin tức</li>
            </ul>
            <p onClick={() => toggleSubMenu(5)}>Thông tin
              {activeSubMenu === 5 ? <FaChevronUp /> : <FaChevronDown />}

            </p>
            <ul className={`sub-menu ${activeSubMenu === 5 ? "open" : ""}`}>
            <li className={activeLink === 'dieu-khoan-su-dung' ? 'active' : ''}
                onClick={() => {handleLinkClick('dieu-khoan-su-dung'); scrollToTop(); }}>
                <Link className="title-link" to="/post/dieu-khoan-su-dung">
                  {" "}
                  Điều khoản sử dụng
                </Link></li>
              <li className={activeLink === 'chinh-sach-rieng-tu' ? 'active' : ''}
                onClick={() => {handleLinkClick('chinh-sach-rieng-tu'); scrollToTop(); }}>
                <Link className="title-link" to="/post/chinh-sach-rieng-tu">
                  {" "}
                  Chính sách riêng tư
                </Link></li>
              <li className={activeLink === 'khieu-nai-ban-quyen' ? 'active' : ''}
                onClick={() => {handleLinkClick('khieu-nai-ban-quyen'); scrollToTop(); }}>
                <Link className="title-link" to="/post/khieu-nai-ban-quyen">
                  {" "}
                  Khiếu nại bản quyền
                </Link></li>
              <li className="no-active">© 2023 PhimChill.Net</li>
            </ul>
          </div>
        </div>

      </div>
    </>
  );
};

export default Footer;
