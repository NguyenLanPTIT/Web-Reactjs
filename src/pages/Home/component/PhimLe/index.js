import React, { useEffect, useState } from 'react';
import "../PhimBo.scss";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

const listButton = [
    { name: "Hành Động" },
    { name: "Hoạt Hình" },
    { name: "Kinh Dị" },
    { name: "Hài Hước" }
];

const getRandomItems = (arr, num) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

function PhimLe({ data }) {
    const [displayItems, setDisplayItems] = useState([]);

    useEffect(() => {
        if (data.data.items.length > 12) {
            const itemsToDisplay = getRandomItems(data.data.items, 12);
            setDisplayItems(itemsToDisplay);
        } else {
            setDisplayItems(data.data.items);
        }
    }, [data]);

    const handleCategoryClick = (categoryName) => {
        const filteredMovies = categoryName === 'All'
            ? data.data.items
            : data.data.items.filter(movie =>
                movie.category.some(c => c.name === categoryName)
            );
        setDisplayItems(filteredMovies);
    };

    return (
        <>
            <div className='movie'>
                <div className="movie__heading">
                    <div className="heading__content">
                        <h2><Link className='link' to="/categories/phim-le">PHIM LẺ MỚI CẬP NHẬT</Link></h2>
                        <div className="heading__type">
                            {listButton.map((item, i) => (
                                <li key={i} onClick={() => handleCategoryClick(item.name)}>
                                    <p>{item.name}</p>
                                </li>
                            ))}
                        </div>
                    </div>
                    <li className='btn-all'><Link className='link-btn' to="/categories/phim-le">Xem tất cả</Link>
                        <FaCaretRight />
                    </li>
                </div>
                <div className="movie__list">
                    {displayItems.map((item, index) => (
                        <div key={index} className={`movie__item ${index === 0 ? 'large' : ""}`}>
                            <Link className="link" to={`/movies/${item.slug}`}>
                                <span className="lable">HD-{item.lang}</span>
                                <div className='movie__image'>
                                    <img src={`https://img.phimapi.com/${item.poster_url}`} alt={item.name} />
                                    <p>{item.name}</p>
                                    <div className='play-movie'>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PhimLe;