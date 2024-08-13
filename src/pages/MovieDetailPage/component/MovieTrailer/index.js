import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Đây là ID của element mà ứng dụng React của bạn đang gắn vào

const MovieTrailer = ({ trailerUrl }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Trailer</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Trailer"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%', 
                        height: '70%' 
                    }
                }}
            >
                <button onClick={closeModal}>Close</button>
                <iframe
                    src={trailerUrl}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Trailer"
                    width="100%"
                    height="100%"
                ></iframe>
            </Modal>
        </div>
    );
};

export default MovieTrailer;