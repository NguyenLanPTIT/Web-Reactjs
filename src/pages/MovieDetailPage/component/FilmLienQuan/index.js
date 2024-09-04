import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCaretRight } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaCaretLeft } from "react-icons/fa";
import "./Film.scss"
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
        //  autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: true
    };
    
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
            <div className='movie-recent'>
                <div className='movie__heading '>
                    <p>CÓ THỂ BẠN CŨNG MUỐN XEM</p>
                </div>
                <Slider {...settings} className='slider-recent'>
                    {data.map(item => (
                        <div key={item._id} className="movie__item1">
                            <Link className="link" to={`/movies/${item.slug}`}>
                                <span className="lable1">
                                    {item.year}</span>
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