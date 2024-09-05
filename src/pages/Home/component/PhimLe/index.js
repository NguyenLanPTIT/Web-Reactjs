import React, { useEffect, useState } from 'react';
import "../PhimBo.scss";
import { Link } from "react-router-dom";
import { IoIosPlayCircle } from "react-icons/io";
import { FaCaretRight } from "react-icons/fa";

import { FaPlay } from "react-icons/fa";


const listButton = [
    {
        name: "Hành Động"
    },
    {
        name: "Hoạt Hình"
    },
    {
        name: "Kinh Dị"
    },
    {
        name: "Hài Hước"
    },
]

const getRandomItems = (arr, num) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

function PhimLe() {
    const [movies, setMovies] = useState([]);
    const [displayItems, setDisplayItems] = useState([]);

    const handleCategoryClick = (categoryName) => {
        const filteredMovies = categoryName === 'All'
            ? movies
            : movies.filter(movie =>
                movie.category.some(c => c.name === categoryName)
            );

        setDisplayItems(filteredMovies);
    };

    useEffect(() => {
        fetch('https://phimapi.com/v1/api/danh-sach/phim-le?skip=1&limit=64')
            .then(response => response.json())
            .then(data => {
                setMovies(data.data.items);
                setDisplayItems(data.data.items);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    useEffect(() => {
        if (displayItems.length > 12) {
            const itemsToDisplay = getRandomItems(displayItems, 12);
            setDisplayItems(itemsToDisplay);
        }
    }, [displayItems]);

    return (
        <>
            <div className='movie'>
                <div className="movie__heading">
                    <div className="heading__content">
                        <h2><Link className='link' to="/categories/phim-le">PHIM LẺ MỚI CẬP NHẬT</Link></h2>
                        <div className="heading__type">
                            {
                                listButton.map((item, i) => <li key={i} onClick={() => handleCategoryClick(item.name)}>
                                    <p>{item.name}</p></li>)
                            }
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
                                    <h3>{item.name}</h3>
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
