import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../../../Home/PhimBo.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { FaCaretRight } from "react-icons/fa";

const listButton = [
  {
    name: "Phim Lẻ",
    type: "Phim Lẻ Thịnh Hành",
  },
  {
    name: "Phim Bộ",
    type: "Phim Bộ Thịnh Hành",
  },
];

const getRandomItems = (arr, num) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

function Movies({ data }) {
  const [displayItems, setDisplayItems] = useState([]);
  const [currentType, setCurrentType] = useState("all");

  useEffect(() => {
    if (currentType === "all") {
      setDisplayItems(data);
    } else {
      const filteredMovies = data.filter(
        (movie) => movie.titlePage === currentType
      );
      setDisplayItems(filteredMovies);
    }
  }, [currentType, data]);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      let numItems;
      if (screenWidth < 600) {
        numItems = 7;
      } else if (screenWidth < 800) {
        numItems = 6;
      } else if (screenWidth < 1200) {
        numItems = 5;
      } else {
        numItems = 7;
      }
      if (data.length > numItems) {
        const itemsToDisplay = getRandomItems(data, numItems);
        setDisplayItems(itemsToDisplay);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [data]);

  return (
    <div className="movie">
      <div className="movie__heading">
        <div className="heading__content">
          <h2>
            <Link className="link" to="/categories/phim-hot">
              PHIM THỊNH HÀNH
            </Link>
          </h2>
          <div className="heading__type">
            {listButton.map((item, i) => (
              <li key={i} onClick={() => setCurrentType(item.name)}>
                <p>{item.type}</p>
              </li>
            ))}
          </div>
        </div>
        <li className="btn-all">
          <Link className="link-btn" to="/categories/phim-hot">
            Xem tất cả
          </Link>
          <FaCaretRight />
        </li>
      </div>
      <div className="mobile__heading">
        <Link className="link" to="/categories/phim-hot">
          <h2>PHIM THỊNH HÀNH</h2>
        </Link>
        <Link className="link-btn" to="/categories/phim-bo">
          Xem tất cả
          <FaCaretRight />
        </Link>

        <ul className="mobile__type">
            {listButton.map((item, i) => (
              <li key={i} onClick={() => setCurrentType(item.name)}>
                <p>{item.type}</p>
              </li>
            ))}
          </ul>
      </div>
      <div className="movie__list">
        {displayItems.map((item, index) => (
          <div
            key={index}
            className={`movie__item ${index === 0 ? "large" : ""}`}
          >
            <Link className="link" to={`/movies/${item.slug}`}>
              <span className="lable">HD-{item.lang}</span>
              <div className="movie__image">
              <LazyLoadImage
                  src={`https://img.phimapi.com/${item.poster_url}`}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <div className="play-movie"></div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
