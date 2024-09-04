import React, { useEffect, useState } from "react";
import "../PhimBo.scss";

import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

const listButton = [
  {
    name: 2023,
  },
  {
    name: 2022,
  },
  {
    name: 2021,
  },
  {
    name: 2020,
  },
];

const getRandomItems = (arr, num) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

function PhimLe() {
  const [movies, setMovies] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);

  const handleCategoryClick = (categoryName) => {
    const filteredMovies =
      categoryName === "All"
        ? movies
        : movies.filter((movie) => movie.year === categoryName);

    setDisplayItems(filteredMovies);
  };

  useEffect(() => {
    fetch("https://phimapi.com/v1/api/danh-sach/tv-shows?skip=1&limit=64")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.data.items);
        setDisplayItems(data.data.items);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (displayItems.length > 12) {
      const itemsToDisplay = getRandomItems(displayItems, 12);
      setDisplayItems(itemsToDisplay);
    }
  }, [displayItems]);

  return (
    <>
      <div className="movie">
        <div className="movie__heading">
          <div className="heading__content">
            <h2>
              <Link className="link" to="/categories/tv-shows">
                PHIM CHIẾU RẠP MỚI
              </Link>
            </h2>{" "}
            <div className="heading__type">
              {listButton.map((item, i) => (
                <button key={i} onClick={() => handleCategoryClick(item.name)}>
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <button>
            <Link className="link-btn" to="/categories/tv-shows">
              Xem tất cả
            </Link>
            <FaCaretRight />
          </button>
        </div>
        <div className="movie__list">
          {displayItems.map((item, index) => (
              <Link  key={index} className={`movie__item ${index === 0 ? 'large' : ""}`} to={`/movies/${item.slug}`}>
                <span className="lable">HD-{item.lang}</span>
                <div className="movie__image">
                  <img
                    src={`https://img.phimapi.com/${item.poster_url}`}
                    alt={item.name}
                  />
                  <h3>{item.name}</h3>
                  <div className='play-movie'>
                  </div>
                </div>
              </Link>
          ))}
        </div>
      </div>
    </>
  );
}
export default PhimLe;
