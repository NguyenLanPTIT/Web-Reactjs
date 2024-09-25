import React, { useState } from 'react';
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import avataImage from "../../../../image/avata.jpg";
import '../info.scss';
function ChinhSach() {
    const [isFocused, setIsFocused] = useState(false);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Mới nhất');
    const [isFirstFocus, setIsFirstFocus] = useState(true);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    const handlePostComment = () => {
        if (comment.trim()) {
            const newComment = { id: comments.length + 1, name: "Tên Người Dùng", cmt: comment };
            setComments([newComment, ...comments]);
            setComment('');
        }
    };

    return (
        
        <div className='container-cs'>
            <div className='static-page'>
                <div className='title'>
                    <h1>Chính Sách Riêng Tư</h1>
                </div>
                <div class="news-content"><p>&nbsp;<strong>Cookies</strong></p><p>Cũng như nhiều website khác, chúng tôi thiết lập và sử dụng cookie để tìm hiểu thêm về cách bạn tương tác với nội dung của chúng tôi và giúp chúng tôi cải thiện trải nghiệm của bạn khi ghé thăm website của chúng tôi, cũng như duy trì thiết lập cá nhân của bạn... Website của chúng tôi có thể đăng quảng cáo, và trong trường hợp đó có thể thiết lập và truy cập các cookie trên máy tính của bạn và phụ thuộc vào chính sách bảo vệ sự riêng tư của các bên cung cấp quảng cáo. Tuy nhiên, các công ty quảng cáo không được truy cập vào cookie của chúng tôi. Những công ty đó thường sử dụng các đoạn mã riêng để theo dõi số lượt truy cập của bạn đến website của chúng tôi.</p><p><strong>Thay đổi điều khoản</strong></p><p>Chúng tôi có thể thay đổi các điều khoản của bản Chính sách bảo vệ riêng tư này cho phù hợp với điều kiện thực tế. Chúng tôi sẽ thông báo về những thay đổi lớn bằng cách đặt thông báo trên site của chúng tôi và được đặt trong thiết lập người dùng của bạn.</p><p><strong>Từ chối bảo đảm</strong></p><p>Mặc dù Chính sách bảo vệ riêng tư đặt ra những tiêu chuẩn về Dữ liệu và chúng tôi luôn cố gắng hết mình để đáp ứng, chúng tôi không bị buộc phải bảo đảm những tiêu chuẩn đó. Có thể có những nhân tố vượt ra ngoài tầm kiểm soát của chúng tôi có thể dẫn đến việc Dữ liệu bị tiết lộ. Vì thế, chúng tôi không chịu trách nhiệm bảo đảm Dữ liệu luôn được duy trì ở tình trạng hoàn hảo hoặc không bị tiết lộ.</p><p><strong>Sự đồng ý của bạn</strong></p><p>Khi sử dụng dịch vụ của PhimChill, bạn mặc nhiên chấp nhận điều khoản trong Chính sách bảo vệ riêng tư này</p></div>
                <div className="comment">
                    <div className="content-cmt">
                        <div className="header-cmt">
                            <div className="number">0 bình luận</div>
                            <div className="sort">
                                <span> Sắp xếp theo</span>
                                <button className="dropbtn" onClick={toggleDropdown}>{selectedOption}
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
                                        <button className="push" onClick={handlePostComment}>Đăng</button>
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

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChinhSach;