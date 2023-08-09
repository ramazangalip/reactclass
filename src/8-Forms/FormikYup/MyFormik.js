import React from 'react'
import { useFormik } from 'formik'
import validations from './validation'

const MyFormik = () => {

    const {handleSubmit,handleChange,errors,touched,handleBlur} = useFormik({
        initialValues:{
            name:"",
            email:"",
            gender:"",
            hobbies:[],
            country:"",
            password:"",
            confirmPassword:"",

        },
        onSubmit:(values,bag) => {
            console.log(values)
            bag.resetForm();

        },
        validationSchema:validations,

    })

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="name" onChange={handleChange} onBlur={handleBlur}>
      </input>
      <br></br>
      {errors.name && touched.name && <div>{errors.name}</div>}
      <input type="text" name="email" placeholder="email" onChange={handleChange} onBlur={handleBlur}>
      </input>
      <br></br>
      {errors.email && <div>{errors.email}</div> }
      <label>Male</label>
      <input type="radio" name="gender" value="male" onChange={handleChange}></input>
      <label>Female</label>
      <input type="radio" name="gender" value="female" onChange={handleChange}></input>
      <br></br>
      <label>Football</label>
      <input type="checkbox" name="hobbies" value="Football" onChange={handleChange}></input>
      <br></br>
      <button type='submit'>Kayıt ol</button>
    </form>
  )
}

export default MyFormik
