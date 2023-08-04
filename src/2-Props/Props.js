import Car from "./Car"

const Props = () => {
    const myElement = <Car brand="Ferrari"/>
    let variable = "Mustang"
    const myElement2 = <Car brand={variable}/>
    const carInfo = {name: "Ford", model: "Mustang"}
    const myElement3 = <Car brand={carInfo}/>
    const myPerson = {
        name: "mustafa",
        age:25,
        location: "turkey"
    }
    const myCar = {
        carName : "ford",
        carAge: 5,
        model: "mustang"
    }
    const myProps = {
        myPerson,myCar
    }
    const myElement4 = <Car definition={myProps}/>
    return (
        <>
      {/* {myElement}
      {myElement2} */}
      {/* {myElement3} */}
      {myElement4}
        </>
    )
}

export default Props;