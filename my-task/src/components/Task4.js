import React, {useState} from 'react'

// Using Map Function
function Task4() {

    const [animes, setAnime] = useState([])
    const [aniInput, setAniInput] = useState('')
    const anime = animes.map((a, i) => (<li key={i}>{a}</li>))

    const handleInputChange = (e) => {
        setAniInput(e.target.value)
    }

    const handleAnime = () => {
        setAnime(prevState => [...prevState, aniInput])
        setAniInput('')
    }
  return (
    <>
        <h4>List of Animes</h4>
        <input type='text' value={aniInput} onChange={handleInputChange}/>
        <button onClick={handleAnime}>Click to Add the Anime</button>
        <h5>Your Anime List</h5>
        <ul>
            {anime}
        </ul>
    </>
  )
}

export default Task4