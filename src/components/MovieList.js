import React from 'react';
import { Link } from 'react-router-dom';

const movies = [
  {
    id: 1,
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing technology.',
    trailerLink: 'https://www.youtube.com/embed/YoHD9XEInc0',
  },
  {
    id: 2,
    title: 'Interstellar',
    description: 'A team of explorers travels through a wormhole in space in an attempt to ensure humanity\'s survival.',
    trailerLink: 'https://www.youtube.com/embed/zSWdZVtXT7E',
  },
  // Add more movies here
];

const MovieList = () => {
  return (
    <div>
      <h1>Movie List</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <h3>{movie.title}</h3>
            <p>{movie.description.substring(0, 50)}...</p>
            <Link to={`/movies/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
