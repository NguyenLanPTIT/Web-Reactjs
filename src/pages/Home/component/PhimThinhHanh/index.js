
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import "../PhimBo.scss";
import { FaCaretRight } from "react-icons/fa";

const listButton = [
    {
        name: "Phim Lẻ",
        type: "Phim Lẻ Thịnh Hành"
    },
    {
        name: "Phim Bộ",
        type: "Phim Bộ Thịnh Hành"
    },
];

const getRandomItems = (arr, num) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

function Movies({data}) {
    const [displayItems, setDisplayItems] = useState([]);
    const [currentType, setCurrentType] = useState('all');


    useEffect(() => {
        if (currentType === 'all') {
            setDisplayItems(data);
        } else {
            const filteredMovies = data.filter(movie => movie.titlePage === currentType);
            setDisplayItems(filteredMovies);
        }
    }, [currentType, data]);

    useEffect(() => {
        if (displayItems.length > 7) {
            const itemsToDisplay = getRandomItems(displayItems, 7);
            setDisplayItems(itemsToDisplay);
        }
    }, [displayItems]);

    return (
        <div className='movie'>
            <div className="movie__heading">
                <div className="heading__content">
                    <h2><Link className="link" to="/categories/phim-hot">PHIM THỊNH HÀNH</Link></h2>
                    <div className="heading__type">
                        {
                            listButton.map((item, i) => (
                                <li key={i} onClick={() => setCurrentType(item.name)}>
                                    <p>{item.type}</p>
                                </li>
                            ))
                        }
                    </div>
                </div>
                <li className='btn-all'><Link className="link-btn" to="/categories/phim-hot">Xem tất cả</Link>
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
    );
}

export default Movies;