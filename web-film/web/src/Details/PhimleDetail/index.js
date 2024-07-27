import { useEffect, useState } from "react";
import './phimledetail.scss';

function UseEffect2() {
    const itemsPerPage = 25;
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(`https://phimapi.com/v1/api/danh-sach/phim-le?skip=${(currentPage - 1) * itemsPerPage}&limit=${itemsPerPage}`);
                const json = await response.json();
                setData(json.data.items);
                setTotalPages(Math.ceil(json.data.params.pagination.totalItems / itemsPerPage));
            } catch (error) {
                console.error('Error fetching items:', error);
                setData([]);
            }
        };

        fetchMovies();
    }, [currentPage]);

    const goToNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const goToPreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };


    return (
        <>
            <div className='movie'>
                <h2>PHIM LẺ MỚI CẬP NHẬT</h2>
                <div className="movie__list">
                {data.map(item => (
                        <div key={item._id} className="movie__item">
                            <span className="lable">HD-{item.lang}</span>
                            <div className='movie__image'>
                                <img src={`https://img.phimapi.com/${item.poster_url}`} alt={item.name} />
                                <h3>{item.name}</h3>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous</button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
                </div>
            </div>
            
        </>
    );
}

export default UseEffect2;