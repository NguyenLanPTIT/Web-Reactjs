import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./categories.scss";
const apiMap = {
  "phim-le": "https://phimapi.com/v1/api/danh-sach/phim-le?skip=1&limit=64",
  "phim-bo": "https://phimapi.com/v1/api/danh-sach/phim-bo?skip=1&limit=64",
  "hoat-hinh": "https://phimapi.com/v1/api/danh-sach/hoat-hinh?skip=1&limit=64",
  "phim-chieu-rap": "https://phimapi.com/v1/api/danh-sach/tv-shows?skip=1&limit=64",
  "phim-hot": [
    "https://phimapi.com/v1/api/danh-sach/phim-le?skip=1&limit=64",
    "https://phimapi.com/v1/api/danh-sach/phim-bo?skip=1&limit=64"
  ]
};

const CategoryPage = () => {
  const { category } = useParams();
  const [movies, setMovies] = useState([]);
  const [titlePage, setTitlePage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();
  const handleReload = () => {
    navigate(0);
  }
  useEffect(() => {
    const apiURL = `${apiMap[category] || apiMap["default"]}?page=${currentPage}&limit=25`;
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        const moviesData = data.data.items;
        setMovies(
          moviesData.map((movie) => ({
            id: movie._id,
            title: movie.name,
            thumbnail: movie.poster_url,
            lang: movie.lang || "No description available.",
            slug: movie.slug,
          }))

        );
        setTitlePage(data.data.titlePage);
        setTotalPages(data.data.totalPages);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, [category, currentPage]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="content">
      <div className="container">
        <div className="detail__heading">
          <h2 className="heading">
            {titlePage === 'TV Shows' ? "PHIM CHIẾU RẠP" : titlePage.toUpperCase()}
          </h2>
          <ul className="order">
            <li>
              <select id="cat" name="cat" className="form-control">
                <option value="">Thể loại</option>
                <option value="1">Phim Hành Động</option>
                <option value="2">Phim Võ Thuật</option>
                <option value="3">Phim Tình Cảm</option>
                <option value="4">Phim Hoạt Hình</option>
                <option value="6">Phim Hài Hước</option>
                <option value="7">Phim Viễn Tưởng</option>
                <option value="8">Phim Cổ Trang</option>
                <option value="10">Phim Phiêu Lưu</option>
                <option value="13">Phim Tâm Lý</option>
                <option value="18">Phim Khoa Học</option>
                <option value="19">Phim Hình Sự</option>
                <option value="21">Phim Ma - Kinh Dị</option>
                <option value="22">Phim Chiến Tranh</option>
                <option value="24">Phim Âm Nhạc</option>
                <option value="26">Phim Thể Thao</option>
                <option value="30">Phim Thần Thoại</option>
                <option value="31">Game show</option>
                <option value="37">Phim Truyền Hình</option>
                <option value="40">Phim Chiếu Rạp</option>
                <option value="41"> Phim Anime</option>
                <option value="42">Phim Sắp Chiếu</option>
                <option value="43">Phim Thuyết Minh</option>
                <option value="44">Phim 18+</option>
              </select>
            </li>
            <li>
              <select className="form-control" id="country" name="country">
                <option value="">Quốc gia</option>
                <option value="1">Phim Việt Nam</option>
                <option value="2">Phim Trung Quốc</option>
                <option value="3">Phim Hàn Quốc</option>
                <option value="4">Phim Nhật Bản</option>
                <option value="5">Phim Âu Mỹ</option>
                <option value="6">Phim Thái Lan</option>
                <option value="7">Phim Đài Loan</option>
                <option value="8">Phim Tổng Hợp</option>
                <option value="9">Phim Hồng Kông</option>
                <option value="10">Phim Ấn Độ</option>
              </select>
            </li>
            <li>
              <select id="year" name="year" className="form-control">
                <option value="">Năm phát hành</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">trước 2007</option>
              </select>
            </li>
            <li>
              <select id="type" name="type" className="form-control">
                <option value="">Ngôn Ngữ</option>
                <option value="0">Phụ Đề</option>
                <option value="1">Thuyết Minh</option>
              </select>
            </li>
            <li>
              <select className="form-control" id="byorder" name="byorder">
                <option value="">Sắp xếp</option>
                <option value="timeupdate">Thời gian cập nhật</option>
                <option value="viewed">Lượt xem</option>
                <option value="year">Năm sản xuất</option>
              </select>
            </li>
            <li>
              <select className="form-control" id="hinhthuc" name="hinhthuc">
                <option value="">Hình thức</option>
                <option value="phim-le">Phim lẻ</option>
                <option value="phim-bo">Phim bộ</option>
              </select>
            </li>
            <li>
              <span className="submit-filter" >
                Tìm kiếm
              </span>
            </li>
          </ul>
        </div>
        <div className="text">
          <div className="breadcrumb">
            <div itemProp="itemListElement" className="title">
              <span itemProp="name" >
                <FaHome /><Link className="title-link" to="/movies"> Phim Mới</Link><FaChevronRight />
              </span>
              <li>{titlePage === 'TV Shows' ? "Phim Chiếu Rạp" : titlePage}</li>
            </div>

          </div>
          <div className="desc">
            Khám phá danh sách
            <Link className="desc-detail" to="" onClick={handleReload}>
              <strong>{titlePage === 'TV Shows' ? "Phim Chiếu Rạp" : titlePage}</strong>{" "}
            </Link>
            mới nhất và hấp dẫn, cập nhật liên tục trên phimmoi.net . Tải
            xuống hơn 100.000+ bộ phim le Vietsub, thuyết minh đang thịnh hành
            và hay nhất tháng 08 2024.
          </div>
          <div className="clear"></div>
        </div>
        <div className="heading__content">
          <div className="card">
            {movies.map((movie) => (
                <Link  key={movie.id} className="card__item" to={`/movies/${movie.slug}`}>
                  <span className="lable">HD-{movie.lang}</span>
                  <div className="card__image">
                    <img
                      src={`https://img.phimapi.com/${movie.thumbnail}`}
                      alt={movie.title}
                      className="card-thumbnail"
                    />
                    <h3 className="card__title">{movie.title}</h3>
                    <div className="play-movie"></div>
                  </div>
                </Link>
            ))}
          </div>
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
