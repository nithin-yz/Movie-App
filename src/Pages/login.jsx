import React from 'react'
import bgimage from  './../assets/images/Discord.jpg'
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className='w-screen h-screen flex justify-end items-center bg-cover bg-center' style={{backgroundImage:`url(${bgimage})`}}>
    




    
      <form className=' bg-transparent rounded-sm    flex flex-col w-96 h-106 gap-5 mr-[100px]'>

<h1 className='text-[brown] text-[40px] font-myfont font-extrabold'>Discord Login </h1>
<label htmlFor="username"  className='text-[white] text-[30px] font-myfont'>username</label>

<input type="text" className='rounded-2xl h-12  bg-gradient-to-r from-white to-gray-400 text-red-900 italic ' id="username" />
<label htmlFor="password" className=" text-[grey]  text-[30px] font-myfont">password</label>
<input type="password" className='rounded-2xl h-12  bg-gradient-to-r from-white to-gray-400 text-red-900 italic' id="password"/>



<div className='flex gap-5 m-auto'>

<button type="submit" className='text-[#ff0000dc] text-[30px] font-bold rounded-2xl font-myfont bg-[rgb(254,245,265)] mt-6  h-10  w-[150px] hover:bg-white'>login</button>
<button type="submit" className='text-[#ff0000e0] text-[30px] font-bold rounded-2xl font-myfont bg-[rgb(254,245,265)] mt-6   h-10  w-[150px] hover:bg-white'> <Link to="/signup">signup</Link>  </button>

</div>

<p className="text-white italic text-[28px] ml-[60px] "> forgot your password?</p>

      </form>





     

    </div>
  )
}

export default Login
