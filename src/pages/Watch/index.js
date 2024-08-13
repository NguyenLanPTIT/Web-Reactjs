import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhimDeCu from "../Home/component/PhimDeCu";
import PhimLienQuan from "../MovieDetailPage/component/FilmLienQuan";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { IoIosPlayCircle } from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import avataImage from "../../image/avata.jpg";
import avata2 from '../../image/avata2.png';
import avata3 from '../../image/avata3.jpg';
import avata4 from '../../image/avata4.jpg';

function Watch() {
    const { slug } = useParams();
    const [movie, setMovie] = useState(null);
    const [episodes, setEpisodes] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Mới nhất');

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

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
            <div>
                <li>
                    <label>Đang phát:</label>{" "}
                    <span className="type"> {movie.quality} {movie.lang}</span>
                </li>

                <li>
                    <label>Năm phát hành:</label>{" "}
                    <span> {movie.year}</span>
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
                    <label>Đạo diễn:</label>{" "}
                    <span>{movie.director.join(", ")}</span>
                </li>
                <li>
                    <label>Thời lượng:</label>{" "}
                    <span>{movie.time}</span>
                </li>
                <li>
                    <label>Diễn viên:</label>
                    <span> {movie.actor.join(", ")}</span>
                </li>
            </div>
        );
    };

    const renderSeriesMovieInfo = () => {
        return (
            <div>
                <li>
                    <label>Đang phát:</label>{" "}
                    {movie.episode_current.includes("Hoàn tất") ?
                        <span className="type"> {movie.episode_current}</span> :
                        <span className="type"> {movie.quality} {movie.lang}</span>
                    }
                </li>

                <li>
                    <label>Năm phát hành:</label>{" "}
                    <span> {movie.year}</span>
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
                    <label>Đạo diễn:</label>{" "}
                    <span>{movie.director.join(", ")}</span>
                </li>
                <li>
                    <label>Thời lượng:</label>{" "}
                    <span>{movie.episode_total} Tập</span>
                </li>
                <li>
                    <label>Diễn viên:</label>
                    <span> {movie.actor.join(", ")}</span>
                </li>
            </div>
        );
    };

    return (
        <div className="movie-container">
            <div className="breadcrumb">
                <span itemProp="name">
                    <FaHome className="item" />
                    <Link className="title-link" to="/movies">
                        {" "}
                        Xem Phim
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
                <li> {movie.name}</li>
            </div>
            <div className="info">
                <div className="image">
                    <div className="movie" style={{ backgroundImage: `url(${movie.poster_url})` }}>
                        <img className="poster" src={movie.thumb_url} alt={movie.name} />
                        <Link className='link-btn' to={`/xem/${movie.slug}`}>
                            <IoIosPlayCircle className="play-icons" /></Link>
                        <div className="text">
                            <h1>{movie.name}</h1>
                            <h2>{movie.origin_name} ({movie.year})</h2>
                            <div className="list-btn">

                                <button className="play"><FaRegCirclePlay className="item" />Xem phim</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="latest-episode">
                    <span className="heading">Tập mới nhất :</span>
                    {episodes.map(
                        (episode, index) =>
                            episode.server_data.length > 1 && (
                                <li className="item-chapter" key={index}>
                                    <strong>{episode.name}</strong>
                                    {episode.server_data
                                        .slice(-5)
                                        .sort((a, b) => {
                                            const episodeNumberA = parseInt(a.slug.split("-")[1]);
                                            const episodeNumberB = parseInt(b.slug.split("-")[1]);
                                            return episodeNumberB - episodeNumberA;
                                        })
                                        .map((item, idx) => (
                                            <button className="name-chapter" key={-idx}>
                                                {item.name}
                                            </button>
                                        ))}
                                </li>
                            )
                    )}
                </div>
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
                        {movie.type === 'single' ? renderSingleMovieInfo() : renderSeriesMovieInfo()}
                    </ul>
                    <div className="film-content">
                        <h3 className="film-heading">
                            Nội dung phim:
                        </h3>
                        <div className="text-decs"><strong>{movie.name} {movie.origin_name} {movie.year}</strong> {movie.content}</div>
                    </div>
                   
                    <div className="tags-film">
                        <h2 className="tag-header">Tags</h2>
                        <div className="tag-content">
                            <li className="tag-btn">{movie.name} </li>
                            <li className="tag-btn">{movie.origin_name} </li>
                        </div>
                    </div>
                </div>


                <div className="comment">
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
                </div>
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