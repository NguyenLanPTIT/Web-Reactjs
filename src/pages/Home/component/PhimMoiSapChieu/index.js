import React, { useEffect, useState } from "react";
import "./phimmoi.scss";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

const getRandomItems = (arr, num) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

function PhimMoi({ data }) {
  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      let numItems;
      if (screenWidth < 600) {
        numItems = 10;
      } else if (screenWidth < 800) {
        numItems = 9;
      } else if (screenWidth < 1200) {
        numItems = 8;
      } else {
        numItems = 10;
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
    <div className="movie">
      <div className="movie__heading">
        <div className="heading__content">
          <h2>
            <Link className="link" to="/categories/phim-sap-chieu">
              PHIM MỚI SẮP CHIẾU
            </Link>
          </h2>
        </div>
        <li className="btn-all">
          <Link className="link-btn" to="/categories/phim-sap-chieu">
            Xem tất cả
          </Link>
          <FaCaretRight />
        </li>
      </div>
      <div className="mobile__heading">
        <Link className="link" to="/categories/phim-sap-chieu">
          <h2>PHIM MỚI SẮP CHIẾU</h2>
        </Link>
        <Link className="link-btn" to="/categories/phim-sap-chieu">
          Xem tất cả
        <FaCaretRight />

        </Link>
      </div>

      <div className="movie__list">
        {displayItems.map((item) => (
          <div key={item._id} className="movie__item">
            <Link className="link" to={`/movies/${item.slug}`}>
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
  );
}

export default PhimMoi;
