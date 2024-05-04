import React from 'react'

const MovieDetails = () => {
  // Fetch movie details from context or state
  const movieDetails = {} // Replace with actual data

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <img src={movieDetails.imageUrl} alt={movieDetails.title} />
      <p>Cast: {movieDetails.cast}</p>
      <p>Rating: {movieDetails.rating}</p>
      {/* Add rating component here */}
    </div>
  )
}

export default MovieDetails