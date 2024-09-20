import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCaretRight } from "react-icons/fa";
import React from 'react';
import { Link } from "react-router-dom";
import { FaCaretLeft } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import "./Film.scss"
import "./responsive.scss"
const PrevArrow = ({ onClick }) => (
    <button className="slick-prev custom-arrow1 " onClick={onClick}><FaCaretLeft /></button>
);

const NextArrow = ({ onClick }) => (
    <button className="slick-next custom-arrow1  " onClick={onClick}><FaCaretRight /></button>
);
function MovieSlider({data}) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

   

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
                                    <LazyLoadImage
                                        src={`https://img.phimapi.com/${item.poster_url}`} alt={item.name} />
                                    <p>{item.name}</p>
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