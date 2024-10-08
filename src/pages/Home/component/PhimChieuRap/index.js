import React, { useEffect, useState } from "react";
import "../../../Home/PhimBo.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';


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

function PhimLe({ data }) {
  const [displayItems, setDisplayItems] = useState([]);

  const handleCategoryClick = (categoryName) => {
    const filteredMovies =
      categoryName === "All"
        ? data.data.items
        : data.data.items.filter((movie) =>
            movie.category.some((c) => c.name === categoryName)
          );
    setDisplayItems(filteredMovies);
  };

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      let numItems;
      if (screenWidth < 1200) {
        numItems = 9;
      } else {
        numItems = 12;
      }

      if (data.data.items.length > numItems) {
        const itemsToDisplay = getRandomItems(data.data.items, numItems);
        setDisplayItems(itemsToDisplay);
      } else {
        setDisplayItems(data.data.items);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [data]);

  return (
    <>
      <div className="movie">
        <div className="movie__heading">
          <div className="heading__content">
            <h2>
              <Link className="link" to="/categories/phim-chieu-rap">
                PHIM CHIẾU RẠP MỚI
              </Link>
            </h2>{" "}
            <div className="heading__type">
              {listButton.map((item, i) => (
                <li key={i} onClick={() => handleCategoryClick(item.name)}>
                  <p> {item.name}</p>
                </li>
              ))}
            </div>
          </div>
          <li className="btn-all">
            <Link className="link-btn" to="/categories/phim-chieu-rap">
              Xem tất cả
            </Link>
            <FaCaretRight />
          </li>
        </div>
        <div className="mobile__heading">
          <Link className="link" to="/categories/phim-chieu-rap">
            <h2> PHIM CHIẾU RẠP MỚI</h2>{" "}
          </Link>
          <Link className="link-btn" to="/categories/phim-chieu-rap">
            Xem tất cả
            <FaCaretRight />
          </Link>

          <ul className="mobile__type">
            {listButton.map((item, i) => (
              <li key={i} onClick={() => handleCategoryClick(item.name)}>
                <p>{item.name}</p>
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
                 effect="blur"
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
    </>
  );
}
export default PhimLe;
