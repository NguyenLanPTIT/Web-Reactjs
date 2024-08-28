import React, { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import avataImage from "../../../../image/avata.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import "../info.scss";
function DieuKhoan() {
  const [isFocused, setIsFocused] = useState(false);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Mới nhất");
  const [isFirstFocus, setIsFirstFocus] = useState(true);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const handlePostComment = () => {
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        name: "Tên Người Dùng",
        cmt: comment,
      };
      setComments([newComment, ...comments]);
      setComment("");
    }
  };
  return (
    <div className="container-cs">
      <div className="static-page">
        <div className="title">
          <h1>Điều Khoản Sử Dụng</h1>
        </div>
        <div class="news-content">
          <p>
          Điều Khoản Sử Dụng
          </p>
         
        </div>
        <div className="comment">
          <div className="content-cmt">
            <div className="header-cmt">
              <div className="number">0 bình luận</div>
              <div className="sort">
                <span> Sắp xếp theo</span>
                <button className="dropbtn" onClick={toggleDropdown}>
                  {selectedOption}
                  <IoMdArrowDropup className="up" />
                  <IoMdArrowDropdown className="down" />
                </button>
              </div>
            </div>
            <div className="write-cmt">
              <img src={avataImage} alt="avata1" />
              <div className="text-btn">
                <input
                  type="text"
                  value={comment}
                  placeholder="Viết bình luận..."
                  onFocus={() => {
                    if (isFirstFocus) {
                      setIsFirstFocus(false);
                    }
                    setIsFocused(true);
                  }}
                  onBlur={() => setIsFocused(false)}
                  onChange={(e) => setComment(e.target.value)}
                />
                {isFocused && !isFirstFocus && (
                  <div className="btn-cmt">
                    <button className="push" onClick={handlePostComment}>
                      Đăng
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="list-cmt">
              {comments.map((cmt, index) => (
                <div key={cmt.id} className="cmt-item">
                  <img src={avataImage} alt="avata2" />
                  <div className="item-content">
                    <span className="name">{cmt.name}</span>
                    <p className="item-decs">{cmt.cmt}</p>
                    <div className="feeling">
                      <p className="like">Thích</p>
                      <span>.</span>
                      <p className="reply">Phản hồi</p>
                      <span>.</span>
                      <p className="time">1 tuần</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="plugin">
                <div className="content-plugin">
                <FaFacebookSquare className="fb-icons"/>
                <p>Plugin bình luận trên Facebook</p>

                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DieuKhoan;
