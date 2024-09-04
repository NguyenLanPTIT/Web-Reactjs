import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCaretRight } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaCaretLeft } from "react-icons/fa";

import "./phimdecu.scss"

const PrevArrow = ({ onClick }) => (
    <button className="slick-prev custom-arrow " onClick={onClick}><FaCaretLeft /></button>
  );
  
  const NextArrow = ({ onClick }) => (
    <button className="slick-next custom-arrow  " onClick={onClick}><FaCaretRight /></button>
  );
function MovieSlider() {
    const settings = {
        dots: false,
        infinite: true,
        // speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        // autoplaySpeed: 2000
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: true
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
                <div className='movie__heading mar-8'>
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
                                    <div className='play-movie'>
                                    </div>
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