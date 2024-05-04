import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  cast: Yup.string().required('Cast is required'),
  imageUrl: Yup.string().required('Image URL is required'),
})

const EditMovie = () => {
  // Fetch movie details from context or state
  const movieDetails = {} // Replace with actual data

  const formik = useFormik({
    initialValues: {
      title: movieDetails.title,
      cast: movieDetails.cast,
      imageUrl: movieDetails.imageUrl,
    },
    validationSchema,
    onSubmit: (values) => {
      // Update movie in context or state
      console.log(values)
    },
  })

  useEffect(() => {
    // Fetch movie details when component mounts
  }, [])

  return (
    <div>
      <h2>Edit Movie</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div>{formik.errors.title}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="cast">Cast</label>
          <input
            id="cast"
            name="cast"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cast}
          />
          {formik.touched.cast && formik.errors.cast ? (
            <div>{formik.errors.cast}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="imageUrl">Image URL</label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.imageUrl}
          />
          {formik.touched.imageUrl && formik.errors.imageUrl ? (
            <div>{formik.errors.imageUrl}</div>
          ) : null}
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  )
}

export default EditMovie