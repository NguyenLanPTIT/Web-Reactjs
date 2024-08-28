import React, { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import avataImage from "../../../../image/avata.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import "../info.scss";
import { Link } from "react-router-dom";
function VeChungToi() {
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
          <h1>Về chúng tôi</h1>
        </div>
        <div className="news-content">
          <p>
            Chào mừng bạn đến với <Link className="title-link" to="/movies">PhimMoi</Link> trang web tuyệt vời
            để thỏa mãn niềm đam mê với điện ảnh và thư giãn sau những ngày làm
            việc căng thẳng!
          </p>
          <p>&nbsp;</p>
          <p>
            <strong>PhimMoi</strong> là một website xem phim trực tuyến hoàn
            toàn miễn phí, nơi bạn có thể khám phá và tận hưởng hàng ngàn bộ
            phim hấp dẫn từ nhiều thể loại khác nhau. Chúng tôi tập trung vào
            việc mang đến cho bạn những trải nghiệm giải trí đỉnh cao, đáp ứng
            mọi sở thích và độ tuổi.
          </p>
          <div className="image-logo">
            <img  src="https://phimmoichillv.net/dev/images/logo.png" alt="phimmoi"></img>
          </div>
          <p>
            Với <strong>PhimMoiChill</strong>, bạn sẽ tìm thấy một bộ sưu tập
            phong phú với hàng nghìn bộ phim từ cổ điển đến hiện đại, từ hành
            động, phiêu lưu đến tình cảm, hài hước hay kinh dị. Chúng tôi liên
            tục cập nhật và thêm mới những bộ phim hot nhất, giúp bạn không bao
            giờ bị lạc hậu với các xu hướng điện ảnh mới nhất.
          </p>
          <p>&nbsp;</p>
          <p>
            Đặc biệt, PhimMoiPlus.Net là địa điểm lý tưởng cho những tín đồ của
            điện ảnh Việt Nam. Bạn sẽ tìm thấy những bộ phim bom tấn của làng
            phim Việt, cùng với những tác phẩm độc lập và phim ngắn tuyệt vời từ
            các nhà làm phim trẻ tài năng. Chúng tôi tự hào là một nền tảng ủng
            hộ sự phát triển và lan tỏa của ngành công nghiệp điện ảnh Việt Nam.
          </p>
          <p>&nbsp;</p>

          <p>
            Tuyệt vời hơn nữa, với giao diện thân thiện và dễ sử dụng, PhimMoi
            mang đến cho bạn trải nghiệm xem phim tuyệt đỉnh. Bạn có thể tìm
            kiếm bộ phim yêu thích của mình theo danh mục, tên phim, diễn viên
            hoặc đạo diễn. Ngoài ra, chúng tôi cung cấp chức năng đề xuất phim
            dựa trên sở thích của bạn, giúp bạn khám phá những tác phẩm mới thú
            vị.
          </p>
          <p>&nbsp;</p>

          <p>
            Với PhimMoiChill, bạn sẽ không còn lo lắng về việc mất thời gian tìm
            kiếm và tải phim từ các nguồn không rõ nguồn gốc và chất lượng. Tất
          </p>
          <p>
            cả các bộ phim trên PhimMoi đều được cung cấp với chất lượng cao và
            hỗ trợ phụ đề đa ngôn ngữ, giúp bạn có trải nghiệm xem phim tuyệt
            vời mà không bị giới hạn ngôn ngữ.
          </p>
          <p>&nbsp;</p>

          <p>
            Bên cạnh đó, PhimMoiChill cũng mang đến cho bạn những tính năng đặc
            biệt để tăng thêm niềm vui khi xem phim. Bạn có thể tạo danh sách
            phim yêu thích để lưu trữ và xem lại sau này. Ngoài ra, bạn cũng có
            thể chia sẻ những bộ phim thú vị với bạn bè thông qua các nút chia
            sẻ mạng xã hội.
          </p>
          <p>&nbsp;</p>

          <p>
            Sự an toàn và bảo mật thông tin cá nhân của bạn là ưu tiên hàng đầu
            của chúng tôi. PhimMoiChill cam kết bảo vệ thông tin cá nhân của bạn
            và không chia sẻ thông tin này với bất kỳ bên thứ ba nào.
          </p>
          <p>&nbsp;</p>

          <p>
            Với tất cả những điều tuyệt vời mà PhimMoiChill mang lại, chúng tôi
            tin rằng bạn sẽ tìm thấy niềm vui và thỏa mãn trong việc khám phá và
            xem các bộ phim tuyệt hay trên trang web của chúng tôi.
          </p>
          <p>&nbsp;</p>

          <p>
            Hãy truy cập ngay PhimMoiPlus.Net{" "}
            <strong>nếu bạn bị chặn truy cập vào PhimMoi.Net</strong> và bắt đầu
            cuộc hành trình khám phá vô tận thế giới điện ảnh ngay hôm nay!
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

export default VeChungToi;
