import React, { useEffect, useState } from "react";
import "../PhimBo.scss";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

const listButton = [
    {
        name: "Hàn Quốc",
    },
    {
        name: "Trung Quốc",
    },
    {
        name: "Âu-Mỹ",
    },
    {
        name: "Phim Bộ Full",
    },
];

const getRandomItems = (arr, num) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

function PhimBo() {
    const [movies, setMovies] = useState([]);
    const [displayItems, setDisplayItems] = useState([]);

    const [hoverStates, setHoverStates] = useState({});

    const handleCategoryClick = (countryName) => {
        const filteredMovies =
            countryName === "All"
                ? movies
                : movies.filter((movie) =>
                    movie.country.some((c) => c.name === countryName)
                );

        setDisplayItems(filteredMovies);
    };

    useEffect(() => {
        fetch("https://phimapi.com/v1/api/danh-sach/phim-bo?skip=1&limit=64")
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.data.items);
                setDisplayItems(data.data.items);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    useEffect(() => {
        if (displayItems.length > 12) {
            const itemsToDisplay = getRandomItems(displayItems, 12);
            setDisplayItems(itemsToDisplay);
        }
    }, [displayItems]);

    return (
        <>
            <div className="movie">
                <div className="movie__heading">
                    <div className="heading__content">
                        <h2>
                            <Link className="link" to="/categories/phim-bo">
                                PHIM BỘ MỚI CẬP NHẬT
                            </Link>
                        </h2>
                        <div className="heading__type">
                            {listButton.map((item, i) => (
                                <button key={i} onClick={() => handleCategoryClick(item.name)}>
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button>
                        <Link className="link-btn" to="/categories/phim-bo">
                            Xem tất cả
                        </Link>
                        <FaCaretRight />
                    </button>
                </div>
                <div className="movie__list">
                    {displayItems.map((item, index) => (
                        
                            <Link  key={index}
                            className={`movie__item ${index === 0 ? "large" : ""}`}
                            onMouseEnter={() =>
                                setHoverStates((prev) => ({ ...prev, [index]: true }))
                            }
                            onMouseLeave={() =>
                                setHoverStates((prev) => ({ ...prev, [index]: false }))
                            } to={`/movies/${item.slug}`}>
                                <span className="lable">HD-{item.lang}</span>
                                <div className="movie__image">
                                    <img
                                        src={`https://img.phimapi.com/${item.poster_url}`}
                                        alt={item.name}
                                    />
                                    <h3>{item.name}</h3>
                                    <div className="play-movie"></div>
                                </div>
                            </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
export default PhimBo;
