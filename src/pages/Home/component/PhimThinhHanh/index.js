
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

function Movies() {
    const [movies, setMovies] = useState([]);
    const [displayItems, setDisplayItems] = useState([]);
    const [currentType, setCurrentType] = useState('all');
    const fetchMovies = async () => {
        try {
            const featureResponse = await fetch('https://phimapi.com/v1/api/danh-sach/phim-le?skip=1&limit=64');
            const featureData = await featureResponse.json();
            const seriesResponse = await fetch('https://phimapi.com/v1/api/danh-sach/phim-bo?skip=1&limit=64');
            const seriesData = await seriesResponse.json();

            const featureMovies = featureData.data.items.map(movie => ({
                ...movie,
                titlePage: featureData.data.titlePage
            }));
            const seriesMovies = seriesData.data.items.map(movie => ({
                ...movie,
                titlePage: seriesData.data.titlePage
            }));

            const combinedMovies = [...featureMovies, ...seriesMovies];
            setMovies(combinedMovies);
            setDisplayItems(combinedMovies);

        } catch (error) {
            console.error('Failed to fetch movies:', error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    useEffect(() => {
        if (currentType === 'all') {
            setDisplayItems(movies);
        } else {
            const filteredMovies = movies.filter(movie => movie.titlePage === currentType);
            setDisplayItems(filteredMovies);
        }
    }, [currentType, movies]);

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
                                <button key={i} onClick={() => setCurrentType(item.name)}>
                                    {item.type}
                                </button>
                            ))
                        }
                    </div>
                </div>
                <button><Link className="link-btn" to="/categories/phim-hot">Xem tất cả</Link>
                    <FaCaretRight />
                </button>
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
    );
}

export default Movies;