import React, { useEffect, useState } from "react";
import "../PhimBo.scss";

import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

const listButton = [
    {
        name: 2023,
    },
    {
        name: 2022,
    },
    {
        name: 2021,
    },
    {
        name: 2020,
    },
];

const getRandomItems = (arr, num) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

function PhimLe({ data }) {
    const [displayItems, setDisplayItems] = useState([]);

    const handleCategoryClick = (categoryName) => {
        const filteredMovies = categoryName === 'All'
            ? data.data.items
            : data.data.items.filter(movie =>
                movie.category.some(c => c.name === categoryName)
            );
        setDisplayItems(filteredMovies);
    };


    useEffect(() => {
        if (data.data.items.length > 12) {
            const itemsToDisplay = getRandomItems(data.data.items, 12);
            setDisplayItems(itemsToDisplay);
        } else {
            setDisplayItems(data.data.items);
        }
    }, [data]);


    return (
        <>
            <div className="movie">
                <div className="movie__heading">
                    <div className="heading__content">
                        <h2>
                            <Link className="link" to="/categories/phim-chieu-rap">
                                PHIM CHIẾU RẠP MỚI
                            </Link>
                        </h2>{" "}
                        <div className="heading__type">
                            {listButton.map((item, i) => (
                                <li key={i} onClick={() => handleCategoryClick(item.name)}>
                                    <p> {item.name}</p>
                                </li>
                            ))}
                        </div>
                    </div>
                    <li className='btn-all'>
                        <Link className="link-btn" to="/categories/phim-chieu-rap">
                            Xem tất cả
                        </Link>
                        <FaCaretRight />
                    </li>
                </div>
                <div className="movie__list">
                    {displayItems.map((item, index) => (
                        <Link key={index} className={`movie__item ${index === 0 ? 'large' : ""}`} to={`/movies/${item.slug}`}>
                            <span className="lable">HD-{item.lang}</span>
                            <div className="movie__image">
                                <img
                                    src={`https://img.phimapi.com/${item.poster_url}`}
                                    alt={item.name}
                                />
                                <p>{item.name}</p>
                                <div className='play-movie'>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
export default PhimLe;
