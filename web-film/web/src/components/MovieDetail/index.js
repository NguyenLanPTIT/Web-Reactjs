import React, { useEffect, useState } from 'react';

const MovieDetail = ({ id }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.example.com/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Error fetching movie:', error));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetail;