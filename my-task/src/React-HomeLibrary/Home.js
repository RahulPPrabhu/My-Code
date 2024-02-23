import React, {useState, useEffect} from 'react'
import './Home.css'

function Home() {

    const [message, setMessage] = useState('Welcome to Home Library')

    useEffect(() => {
        setInterval(() => {
            setMessage('Organize Your Books')
        }, 2000);
    }, [message])
  return (
    <div>
        <h1>{message}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien faucibus et 
            molestie. Mauris ultrices eros in cursus turpis massa tincidunt. Volutpat sed cras ornare 
            arcu dui vivamus. Vulputate dignissim suspendisse in est ante in nibh. Aliquam etiam erat 
            velit scelerisque. Rutrum quisque non tellus orci ac auctor augue mauris augue. Accumsan 
            lacus vel facilisis volutpat est. Sed adipiscing diam donec adipiscing. Eu scelerisque 
            felis imperdiet proin fermentum. Auctor elit sed vulputate mi sit amet mauris commodo quis. 
            Feugiat in ante metus dictum at. In pellentesque massa placerat duis ultricies lacus sed 
            turpis. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Nec feugiat in 
            fermentum posuere. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Convallis 
            convallis tellus id interdum. Fermentum dui faucibus in ornare quam.</p>
    </div>
  )
}

export default Home