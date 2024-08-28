import React, { useEffect, useState } from 'react';
import { IoIosPlayCircle } from "react-icons/io";
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
        fetch('https://phimapi.com/danh-sach/phim-moi-cap-nhat')

            .then(response => response.json())
            .then(data => {
                console.log(data);
                const movies2024 = data.items.filter(movie => movie.year === 2024||movie.year === 2020);
                setMovies(movies2024);
                setDisplayItems(movies2024);
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
                    <h2><Link className='link' to="/categories/hoat-hinh">PHIM MỚI SẮP CHIẾU</Link></h2>
                </div>
                <button><Link className='link-btn' to="/categories/hoat-hinh">Xem tất cả</Link>
                        <FaCaretRight />
                    </button>
            </div>
            <div className="movie__list">
                {displayItems.map(item => (
                    <div key={item._id} className="movie__item">
                        <Link className="link" to={`/movies/${item.slug}`}>
                            <span className="text-lable"></span>
                            <div className='movie__image'>
                                <img src={item.poster_url} alt={item.name} />
                                <h3>{item.name}</h3>
                                <IoIosPlayCircle className="play-icons" />
                            </div>
                        </Link>

                    </div>
                ))}
            </div>
        </div >
    );
}

export default PhimMoi;