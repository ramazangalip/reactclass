import React from 'react'
import { useFormik } from 'formik'

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

        }

    })

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="name" onChange={handleChange} onBlur={handleBlur}>
      </input>
      <br></br>
      <input type="text" name="email" placeholder="email" onChange={handleChange} onBlur={handleBlur}>
      </input>
      <br></br>
      <label>Male</label>
      <input type="radio" name="gender" value="male" onChange={handleChange}></input>
      <label>Female</label>
      <input type="radio" name="gender" value="female" onChange={handleChange}></input>
      <label>Football</label>
      <input type="checkbox" name="hobbies" value="Football" onChange={handleChange}></input>
      <br></br>

    </form>
  )
}

export default MyFormik
