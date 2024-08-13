import React, { useState } from 'react';
import "./movie.scss";
import { Link } from "react-router-dom";
import { IoIosPlayCircle } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";


const Movie = ({ posterUrl, name, origin_name, thumbUrl, year,trailerUrl }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const toggleTrailer = () => {
    setShowTrailer(!showTrailer);
  };
  return (
    <div className="movie" style={{ backgroundImage: `url(${posterUrl})` }}>
      <img className="poster" src={thumbUrl} alt={{ name }} />
      <Link className='link-btn' to="/movie/:watch">
        <IoIosPlayCircle className="play-icons" /></Link>
      <div className="text">
        <h1>{name}</h1>
        <h2>{origin_name} ({year})</h2>
        <div className="list-btn">
          <button className="trailer" onClick={toggleTrailer}> <FaYoutube className="item" />Trailer</button>
          {showTrailer && (
            <div className="trailer-container">
              <iframe
                width="560"
                height="315"
                src={trailerUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <button className="play"><FaRegCirclePlay className="item" />Xem phim</button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
