  // import React,{useState}from 'react'
  // import bgimage from  './../assets/images/Discord.jpg'
  // import {Link} from "react-router-dom"


  // const Login = () => {

  // const [username, setUsername]   =useState("")
  // const [password, setPassword ] =useState("")

  // function handlerusername(event){

  // setUsername(event.target.value)
  // console.log(username)
  // }



  // function handlerpassword(event){

  // setPassword(event.target.value)
  // console.log("password is",password)

  // }


  // function submitForm(){

  // event.preventDefault()
  // console.log(username, password)

  // if(username=="admin"&&password=="admin"){

  // alert("login successfull")

  // }else{

  // alert("login failed")


  // }
  // }



  //   return (
  //     <div className='w-screen h-screen flex justify-end items-center bg-cover bg-center' style={{backgroundImage:`url(${bgimage})`}}>
      




      
  //       <form onSubmit={submitForm} className=' bg-transparent rounded-sm   flex flex-col w-96 h-106 gap-5 mr-[100px]'>

  // <h1 className='text-[brown] text-[40px] font-myfont font-extrabold'>Discord Login </h1>
  // <label htmlFor="username"   className='text-[white] text-[30px] font-myfont'>username</label>

  // <input type="text"onChange={handlerusername} className='rounded-2xl h-12  bg-gradient-to-r from-white to-gray-400 text-red-900 italic ' id="username" />
  // <label htmlFor="password" className=" text-[grey]  text-[30px] font-myfont">password</label>
  // <input type="password" onChange={handlerpassword}  className='rounded-2xl h-12  bg-gradient-to-r from-white to-gray-400 text-red-900 italic' id="password"/>



  // <div className='flex gap-5 m-auto'>

  // <button type="submit" className='text-[#ff0000dc] text-[30px] font-bold rounded-2xl font-myfont bg-[rgb(254,245,265)] mt-6  h-10  w-[150px] hover:bg-white'>login</button>
  // <button  className='text-[#ff0000e0] text-[30px] font-bold rounded-2xl font-myfont bg-[rgb(254,245,265)] mt-6   h-10  w-[150px] hover:bg-white'> <Link to="/signup">signup</Link>  </button>

  // </div>

  // <p className="text-white italic text-[28px] ml-[60px] "> forgot your password?</p>

  //       </form>





      

  //     </div>
  //   )
  // }

  // export default Login


  import React,{useState} from "react";
  import {useForm} from "react-hook-form"

  import bgimage from  './../assets/images/Discord.jpg'
  import {Link, useNavigate} from "react-router-dom"
  import {useDispatch} from "react-redux"
  import { saveUserDetails } from "../redux/reducers/userReducer";





  const Login = () => {

  const {register,handleSubmit, formState: {errors}} = useForm()


   
    
const [loginerror, setloginerror]=useState("")
const navigate = useNavigate();
const dispatch = useDispatch()

const Getuser = (email, password)=>{

const users = localStorage.getItem("users")
const parsedUsers =JSON.parse(users)
return parsedUsers.find((user)=>user.email==email && user.password==password)

}
function submitForm(data){
 
  const {email,password} =data

  const value= Getuser(email, password) 

if(value){

dispatch(saveUserDetails(value))
if(value.role=="admin"){

navigate("/adminhome")

}else{


  navigate("/userhome")

}

  
}else{
  
  setloginerror("invalid credentials")

return
}




      }


    
      return (
        <div className='w-screen h-screen flex justify-end items-center bg-cover bg-center' style={{backgroundImage:`url(${bgimage})`}}>
        
    
    
    
    
        
          <form onSubmit={handleSubmit(submitForm)} className=' bg-transparent rounded-sm   flex flex-col w-96 h-106 gap-5 mr-[100px]'>
    
    <h1 className='text-[brown] text-[40px] font-myfont font-extrabold'>Discord Login </h1>
    <label htmlFor="username"   className='text-[white] text-[30px] font-myfont'>username</label>

    
    <input type="text"  id="username" className=' rounded-2xl h-12  bg-gradient-to-r from-white to-gray-400 text-red-900 italic ' name="email" {...register("email",{required:"email is required ",pattern: {value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message:"not a proper email"}}) } />
    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
    
    <label htmlFor="password" className=" text-[grey]  text-[30px] font-myfont">password</label>
    <input type="password" id="password" className='rounded-2xl h-12  bg-gradient-to-r from-white to-gray-400 text-red-900 italic' name="password"  {...register("password",{required:"password is required",minLength:{value:6,message:"not  a proper password"}})} />
    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
    
    
    <div className='flex gap-5 m-auto'>
    
    <button type="submit" className='text-[#ff0000dc] text-[30px] font-bold rounded-2xl font-myfont bg-[rgb(254,245,265)] mt-6  h-10  w-[150px] hover:bg-white'>login</button>
    <button  className='text-[#ff0000e0] text-[30px] font-bold rounded-2xl font-myfont bg-[rgb(254,245,265)] mt-6   h-10  w-[150px] hover:bg-white'> <Link to="/signup">signup</Link>  </button>
    
    </div>
    
    <p className="text-white italic text-[28px] ml-[60px] "> forgot your password?</p>

<p > {loginerror} </p>


    
          </form>
    
    
    
    
    
        
    
       </div> )
    }
    
    export default Login









  // import React from "react";
  // import { useForm } from "react-hook-form";
  
  // const Login = () => {
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors }
  //   } = useForm();
  
  //   const onSubmit = (data) => {
  //     console.log("data:", data);
  //     // Handle form submission
  //   };
  
  //   return (
  //     <form onSubmit={handleSubmit(onSubmit)}>
  //       <div>
  //         <label htmlFor="email">Email:</label>
  //         <input
  //           type="email"
  //           id="email"
  //           name="email"
  //           {...register("email", {
  //             required: "Email is required",
  //             pattern: {
  //               value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
  //               message: "Invalid email address"
  //             }
  //           })}
  //         />
  //         {errors.email && <p>{errors.email.message}</p>}
  //       </div>
  //       <div>
  //         <label htmlFor="password">Password:</label>
  //         <input
  //           type="password"
  //           id="password"
  //           name="password"
  //           {...register("password", { required: "Password is required" })}
  //         />
  //         {errors.password && <p>{errors.password.message}</p>}
  //       </div>
  //       <button type="submit">Login</button>
  //     </form>
  //   );
  // };
  
  // export default Login;
  
  