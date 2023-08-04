
const JSX = () => {

    const myElement = <h1>I love JSX</h1>
    const myElement2 = <h1>React is {5 + 5} times better with JSX</h1>
    const myElement3 = (
        <ul>
            <li>Apple</li>
            <li>Banana</li>
            <li>Cherry</li>
        </ul>
    )
    const myElement4 = <input type="text"/>
    const myElement5 = <h1 className="myclass">Hello World</h1>
    const x = 15;
    const myElement6 = <h1>{x<10 ? "x 10dan küçük" : "x 10 dan büyük"}</h1>
    return (
        <>
        {myElement}
        {myElement2}
        {myElement3}
        {myElement4}
        {myElement5}
        {myElement6}
        </>
    )
}

export default JSX