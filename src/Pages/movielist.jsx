import React from 'react'
import MovieCard from '../components/MovieCard'

const MovieList = () => {
  // Fetch movie list from context or state
  const movies = [] // Replace with actual data

  return (
    <div>
      <h2>Movie List</h2>
      {/* Add pagination and filtering components here */}
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieList