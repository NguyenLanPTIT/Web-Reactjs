import React, { useEffect, useState } from 'react';
import "./phimmoi.scss";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";



const getRandomItems = (arr, num) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

function PhimMoi() {
    const [movies, setMovies] = useState([]);
    const [displayItems, setDisplayItems] = useState([]);

    useEffect(() => {
        fetch('https://phimapi.com/v1/api/danh-sach/hoat-hinh?skip=1&limit=64')

            .then(response => response.json())
            .then(data => {
                setMovies(data.data.items);
                setDisplayItems(data.data.items);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        if (displayItems.length > 10) {
            const itemsToDisplay = getRandomItems(displayItems, 10);
            setDisplayItems(itemsToDisplay);
        }
    }, [displayItems]);

    return (
        <div className='movie'>
            <div className="movie__heading">
                <div className="heading__content">
                    <h2><Link className='link' to="/categories/phim-sap-chieu">PHIM MỚI SẮP CHIẾU</Link></h2>
                </div>
                <li className='btn-all'><Link className='link-btn' to="/categories/phim-sap-chieu">Xem tất cả</Link>
                    <FaCaretRight />
                </li>
            </div>
            <div className="movie__list">
                {displayItems.map(item => (
                    <div key={item._id} className="movie__item">
                        <Link className="link" to={`/movies/${item.slug}`}>
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
        </div >
    );
}

export default PhimMoi;