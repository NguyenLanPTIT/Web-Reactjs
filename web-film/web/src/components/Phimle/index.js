import { useEffect, useState } from "react";
import './phimle.scss';



const getRandomItems = (arr, num) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

function PhimLe() {
    const [movies, setMovies] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [displayItems, setDisplayItems] = useState([]);


    
    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(categoryName);
    };

    const filteredMovies = selectedCategory === 'All'
        ? movies
        : movies.filter(movie =>
            movie.category.some(c => c.name === selectedCategory)
        );

    useEffect(() => {
        fetch('https://phimapi.com/v1/api/danh-sach/phim-le?skip=1&limit=64')
            .then(response => response.json())
            .then(data => {
                setMovies(data.data.items); // Lấy dữ liệu từ data.items
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    useEffect(() => {
        if (filteredMovies.length > 0) {
            const itemsToDisplay = getRandomItems(filteredMovies, 12);
            setDisplayItems(itemsToDisplay);
        }
    }, [filteredMovies]);

    return (
        <>
            <div className='movie'>
                <div className="movie__heading">
                    <div className="heading__content">
                        <h2>PHIM LẺ MỚI CẬP NHẬT</h2>
                        <div className="heading__type">

                            <button onClick={() => handleCategoryClick('Hành Động')}>Hành động</button>
                            <button onClick={() => handleCategoryClick('Hoạt Hình')}>Hoạt hình</button>
                            <button onClick={() => handleCategoryClick('Kinh Dị')}>Kinh dị</button>
                            <button onClick={() => handleCategoryClick('Hài Hước')}>Hài hước</button>
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
export default PhimLe;