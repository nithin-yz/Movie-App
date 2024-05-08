import React, {Children, createContext,useContext,useState} from "react"


const MovieContext = createContext()


export const useMovieContext = ()=>useContext(MovieContext)

export const MovieProvider =({children}) =>{

const [movies,setMovies] = useState(()=>{

const storedMovies = localStorage.getItem('movies')
return storedMovies ? JSON.parse(storedMovies) :[]



})

const addMovie =(movieData) =>{

const updatedMovies =[...movies, movieData]
setMovies(updatedMovies)
localStorage.setItem('movies', JSON.stringify(updatedMovies))
console.log('movie added',movieData)

}

return (
    <MovieContext.Provider value={{ movies, addMovie }}>
      {children}
    </MovieContext.Provider>
  );

}