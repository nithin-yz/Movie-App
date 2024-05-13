import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MovieDetails = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const StoredMovies = localStorage.getItem('movies')

    if (StoredMovies) {
      const parsedMovies = JSON.parse(StoredMovies)
      setMovies(parsedMovies)
    }
  }, [])

  return (
    <div className="flex flex-wrap">
      {movies.map((movie, index) => (
        <div key={index} className="w-[250px] h-[380px] border-[10px] ml-[20px]">
          <Link to={`/viewmovie/${movie.id}`}>
            <img
              className="w-[250px] h-[250px]"
              src={movie.imageurl}
              alt={movie.title}
            />
            <div className="font-mysecondfont">
              <h2 className="text-center">{movie.title}</h2>
              <p className="text-center">Cast: {movie.cast}</p>
              <p className="text-center">Rating: {movie.rating}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MovieDetails