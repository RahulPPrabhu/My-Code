import React, {useState, useEffect} from 'react'
import Task3A from './Task3A'
import Task3B from './Task3B'

/*
    - conditional Rendering 
    - Using useState to manage the state
    - Using the useEffect to cause the side effect
*/

function Task3() {

    const [isSubscribed, setSubscribed] = useState(false)

    useEffect(() => {
        console.log("Is Subscribed: " + isSubscribed)
    }, [isSubscribed])
    
    const handleSubscribe = () => {
        setSubscribed(true)
    }

    const handleUnSubscribe = () => {
        setSubscribed(false)
    }

  return (
    <>
        {isSubscribed ? <Task3A /> : <Task3B />}
        <button onClick={handleSubscribe}>Subscribe</button>
        <button onClick={handleUnSubscribe}>UnSubscribe</button>
    </>
  )
}

export default Task3