import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhimDeCuMoi from "./component/PhimDeCuMoi";
import PhimLienQuan from "./component/FilmLienQuan";
import { Link } from "react-router-dom";
import "./movie.scss";
import "./responsive.scss";
import { useNavigate } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import avataImage from "../../image/avata.jpg";
import { FaAngleRight } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getData } from '../customHook';


import avata2 from "../../image/avata2.png";

const initialComments = [
  {
    id: 1,
    name: "Lan Nguyễn",
    cmt: "phim hay",
  },
  {
    id: 2,

    cmt: "phim hay",
    name: "Trung Nguyễn",
  },
  {
    id: 3,

    cmt: "phim hay",
    name: "Oanh Kiều",
  },
  {
    id: 4,
    cmt: "phim hay",
    name: "Hải Nguyễn",
  },
];

function MovieDetailPage() {

  const [fimlData, setFimlData] = useState(
    {
      decu: [],

    }
  );
  const { slug, episodeName } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [episodes, setEpisodes] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [comments, setComments] = useState(initialComments);
  const [comment, setComment] = useState("");
  const [isFirstFocus, setIsFirstFocus] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Mới nhất");
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handlePostComment = () => {
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        name: "Tên Người Dùng",
        cmt: comment,
      };
      setComments([newComment, ...comments]);
      setComment("");
    }
  };

  const toggleTrailer = () => {
    setShowTrailer(!showTrailer);
    if (!showTrailer) {
      const trailerSection = document.getElementById("trailer-section");
      if (trailerSection) {
        trailerSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getData();

        setFimlData({
          decu: data.shuffledMovies,
        });
        setLoading(false);

      } catch (error) {
      }
      finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://phimapi.com/phim/${slug}`);

        const data = await response.json();
        setMovie(data.movie);
        setEpisodes(data.episodes);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [slug, comments]);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const renderSingleMovieInfo = () => {
    return (
      <div>
        <li>
          <label>Đang phát:</label>{" "}
          <span className="type">
            {" "}
            {movie.quality} {movie.lang}
          </span>
        </li>

        <li>
          <label>Năm phát hành:</label> <span> {movie.year}</span>
        </li>
        <li>
          <label>Quốc gia:</label>{" "}
          <span>{movie.country.map((c) => c.name).join(", ")}</span>
        </li>

        <li>
          <label>Thể loại:</label>{" "}
          <span>{movie.category.map((cat) => cat.name).join(", ")}</span>
        </li>
        <li>
          <label>Đạo diễn:</label> <span>{movie.director.join(", ")}</span>
        </li>
        <li>
          <label>Thời lượng:</label> <span>{movie.time}</span>
        </li>
        <li>
          <label>Diễn viên:</label>
          <span> {movie.actor.join(", ")}</span>
        </li>
      </div>
    );
  };
  const handleEpisodeClick = (item) => {
    const episodeSlug = item.name.replace(/\s+/g, "-").toLowerCase();
    navigate(`/xem/${slug}/${episodeSlug}`);
  };

  const renderSeriesMovieInfo = () => {
    return (
      <div>
        <li>
          <label>Đang phát:</label>{" "}
          {movie.episode_current.includes("Hoàn tất") ? (
            <span className="type"> {movie.episode_current}</span>
          ) : (
            <span className="type">
              {" "}
              {movie.quality} {movie.lang}
            </span>
          )}
        </li>

        <li>
          <label>Năm phát hành:</label> <span> {movie.year}</span>
        </li>
        <li>
          <label>Quốc gia:</label>{" "}
          <span>{movie.country.map((c) => c.name).join(", ")}</span>
        </li>

        <li>
          <label>Thể loại:</label>{" "}
          <span>{movie.category.map((cat) => cat.name).join(", ")}</span>
        </li>
        <li>
          <label>Đạo diễn:</label> <span>{movie.director.join(", ")}</span>
        </li>
        <li>
          <label>Thời lượng:</label> <span>{movie.episode_total} Tập</span>
        </li>
        <li>
          <label>Diễn viên:</label>
          <span> {movie.actor.join(", ")}</span>
        </li>
      </div>
    );
  };
  function extractYouTubeID(url) {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  }
  const videoID = extractYouTubeID(movie.trailer_url);
  const embedURL = `https://www.youtube.com/embed/${videoID}`;

  return (
    loading ? <div>Loading...</div> : <>
    <div className="movie-container">
      <div className="breadcrumb">
        <ul className="name" itemProp="name">
          <Link className="title-link" to="/movies">
            <span itemProp="name">
              <FaHome />
              <p>Xem Phim</p>
              <FaAngleRight className="item" />
            </span>
          </Link>
          {movie.category.map((category, index) => (
            <span className="item-category" key={index}>
              Phim {category.name}
              <FaAngleRight className="item" />
            </span>
          ))}
          <li> {movie.name}</li>
        </ul>
      </div>
      <div className="info">
        <div className="image">
          <div
            className="movie"
            style={{ backgroundImage: `url(${movie.poster_url})` }}
          >
            <LazyLoadImage
              className="poster"
              src={movie.thumb_url}
              alt={movie.name}
            />
            <Link className="play-icons" to={`/xem/${movie.slug}`}></Link>
            <div className="text">
              <h1>{movie.name}</h1>
              <h2>
                {movie.origin_name} ({movie.year})
              </h2>
              <div className="list-btn">
                <button className="trailer" onClick={toggleTrailer}>
                  {" "}
                  <FaYoutube className="item" />
                  Trailer
                </button>
                <button className="play">
                  <FaRegCirclePlay className="item" />
                  Xem phim
                </button>
              </div>
            </div>
          </div>
        </div>
        {movie.type === "single" ? (
          ""
        ) : (
          <div className="latest-episode">
            {episodes.map(
              (episode, index) =>
                episode.server_data.length > 1 && (
                  <li className="item-chapter" key={index}>
                    <span className="heading">Tập mới nhất :</span>
                    {episode.server_data
                      .slice(-5)
                      .sort((a, b) => {
                        const episodeNumberA = parseInt(a.slug.split("-")[1]);
                        const episodeNumberB = parseInt(b.slug.split("-")[1]);
                        return episodeNumberB - episodeNumberA;
                      })
                      .map((item, idx) => (
                        <button
                          className="name-chapter"
                          key={-idx}
                          onClick={() => handleEpisodeClick(item)}
                        >
                          {item.name}
                        </button>
                      ))}
                  </li>
                )
            )}
          </div>
        )}
        <div className="text-content">
          <div className="social">
            <div className="fb-like">
              <button className="like">
                <AiTwotoneLike className="icons" /> Thích
              </button>
              <button className="share">Chia sẻ</button>
            </div>
            <div className="box-rating">
              <div className="star">
                <FaStar className="icon-star" />
                <FaStar className="icon-star" />
                <FaStar className="icon-star" />
                <FaStar className="icon-star" />
                <FaStar className="icon-star" />
                <FaStar className="icon-star" />
                <FaStar className="icon-star" />
                <FaStar className="icon-star" />
                <FaStar className="icon-star" />
                <FaStar className="icon-star no-active" />
              </div>
              <p className="average">(9 đ/50 lượt)</p>
            </div>
          </div>
          <ul className="block-film">
            {movie.type === "single"
              ? renderSingleMovieInfo()
              : renderSeriesMovieInfo()}
          </ul>

          <div className="film-content">
            <h3 className="film-heading">Nội dung phim:</h3>
            <div className="text-decs">
              <strong>
                {movie.name} {movie.origin_name} {movie.year}
              </strong>{" "}
              {movie.content}
            </div>
          </div>
          <div className="trailer-film" id="trailer-section">
            {showTrailer && (
              <div className="trailer-container">
                <div className="responsive-iframe-container">
                  <iframe
                    src={embedURL}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
          <div className="tags-film">
            <h3 className="tag-header">Tags</h3>
            <div className="tag-content">
              <li className="tag-btn">{movie.name} </li>
              <li className="tag-btn">{movie.origin_name} </li>
            </div>
          </div>
        </div>
        <div className="comment">
          <div className="content-cmt">
            <div className="header-cmt">
              <div className="number">{comments.length} bình luận</div>
              <div className="sort">
                <span> Sắp xếp theo</span>
                <button className="dropbtn" onClick={toggleDropdown}>
                  {selectedOption}
                  <IoMdArrowDropup className="up" />
                  <IoMdArrowDropdown className="down" />
                </button>
              </div>
            </div>
            <div className="write-cmt">
              <LazyLoadImage src={avataImage} alt="avata1" />
              <div className="text-btn">
                <input
                  type="text"
                  value={comment}
                  placeholder="Viết bình luận..."
                  onFocus={() => {
                    if (isFirstFocus) {
                      setIsFirstFocus(false);
                    }
                    setIsFocused(true);
                  }}
                  onBlur={() => setIsFocused(false)}
                  onChange={(e) => setComment(e.target.value)}
                />
                {isFocused && !isFirstFocus && (
                  <div className="btn-cmt">
                    <button className="push" onClick={handlePostComment}>
                      Đăng
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="list-cmt">
              {comments.map((cmt, index) => (
                <div key={cmt.id} className="cmt-item">
                  <LazyLoadImage src={avata2} alt="avata2" />
                  <div className="item-content">
                    <span className="name">{cmt.name}</span>
                    <p className="item-decs">{cmt.cmt}</p>
                    <div className="feeling">
                      <p className="like">Thích</p>
                      <span>.</span>
                      <p className="reply">Phản hồi</p>
                      <span>.</span>
                      <p className="time">1 tuần</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <PhimLienQuan data={fimlData.decu} />
        </div>
        <div>
          <PhimDeCuMoi data={fimlData.decu}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default MovieDetailPage;
