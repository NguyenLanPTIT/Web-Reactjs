import React, { useEffect, useState } from 'react';
import './phimthinhhanh.scss';
const listButton = [
    {
        name: "Phim Lẻ Thịnh Hành"
    },
    {
        name: "Phim Bộ Thịnh Hành"

    },
]
const getRandomItems = (arr, num) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

function PhimThinhHanh() {
    const [movies, setMovies] = useState([]);
    const [displayItems, setDisplayItems] = useState([]);

    const handleCategoryClick = (categoryName) => {
        const filteredMovies = categoryName === 'All'
            ? movies
            : movies.filter(movie => movie.titlePage === categoryName);
        setDisplayItems(filteredMovies);
    };

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const [responseOne, responseTwo] = await Promise.all([
                    fetch('https://phimapi.com/v1/api/danh-sach/phim-le'),
                    fetch('https://phimapi.com/v1/api/danh-sach/phim-bo'),

                ]);

                const moviesOne = await responseOne.json();
                const moviesTwo = await responseTwo.json();


                const combinedMovies = [...moviesOne.data.items, ...moviesTwo.data.items];
                const shuffledMovies = combinedMovies.sort(() => 0.5 - Math.random());
                setMovies(shuffledMovies);
                setDisplayItems(shuffledMovies);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    useEffect(() => {
        if (displayItems.length > 7) {
            const itemsToDisplay = getRandomItems(displayItems, 7);
            setDisplayItems(itemsToDisplay);
        }
    }, [displayItems]);

    return (
        <>
            <div className='movie'>
                <div className="movie__heading">
                    <div className="heading__content">
                        <h2>PHIM THỊNH HÀNHT</h2>
                        <div className="heading__type">
                            {
                                listButton.map((item, i) => <button key={i} onClick={() => handleCategoryClick(item.name)}>{item.name}</button>)
                            }
                        </div>
                    </div>
                    <button onClick={() => handleCategoryClick('All')} >Xem tất cả
                    </button>
                </div>
                <div className="movie__list">
                    {displayItems.map(item => (
                        <div key={item._id} className="movie__item">
                            <span className="lable">HD-{item.lang}</span>
                            <div className='movie__image'>
                                <img src={`https://img.phimapi.com/${item.poster_url}`} alt={item.name} />
                                <h3>{item.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </>
    );
}
export default PhimThinhHanh;