import React, { useState, useEffect } from 'react';
import "./phimbo.scss";

function MovieRecommendations() {
    const [data, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);




    useEffect(() => {
        fetch('https://phimapi.com/danh-sach/phim-moi-cap-nhat') // Thay thế URL thực tế của bạn tại đây
            .then(response => response.json())
            .then(data => {
                console.log(data.items);
                setMovies(data.items);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching items:', error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <p>Loading items...</p>;
    if (!data.length) return <p>No items found.</p>;




    return (
        <>
            <div className='movie'>
                <h2>PHIM BỘ MỚI CẬP NHẬT</h2>
                <div className="movie__list">
                    {data.map(movie => (
                        <div key={movie._id} className="movie__item">
                            <span className="lable">HD-{movie.lang}</span>

                            <div className='movie__image'>
                                <img src={movie.poster_url} alt={movie.name} />
                                <h3>{movie.name}</h3>

                            </div>

                        </div>
                    ))}
                </div>
            </div>


        </>
    );
}

export default MovieRecommendations;




//comment
// const storegeComments = JSON.parse(localStorage.getItem('comments'))
//   const [comment, setComment] = useState('')
//   const [comments, setComments] = useState(storegeComments ?? [] );

//   const handleSubmit = () => {
//     setComments(prev => {
//       const newComments = [...prev, comment]
//       const jsonComments = JSON.stringify(newComments)
//       localStorage.setItem('comments', jsonComments)
//       return newComments
//     })
//     setComment('')
//   }

//   return (
//     <div>
//           <input placeholder='Viết bình luận' value={comment}
//             onChange={e => setComment(e.target.value)} >
//           </input>
//           <button onClick={handleSubmit}>Đăng</button>

//           <ul>
//             {comments.map((comment, index) => (
//               <li key={index}>{comment}</li>
//             )

//             )}

//           </ul>
//         </div>

//   )
