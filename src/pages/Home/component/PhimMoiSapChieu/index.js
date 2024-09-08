import React, { useEffect, useState } from 'react';
import "./phimmoi.scss";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";



const getRandomItems = (arr, num) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

function PhimMoi({data}) {
    const [displayItems, setDisplayItems] = useState([]);

    useEffect(() => {
        if (data.data.items.length > 10) {
            const itemsToDisplay = getRandomItems(data.data.items, 10);
            setDisplayItems(itemsToDisplay);
        } else {
            setDisplayItems(data.data.items);
        }
    }, [data]);

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
                                <p>{item.name}</p>
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