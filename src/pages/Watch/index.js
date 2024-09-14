import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhimDeCuMoi from "../MovieDetailPage/component/PhimDeCuMoi";
import PhimLienQuan from "../MovieDetailPage/component/FilmLienQuan";
import { Link } from "react-router-dom";
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
import OffQC from "../../image/OffQC.webp";
import { FaAngleRight } from "react-icons/fa6";
import ReactPlayer from "react-player";
import Hls from 'hls.js';
import { useNavigate } from "react-router-dom";
import "./watch.scss";

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

function Watch() {
    const { slug, episodeName } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [episodes, setEpisodes] = useState(null);
    const [currentEpisode, setCurrentEpisode] = useState({});

    const [currentEpisodeUrl, setCurrentEpisodeUrl] = useState(null);
    const [currentEpisodeName, setCurrentEpisodeName] = useState("");

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Mới nhất");
    const [comments, setComments] = useState(initialComments);
    const [comment, setComment] = useState("");
    const [isFirstFocus, setIsFirstFocus] = useState(true);
    const [isFocused, setIsFocused] = useState(false);
    const [isHls, setIsHls] = useState(false);

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


    const [isActive, setIsActive] = useState(true);
    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`https://phimapi.com/phim/${slug}`);
                const data = await response.json();
                console.log('Data loaded:', data);
                if (data.episodes && data.episodes.length > 0) {
                    setMovie(data.movie);
                    setEpisodes(data.episodes);
                    const foundEpisode = episodeName
                        ? data.episodes[0].server_data.find(ep => ep.name.replace(/\s+/g, '-').toLowerCase() === episodeName)
                        : data.episodes[0].server_data[0]
                        ;
                    setCurrentEpisode(foundEpisode);
                    setCurrentEpisodeUrl(foundEpisode.link_embed);
                    console.log('Current episode set:', foundEpisode);
                    if (foundEpisode.link_embed.includes(".m3u8")) {
                        setIsHls(true);
                    } else {
                        setIsHls(false);
                    }

                }
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        fetchMovieDetails();
    }, [slug, episodeName]);
    useEffect(() => {
        if (isHls && Hls.isSupported()) {
            const video = document.getElementById('video');
            console.log({video});
            if (video) {
                console.log({currentEpisodeUrl});
                const hls = new Hls();
                hls.loadSource(currentEpisodeUrl?.split('url=')[1]);
                hls.attachMedia(video);
                hls.on(Hls.Events.MANIFEST_PARSED, function () {
                    video.play();
                  });
                return () => {
                    hls.destroy();
                };
            }
            console.log("Current episode URL:", currentEpisodeUrl);
            console.log("Is HLS:", isHls);
        }
    }, [isHls, currentEpisodeUrl]); 



    const handleEpisodeClick = (item) => {
        setCurrentEpisode(item);
        setCurrentEpisodeUrl(item.link_embed);
        setCurrentEpisodeName(item.name);
        const episodeSlug = item.name.replace(/\s+/g, '-').toLowerCase();
        navigate(`/xem/${slug}/${episodeSlug}`);
    };
    const renderPlayer = () => {
        if (!currentEpisodeUrl) return <div>Loading...</div>;

        if (isHls) {
            return <video id="video" width="100%" height="100%" autoPlay loop controls />;
        } else {
            return (
                <ReactPlayer
                    url={currentEpisodeUrl}
                    playing={true}
                    controls={true}
                    width="100%"
                    height="100%"
                />
            );
        }
    };

    if (!movie) {
        return <div>Movie not found</div>;
    }

    const renderSingleMovieInfo = () => {
        return <div className="list-server"></div>;
    };

    const renderSeriesMovieInfo = () => {
        return (
            <div className="list-server">
                <div className="server-group">
                    <span>
                        {" "}
                        <FaDatabase className="icon-data" />
                        Danh sách tập #PM
                    </span>
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
                                                    className={`name-chapter ${item.slug === currentEpisode.slug ? 'active' : ''}  `}
                                                    key={idx}
                                                    onClick={() =>
                                                        handleEpisodeClick(item)
                                                    }
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
                Truy cập <font color="red">PhimMoiPlus.Net</font>
                sẽ chuyển tới link PhimMoiChill mới nhất
            </div>
            <div className="breadcrumb">
                <li itemProp="itemListElement" className="title">
                    <Link className="title-link" to="/movies">
                        <span itemProp="name">
                            <FaHome />
                            <p>Xem Phim</p>
                            <FaAngleRight className="item" />
                        </span>
                    </Link>
                </li>
                <li className="name" itemProp="name">
                    {movie.category.map((category, index) => (
                        <span className="item-category" key={index}>
                            Phim {category.name}
                            <FaAngleRight className="item" />
                        </span>
                    ))}
                </li>
                <li className="name-movie">
                    {" "}
                    {movie.name} <FaAngleRight className="item" />
                </li>
                <li className="chaper-movie">
                    {movie.type === "single" ? "Tập Full" : currentEpisode ? currentEpisode.name : 'Loading...'}
                </li>
            </div>
            <div className="box-player">
                {renderPlayer()}
                <div className="film-note">
                    Phim Xem tốt nhất trên trình duyệt Safari,FireFox hoặc Chrome. Đừng
                    tiếc 1 comment bên dưới để đánh giá phim hoặc báo lỗi. Đổi server nếu
                    lỗi,lag
                </div>
                <div className="hide"></div>
                <div className="options">
                    <ul className="tool">
                        <li className="off-ads">
                            <span>Tắt QC</span>
                            <img src={OffQC} alt="Tắt QC" />
                        </li>
                        <li className="power-lamp">
                            <span className="text-lamp">Tắt đèn</span>
                            <div className="off-lamp">
                                <FaPowerOff />
                            </div>
                        </li>
                        <li className="autoplay">
                            <span>Tự chuyển tập</span>
                            <div className={`toggle-button ${isActive ? "active" : ""}`}>
                                <div className="buttons">
                                    <button
                                        onClick={() => setIsActive(false)}
                                        className={`button no ${!isActive ? "no-active" : ""}`}
                                    >
                                        NO
                                    </button>
                                    <button
                                        onClick={() => setIsActive(true)}
                                        className={`button yes ${isActive ? "selected" : ""}`}
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
            {movie.type === "single"
                ? renderSingleMovieInfo()
                : renderSeriesMovieInfo()}
            <div className="box-rating">
                <p>
                    Đánh giá phim
                    <span className="text">(8đ / 35 lượt)</span>{" "}
                </p>
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
                        <MdSaveAlt className="save-icon" />
                        Lưu vào Facebook
                    </button>
                </div>
            </div>
            <div className="film-info">
                <div className="film-content">
                    <h1 className="film-heading">
                        {movie.name} -   {movie.type === "single" ? "Tập Full" : currentEpisode ? currentEpisode.name : 'Loading...'}


                    </h1>
                    <h2 className="decs-head"> {movie.origin_name} </h2>
                    <p className="decs-text">
                        {movie.name} {movie.origin_name} {movie.year} {movie.content}
                    </p>
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
                            <img src={avataImage} alt="avata1" />
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
                                    <img src={avata2} alt="avata2" />
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
                    <PhimLienQuan />
                </div>
                <div>
                    <PhimDeCuMoi />
                </div>
            </div>
        </div>
    );
}

export default Watch;
