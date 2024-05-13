import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'

const MovieDescriptionPage = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [review, setReview] = useState('')

  useEffect(() => {
    const storedMovies = localStorage.getItem('movies')
    if (storedMovies) {
      const parsedMovies = JSON.parse(storedMovies)
      const selectedMovie = parsedMovies.find((movie) => movie.id === id)
      setMovie(selectedMovie)
    }
  }, [id])

  const handleReviewChange = (e) => {
    setReview(e.target.value)
  }

  const handleSubmitReview = () => {
   
    console.log('Submitted review:', review)
    setReview('')
  }

  if (!movie) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Header></Header>
<div className='flex flex-col justify-center'>

     

      <div className='flex gap-10'>
      <img  className= "w-[500px]"src={movie.imageurl} alt={movie.title} />
      <div className='flex flex-col'>
      <h2>{movie.title}</h2>
      <p>Cast: {movie.cast}</p>
      <p>Rating: {movie.rating}</p>

      <h3>Add Review</h3>
      <textarea
        value={review}
        onChange={handleReviewChange}
        placeholder="Write your review..."
      />
      <button onClick={handleSubmitReview}>Submit Review</button>
      </div>
      </div>
      <footer></footer>
      </div>
    </div>
  )
}

export default MovieDescriptionPage