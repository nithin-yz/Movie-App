
import React, {useEffect,useState} from 'react'

const MovieDetails = () => {
//   // Fetch movie details from context or state
//   const movieDetails = {

// title:"Avathar",
// imageUrl:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4295/754295-v",
// cast:"Zoe Saldana ,Sam Worthington",
// rating:"5",
// category:"Movie"

//   }     

const [movies, setMovies] = useState([])

useEffect(()=>{

  const StoredMovies= localStorage.getItem("movies")
if (StoredMovies) {
 const parsedMovies= JSON.parse(StoredMovies)
 setMovies(parsedMovies);
}

},[])

  return (

    <div className='flex flex-wrap'>
      {movies.map((movie, index) => (
    <div className=' w-[250px] h-[380px] border-[10px] ml-[20px]'>
      
      <img className="w-[250px] h-[250px]  " src={movie.imageurl} alt={movie.title} />
      
      <div className="font-mysecondfont">

      <h2 className="text-center"  >{movie.title}</h2>
      <p className="text-center">Cast: {movie.cast}</p>
      <p className="text-center">Rating: {movie.rating}</p>

      </div>
    

    </div>
      ))}
    </div>
  )
}

export default MovieDetails