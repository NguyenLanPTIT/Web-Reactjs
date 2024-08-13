import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';
import { IoIosPlayCircle } from "react-icons/io";
import { Link } from "react-router-dom";

import "./Film.scss"
function MovieSlider() {
    const settings = {
        dots: false,
        infinite: true,
        // speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        // autoplaySpeed: 2000
    };
    function getLabel(movie) {
        if (movie.episode_current) {
            return movie.episode_current;
        } else if (movie.lang) {
            return `HD|${movie.lang}`;
        } else {
            return 'HD';
        }
    }
    const [data, setMovies] = useState([]);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const [responseOne, responseTwo, responseThree, responseFour] = await Promise.all([
                    fetch('https://phimapi.com/v1/api/danh-sach/phim-le'),
                    fetch('https://phimapi.com/v1/api/danh-sach/phim-bo'),
                    fetch('https://phimapi.com/v1/api/danh-sach/hoat-hinh'),
                    fetch('https://phimapi.com/v1/api/danh-sach/tv-shows')
                ]);

                const moviesOne = await responseOne.json();
                const moviesTwo = await responseTwo.json();
                const moviesThree = await responseThree.json();
                const moviesFour = await responseFour.json();

                // Trộn và xáo trộn dữ liệu
                const combinedMovies = [...moviesOne.data.items, ...moviesTwo.data.items, ...moviesThree.data.items, ...moviesFour.data.items];
                const shuffledMovies = combinedMovies.sort(() => 0.5 - Math.random());
                setMovies(shuffledMovies);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <>
            <div className='movie'>
                <div className='movie__heading'>
                    <h2>PHIM ĐỀ CỬ</h2>
                </div>
                <Slider {...settings} className='slider'>
                    {data.map(item => (
                        <div key={item._id} className="movie__item">
                            <Link className="link" to={`/movies/${item.slug}`}>
                                <span className="lable">
                                    {getLabel(item)}</span>
                                <div className='movie__image'>
                                    <img src={`https://img.phimapi.com/${item.poster_url}`} alt={item.name} />
                                    <h3>{item.name}</h3>
                                    <IoIosPlayCircle className="play-icons" />

                                </div>
                            </Link>

                        </div>
                    ))}
                </Slider>
            </div>

        </>
    );
}
export default MovieSlider