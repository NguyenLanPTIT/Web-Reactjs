import React, { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import avataImage from "../../../../image/avata.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import "../info.scss";
function KhieuNai() {
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
          <h1>Bản quyền và trách nhiệm nội dung</h1>
        </div>
        <div class="news-content">
          <h2>1. Trách nhiệm nội dung</h2>
          <p>
            Nội dung trên PhimChill được đăng bởi người sử dụng, vì vậy trách
            nhiệm về nội dung thuộc về người gửi bài lên trên hệ thống. Ban quản
            trị của trang web sẽ thường xuyên kiểm tra các nội dung trên trang
            và loại bỏ các nội dung vi phạm bản quyền, nội dung quảng cáo, spam,
            clip rác, nội dung xúc phạm, 18+ hay những nội dung không phù hợp
            với thuần phong mỹ tục, không trái với các quy định pháp luật.
          </p>
          <h2>2. Bản quyền</h2>
          <p>
            Là một trang web về thông tin giải trí, nhưng chúng tôi không cam
            kết chắc chắn rằng có thể kiểm soát mọi thông tin trên trang web.
            Bất kỳ hành vi xâm phạm đến bản quyền nào nếu được báo cáo sẽ bị Ban
            quản trị gỡ bỏ khỏi trang web trong thời gian sớm nhất.
          </p>
          <h2>3. Sở hữu trí tuệ</h2>
          <p>
            Mọi nội dung được đăng tải trên PhimChill, bao gồm thiết kế, logo,
            các phần mềm, chức năng kỹ thuật, cấu trúc trang đều thuộc bản quyền
            của PhimChill . Nghiêm cấm mọi sao chép, sửa đổi, trưng bày, phân
            phát, chuyển tải, tái sử dụng, xuất bản, bán, cấp phép, tái tạo hay
            sử dụng bất cứ nội dung nào của trang web cho bất kỳ mục đích nào mà
            không có sự xác nhận của Ban quản trị PhimChill .
          </p>
          <h2>4. Quy trình báo cáo vi phạm bản quyền</h2>
          <p>
            Nếu bạn tin rằng bất kỳ nội dung nào được phát hành thông qua
            PhimChill vi phạm quyền sở hữu trí tuệ của bạn, vui lòng thông báo
            cho chúng tôi về việc vi phạm bản quyền qua bình luận bên dưới (Chú
            ý trong comment phải có chi tiết thông tin liên hệ và đường link nội
            dung vi phạm bản quyền trên PhimChill ) Chúng tôi sẽ xử lý từng
            thông báo vi phạm bản quyền mà chúng tôi nhận được theo quy định của
            Điều khoản sử dụng của PhimChill và quy định của pháp luật sở hữu
            trí tuệ.
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
                <FaFacebookSquare className="fb-icons" />
                <p>Plugin bình luận trên Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KhieuNai;
