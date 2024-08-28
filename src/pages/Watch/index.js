import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhimDeCu from "../Home/component/PhimDeCu";
import PhimLienQuan from "../MovieDetailPage/component/FilmLienQuan";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { IoMdPlay } from "react-icons/io";
import { IoMdVolumeHigh } from "react-icons/io";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";
import { FaChromecast } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { RiFullscreenLine } from "react-icons/ri";
import { FaPowerOff } from "react-icons/fa6";
import { MdSaveAlt } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import avataImage from "../../image/avata.jpg";
import avata2 from "../../image/avata2.png";
import avata3 from "../../image/avata3.jpg";
import avata4 from "../../image/avata4.jpg";
import OffQC from "../../image/OffQC.webp";
import "./watch.scss";

function Watch() {
    const { slug } = useParams();
    const [movie, setMovie] = useState(null);
    const [episodes, setEpisodes] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Mới nhất");

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const [isActive, setIsActive] = useState(true);
    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`https://phimapi.com/phim/${slug}`);
                const data = await response.json();
                console.log(data);
                setMovie(data.movie);
                setEpisodes(data.episodes);
                console.log(data.episodes);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        fetchMovieDetails();
    }, [slug]);

    if (!movie) {
        return <div>Movie not found</div>;
    }

    const renderSingleMovieInfo = () => {
        return (
            <div className="list-server">
            </div>
        );
    };

    const renderSeriesMovieInfo = () => {
        return (
            <div className="list-server">
                <div className="server-group">
                    <span> <FaDatabase  className="icon-data"/>Danh sách tập #PM</span>
                    <ul>
                        {episodes.map(
                            (episode, index) =>
                                episode.server_data.length > 1 && (
                                    <li className="item-chapter" key={index}>
                                        <strong>{episode.name}</strong>
                                        {episode.server_data
                                            .sort((a, b) => {
                                                const episodeNumberA = parseInt(a.slug.split("-")[1]);
                                                const episodeNumberB = parseInt(b.slug.split("-")[1]);
                                                return episodeNumberA - episodeNumberB;
                                            })
                                            .map((item, idx) => (
                                                <button
                                                    className={`name-chapter ${idx === 0 ? "first-item" : ""}`}  key={idx}
                                                >
                                                    {item.name}
                                                </button>
                                            ))}
                                    </li>
                                )
                        )}
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <div className="watch-container">
            <div className="block-note">
                Truy cập PhimMoiPlus.Net nếu bạn không vào được PhimMoiChill{" "}
            </div>
            <div className="breadcrumb">
                <span itemProp="name">
                    <FaHome className="item" />
                    <Link className="title-link" to="/movies">
                        {" "}
                        PhimMoi
                    </Link>
                    <FaChevronRight className="item" />
                </span>
                <span itemProp="name">
                    <ul>
                        {movie.category.map((category, index) => (
                            <li className="item-category" key={index}>
                                Phim {category.name}
                                <FaChevronRight className="item" />
                            </li>
                        ))}
                    </ul>
                </span>
                <span itemProp="name">
                    <Link className="title-link" to="/categories/tv-shows">
                        {" "}
                        Phim Chiếu Rạp
                    </Link>
                    <FaChevronRight className="item" />
                </span>
                <li className="name-movie">
                    {" "}
                    {movie.name} <FaChevronRight className="item" />
                </li>
                <li className="chaper-movie">{movie.type === 'single' ? "Tập Full" : "Tập 1"}
                </li>
            </div>
            <div className="box-player">
                <div className="player">
                    <div
                        className="movie"
                        style={{ backgroundImage: `url(${movie.poster_url})` }}
                    ></div>
                    <div className="control-player">
                        <input type="range" className="progress-bar" />
                        <div className="btn-player">
                            <div className="play-time">
                                <div className="play-icon">
                                    <IoMdPlay />
                                </div>
                                <div className="volume-icon">
                                    <IoMdVolumeHigh />
                                </div>
                                <div className="time-icon">00:00/1:36:02</div>
                            </div>
                            <div className="play-setting">
                                <div className="reset-icon">
                                    <FaArrowRotateLeft />
                                </div>
                                <div className="fast-icon">
                                    <FaArrowRotateRight />
                                </div>
                                <div className="player-icon">
                                    <FaChromecast />
                                </div>
                                <div className="set-icon">
                                    <IoMdSettings />
                                </div>
                                <div className="room-icon">
                                    <RiFullscreenLine />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="film-note">
                    Phim Xem tốt nhất trên trình duyệt Safari,FireFox hoặc Chrome. Đừng
                    tiếc 1 comment bên dưới để đánh giá phim hoặc báo lỗi. Đổi server nếu
                    lỗi,lag
                </div>
                <div className="hide"></div>
                <div className="options">
                    <ul class="tool">
                        <li class="off-ads">
                            <span>Tắt QC</span>
                            <img src={OffQC} alt="Tắt QC" />
                        </li>
                        <li class="power-lamp">
                            <span class="text-lamp">Tắt đèn</span>
                            <div className="off-lamp">
                                <FaPowerOff />
                            </div>
                        </li>
                        <li class="autoplay">
                            <span>Tự chuyển tập</span>
                            <div className={`toggle-button ${isActive ? 'active' : ''}`}>
                                <div className="buttons">
                                    <button
                                        onClick={() => setIsActive(false)}
                                        className={`button no ${!isActive ? 'no-active' : ''}`}
                                    >
                                        NO
                                    </button>
                                    <button
                                        onClick={() => setIsActive(true)}
                                        className={`button yes ${isActive ? 'selected' : ''}`}
                                    >
                                        YES
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>


            </div>
            <div className="server">
                <center>
                    <ul className="server-list">
                        <li className="backup-server">
                            <span className="server-title">Đổi Server</span>
                            <div className="list-episode">
                                <ul className="episode">
                                    <li className="episode1">#1 PMFAST</li>
                                    <li className="episode2">#2 PMHLS</li>
                                    <li className="episode2">#3 PMPRO</li>
                                    <li className="episode2">#4 PMBK</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </center>


            </div>
            {movie.type === 'single' ? renderSingleMovieInfo() : renderSeriesMovieInfo()}


            <div className="box-rating">
                <p>Đánh giá phim
                    <span class="text">(8đ / 35 lượt)</span> </p>
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
            </div>
            <div className="social">
                <div className="fb-like">
                    <button className="like">
                        <AiTwotoneLike className="icons" /> Thích
                    </button>
                    <button className="share">Chia sẻ</button>
                </div>
                <div className="fb-save">
                    <button className="save">
                        <MdSaveAlt className="save-icon" />Lưu vào Facebook
                    </button>
                </div>
            </div>
            <div className="film-info" >
                <div className="film-content">
                    <h1 className="film-heading">{movie.name} - {movie.type === 'single' ? "Tập Full" : "Tập 1"}
                    </h1>
                    <h2 className="decs-head"> {movie.origin_name} </h2>
                    <p className="decs-text">{movie.name} {movie.origin_name} {movie.year} {movie.content}
                    </p>

                </div>


                {/* <div className="comment">
                    <div className="content-cmt">
                        <div className="header-cmt">
                            <div className="number">1 bình luận </div>
                            <div className="sort">
                                <span> Sắp xếp theo</span>
                                <button className="dropbtn" onClick={toggleDropdown}>{selectedOption}
                                    <IoMdArrowDropup className="up" />
                                    <IoMdArrowDropdown className="down" />
                                </button>
                                {isOpen && (
                                    <div className="dropdown-content">

                                        <li onClick={() => handleOptionClick('Mới nhất')}>Mới nhất</li>

                                        <li onClick={() => handleOptionClick('Cũ nhất')}>Cũ nhất</li>
                                    </div>
                                )}
                            </div>
                        </div>



                        <div className="write-cmt">
                            <img src={avataImage} alt="avata" />
                            <input type="text" placeholder="Viết bình luận"></input>
                        </div>
                        <div className="list-cmt">
                            <div className="cmt-item">
                                <img src={avata2} alt="avata2" />
                                <div className="item-content">
                                    <span className="name">Mì Tôm Bóng Đá</span>
                                    <p className="item-decs">Phim hay</p>
                                    <div className="feeling">
                                        <p className="like">Thích</p>
                                        <span>.</span>
                                        <p className="reply">Phản hồi</p>
                                        <span>.</span>
                                        <p className="time">1 tuần</p>
                                    </div>

                                </div>

                            </div>
                            <div className="cmt-item">
                                <img src={avata4} alt="avata4" />
                                <div className="item-content">
                                    <span className="name">Lan Nguyễn</span>
                                    <p className="item-decs">Phim hay</p>
                                    <div className="feeling">
                                        <p className="like">Thích</p>
                                        <span>.</span>
                                        <p className="reply">Phản hồi</p>
                                        <span>.</span>
                                        <p className="time">1 tuần</p>
                                    </div>

                                </div>

                            </div>
                            <div className="cmt-item">
                                <img src={avata3} alt="avata3" />
                                <div className="item-content">
                                    <span className="name">Ali Ba Ba</span>
                                    <p className="item-decs">Phim hay</p>
                                    <div className="feeling">
                                        <p className="like">Thích</p>
                                        <span>.</span>
                                        <p className="reply">Phản hồi</p>
                                        <span>.</span>
                                        <p className="time">6 ngày</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="footer-cmt">

                        </div>
                    </div>
                </div> */}
                <div>
                    <PhimLienQuan />
                </div>
                <div>
                    <PhimDeCu />
                </div>

            </div>
        </div>
    );
}

export default Watch;
