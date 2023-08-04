import { Button } from 'bootstrap'
import React from 'react'
import {useState} from "react"

const UseStateHook = () => {

    const [color,setColor] = useState("default")

    const [car,setCar] = useState({
        brand:"ford",
        model:"mustang",
        year:"2023",color:"red"
    })
    const updateColor = () => {
        setCar(previousState => {
            return {...previousState,color:"pink",comment:"its good"}
        })
    }

  return (
    <div>
      <h1>my favorite color is {color}</h1>
      <button type="button" onClick={()=>setColor("blue")}>blue
      </button>
      <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year} {car.comment}</p>
      <button type="button" onClick={updateColor}>update Color</button>
    </div>
  )
}

export default UseStateHook
