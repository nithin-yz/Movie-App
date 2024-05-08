import React from 'react'
import Header from './../components/header'
import Footer from  './../components/footer'
import MovieComponent from '../components/moviecomponent'
import MovieDetails from "./moviedetails"


function Userhome() {
  return (
    <div>
      
<Header/>
<div className=' m-10 flex flex-wrap gap-5'>

<MovieDetails/>

</div>
<Footer/>

    </div>
  )
}

export default Userhome
