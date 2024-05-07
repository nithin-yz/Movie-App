import React from 'react'

const MovieDetails = () => {
  // Fetch movie details from context or state
  const movieDetails = {

title:"Avathar",
imageUrl:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4295/754295-v",
cast:"Zoe Saldana ,Sam Worthington",
rating:"5",
category:"Movie"

  }     

  return (

    <div className='flex flex-wrap'>
    <div className=' w-[250px] h-[380px] border-[10px] ml-[20px]'>
      
      <img className="w-[250px] h-[250px]  " src={movieDetails.imageUrl} alt={movieDetails.title} />
      
      <div className="font-mysecondfont">

      <h2 className="text-center"  >{movieDetails.title}</h2>
      <p className="text-center">Cast: {movieDetails.cast}</p>
      <p className="text-center">Rating: {movieDetails.rating}</p>

      </div>
    

    </div>
    </div>
  )
}

export default MovieDetails