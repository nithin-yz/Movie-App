import React, { useState } from 'react'
import team from './../assets/images/Team.jpg'
import { Link } from "react-router-dom"

const Signup = () => {

  const [form , setForm] = useState({
    userName:'',
    email:'',
    password:'',
    confirmPassword:''
  })

const [error, setError] = useState(''
)

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function handleChange(event) {

const {name,value} =event.target
switch(name) {
  case 'userName':
    value.length < 4 ? setError('username should be more than 4 ') :setError("")

break;

case 'email':

emailRegex.test(value) ? setError(''):setError("it should be a proper email")





}

setForm({...form,[name]:value})
console.log(form);



  }
  return (

    <>
      <div className='  w-screen h-screen bg-cover bg-center flex justify-end items-center' style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1)), url(${team})` }}>



        <form className='bg-transparent  w-[500px]  mr-[50px] mb-[100px] flex flex-col gap-6 justify-center'>
          <span className='bg-black bg-opacity-45 border-none'>
            <h1 className='text-center mr-[60px] text-6xl  relative z-10 text-[#0d895c] text-[60px] font-myfont font-extrabold shadow-lg '>Discord sign up here!</h1>
          </span>
          <input value={form.userName} onChange={handleChange} type="text"  name="userName" placeholder='         username' className='italic bg-red-450 h-[50px] w-[420px] rounded-2xl placeholder:text-black' />
          <input value={form.email} onChange={handleChange} type="email"  name="email"   placeholder='       your email' className=' italic bg-yellow-450 h-[50px] w-[420px] rounded-2xl placeholder:text-black' />

          <input value={form.password} onChange={handleChange} type="password" name="password" placeholder='    password' className=' italic bg-yellow-450 h-[50px] w-[420px] rounded-2xl placeholder:text-black' />
          <input value={form.confirmPassword} onChange={handleChange} type="password" name="confirmPassword" placeholder='    confirm password' className=' italic bg-yellow-450 h-[50px] w-[420px] rounded-2xl placeholder:text-black' />

          <div className='flex justify-center mr-[70px]' >
            <button className='bg-black border-2 border-[#0d895c] text-3xl font-extrabold rounded-2xl  font-myfont w-[40%] text-[#0d895c]'> signup </button>


          </div>
          <p className=' italic text-white text-[24px] p-2 font-mysecondfont'>
            Already registered? Please <Link className="text-blue-500" to="/">click here</Link>
          </p>

<p className='text-red-600 italic text-center text-2xl'>  {error}</p>
        </form>



      </div>

    </>



  )
}

export default Signup
