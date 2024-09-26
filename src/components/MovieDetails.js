import React from 'react';
import { useParams, Link } from 'react-router-dom';

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
  // Same movie list as in MovieList.js
];

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetails;
