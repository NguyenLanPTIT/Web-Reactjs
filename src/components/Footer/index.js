import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
const Footer = () => (
  <div className="footer">
    <div className="footer-container">
      <div className="column footer-logo">
        <div className="nav__img">
          <Link className="image" to="/">
            <img
              src="https://phimmoichillv.net/dev/images/logo.png"
              alt="phimmoi"
            ></img>
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
          <li>
            <Link className="title-link" to="/categories/phim-chieu-rap">
              {" "}
              Phim chiếu rạp
            </Link>
          </li>
          <li>
            <Link className="title-link" to="/categories/phim-le">
              {" "}
              Phim lẻ
            </Link>
          </li>
          <li>
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
          <li>
          <Link className="title-link" to="/post/ve-chung-toi">
            {" "}
            Về chúng tôi
          </Link></li>
          <li>
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
          <li>
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
          <li>
          <Link className="title-link" to="/post/dieu-khoan-su-dung">
              {" "}
              Điều khoản sử dụng
            </Link></li>
          <li>
          <Link className="title-link" to="/post/chinh-sach-rieng-tu">
              {" "}
              Chính sách riêng tư
            </Link></li>
          <li>
          <Link className="title-link" to="/post/khieu-nai-ban-quyen">
              {" "}
              Khiếu nại bản quyền
            </Link></li>
          <li className="no-active">© 2023 PhimChill.Net</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
