/* eslint-disable no-undef */
import React from 'react'
import MyFormik from './FormikYup/MyFormik'

const Forms = () => {
    // const [name,setName]  = React.useState("")

    // const [inputs,setInput] = React.useState({})
    const [textarea,setTextare] = React.useState("Bu bir textarea içeriğidir")

    const [myCar,setMyCar]  = React.useState("Dacia")
    const handleChange = (event) =>{
        setMyCar(event.target.value)
    }
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert(`girdiğiniz isim ${name}`)
    // }

    // const handleChange = (event) =>{
    //     const name  =event.target.name;
    //     const value = event.target.value;
    //     setInputs((value)=>({...value,[name]:value}))
    // }
    // const handleSubmit2 = (event) =>{
    //     event.preventDefault();

    // }
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <label>
            Enter Your Name:
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        </label>
        <input type="submit" value="button"></input>
      </form>
      <form onSubmit={handleSubmit2}>
        <label>
                Enter Your Name:
            <input type="text" name="username" value={inputs.username || "" }onChange={handleChange}>
            </input>
        </label>
        <label>
            Enter Your Age:
            <input type="number" name="age" value={inputs.age || "" } onChange={handleChange} ></input>
        </label>
      </form> */}
      {/* <form>
        <textarea value={textarea} onChange={handleChange}></textarea>
      </form>
      <form>
        <select value={myCar} onChange={handleChange}>
            <option value="Ford">Ford</option>
            <option value="Fiat">Fiat</option>
            <option value="Dacia">Dacia</option>
        </select>
      </form> */}
      <MyFormik/>
    </div>
  )
}
export default Forms