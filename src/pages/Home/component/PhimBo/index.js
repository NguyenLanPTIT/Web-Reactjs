import React, { useEffect, useState } from "react";
import "../../../Home/PhimBo.scss";

import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

const listButton = [
  {
    name: "Hàn Quốc",
  },
  {
    name: "Trung Quốc",
  },
  {
    name: "Âu-Mỹ",
  },
  {
    name: "Phim Bộ Full",
  },
];

const getRandomItems = (arr, num) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

function PhimBo({ data }) {
  const [displayItems, setDisplayItems] = useState([]);

  const [hoverStates, setHoverStates] = useState({});

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
  const handleCategoryClick = (countryName) => {
    const filteredMovies =
      countryName === "All"
        ? data.data.items
        : data.data.items.filter((movie) =>
          movie.country.some((c) => c.name === countryName)
        );

    setDisplayItems(filteredMovies);
  };

  return (
    <>
      <div className="movie">
        <div className="movie__heading">
          <div className="heading__content">
            <h2>
              <Link className="link" to="/categories/phim-bo">
                PHIM BỘ MỚI CẬP NHẬT
              </Link>
            </h2>{" "}

            <div className="heading__type">
              {listButton.map((item, i) => (
                <li key={i} onClick={() => handleCategoryClick(item.name)}>
                  <p>{item.name}</p>
                </li>
              ))}
            </div>
          </div>
          <li className="btn-all">
            <Link className="link-btn" to="/categories/phim-bo">
              Xem tất cả
            </Link>
            <FaCaretRight />
          </li>
        </div>
        <div className="mobile__heading">
          <Link className="link" to="/categories/phim-bo">
            <h2> PHIM BỘ MỚI CẬP NHẬT</h2>{" "}

          </Link>
          <Link className="link-btn" to="/categories/phim-bo">
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
              onMouseEnter={() =>
                setHoverStates((prev) => ({ ...prev, [index]: true }))
              }
              onMouseLeave={() =>
                setHoverStates((prev) => ({ ...prev, [index]: false }))
              }
            >
              <Link className="link" to={`/movies/${item.slug}`}>
                <span className="lable">HD-{item.lang}</span>
                <div className="movie__image">
                  <img
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
export default PhimBo;
