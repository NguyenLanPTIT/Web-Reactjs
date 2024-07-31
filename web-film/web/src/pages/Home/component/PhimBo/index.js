
import React, { useEffect, useState } from 'react';
import "./phimbo.scss";

const listButton = [
    {
        name: "Hàn Quốc"
    },
    {
        name: "Trung Quốc"
    },
    {
        name: "Âu-Mỹ"
    },
    {
        name: "Phim Bộ Full"
    },
]

const getRandomItems = (arr, num) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

function PhimBo() {
    const [movies, setMovies] = useState([]);
    const [displayItems, setDisplayItems] = useState([]);
    
    const handleCategoryClick = (countryName) => {
        const filteredMovies = countryName === 'All'
            ? movies
            : movies.filter(movie =>
                movie.country.some(c => c.name === countryName)
            );
        
        setDisplayItems(filteredMovies);
    };

    useEffect(() => {
        fetch('https://phimapi.com/v1/api/danh-sach/phim-bo?skip=1&limit=64')

            .then(response => response.json())
            .then(data => {
                setMovies(data.data.items);
                setDisplayItems(data.data.items);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    useEffect(() => {
        if (displayItems.length > 12) {
            const itemsToDisplay = getRandomItems(displayItems, 12);
            setDisplayItems(itemsToDisplay);
        }
    }, [displayItems]);

    return (
        <>
            <div className='movie'>
                <div className="movie__heading">
                    <div className="heading__content">
                        <h2>PHIM BỘ MỚI CẬP NHẬT</h2>
                        <div className="heading__type">
                            {
                                listButton.map((item,i) => <button key={i} onClick={() => handleCategoryClick(item.name)}>{item.name}</button>)
                            }
                        </div>
                    </div>
                    <button onClick={() => handleCategoryClick('All')} >Xem tất cả
                    </button>
                </div>
                <div className="movie__list">
                    {displayItems.map(item => (
                        <div key={item._id} className="movie__item">
                            <span className="lable">HD-{item.lang}</span>
                            <div className='movie__image'>
                                <img src={`https://img.phimapi.com/${item.poster_url}`} alt={item.name} />
                                <h3>{item.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </>
    );
}
export default PhimBo;



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
