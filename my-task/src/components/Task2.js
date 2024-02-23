import React, {useState} from "react";

/* 
    - using ES6 syntax to create a functional component
    - creating the simple counter application with the help of useState hook
*/
const Task2 = () => {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }
    return(
        <>
            <h1>Simple Counter Application</h1>
            <button onClick={handleClick}>You Clicked {count} times</button>
        </>
    )
}

export default Task2