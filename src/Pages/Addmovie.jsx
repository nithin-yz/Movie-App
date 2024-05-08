  import React ,{useState} from 'react'
  import { Field, Formik , Form,ErrorMessage } from 'formik'
  import * as Yup from 'yup'
  import Header1 from '../components/header'
  import Footer1 from '../components/footer'
  import { v4 as uuidv4 } from 'uuid'
  import { useMovieContext} from './../context/moviecontext';
  import Swal from 'sweetalert2'

  const Addmovieform =()=>{

    const { addMovie } = useMovieContext()
    const [showAlert, setShowAlert] = useState(false)
  const initialvalues ={

  title:"",
  imageurl:"",
  cast:"",
  videourl:"",
  rating:""




  }


  const validationSchema = Yup.object({

    title:Yup.string().required("title is required"),
    imageurl:Yup.string().required("imageurl is required"),
    cast: Yup.string().required("cast is required"),

  videourl:Yup.string().required("video is required")



  })

  const handlesubmit = (values,{resetForm})=>{

  const moviesobject ={...values, id:uuidv4(),rating:[]}
  console.log(moviesobject)
addMovie(moviesobject)
resetForm()
setShowAlert(true)
Swal.fire({
  icon: 'success',
  title: 'Success',
  text: 'Movie added successfully!'
})

  }
  return (
  <>

  <Header1></Header1>

  <Formik initialValues={initialvalues} validationSchema={validationSchema} onSubmit={handlesubmit}>
  <Form  className="max-w-xl mx-auto px-4 py-8">
    <div className="mb-4">
      <label htmlFor="title" className="block text-gray-700">Title:</label>
      <Field type="text" id="title" name="title" className="form-input mt-1 block w-full bg-gray-300" />
      <ErrorMessage name="title" component="div" className="text-red-500 mt-1 " />
    </div>

  


    <div className="mb-4">
      <label htmlFor="imageUrl" className="block text-gray-700">Image URL:</label>
      <Field type="text" id="imageUrl" name="imageurl" className="form-input mt-1 block w-full bg-gray-300" />
      <ErrorMessage name="imageUrl" component="div" className="text-red-500 mt-1" />
    </div>

    <div className="mb-4">
      <label htmlFor="cast" className="block text-gray-700">Cast:</label>
      <Field type="text" id="cast" name="cast" className="form-input mt-1 block w-full bg-gray-300" />
      <ErrorMessage name="cast" component="div" className="text-red-500 mt-1" />
    </div>

    <div className="mb-4">
      <label htmlFor="videoUrl" className="block text-gray-700">Video URL:</label>
      <Field type="text" id="videoUrl" name="videourl" className="form-input mt-1 block w-full bg-gray-300" />
      <ErrorMessage name="videoUrl" component="div" className="text-red-500 mt-1" />
    </div>

  

    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Movie</button>
  </Form>
  </Formik>
  <Footer1></Footer1>
  </>
  )
  }

  export default Addmovieform;




