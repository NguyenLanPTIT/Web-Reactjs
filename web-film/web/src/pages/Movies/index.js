import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../../components/MovieDetail';  // Đảm bảo rằng đường dẫn này đúng

const Movies = () => {
  const { id } = useParams();
  return (
    <div>
      {id ? <MovieDetail id={id} /> : <div>Select a movie to see details</div>}
    </div>
  );
};

export default Movies;