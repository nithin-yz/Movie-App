import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  cast: Yup.string().required('Cast is required'),
  imageUrl: Yup.string().required('Image URL is required'),
})

const AddMovie = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      cast: '',
      imageUrl: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Add movie to context or state
      console.log(values)
    },
  })

  return (
    <div>
      <h2>Add Movie</h2>
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

        <button type="submit">Add Movie</button>
      </form>
    </div>
  )
}

export default AddMovie