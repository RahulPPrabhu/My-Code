import React, {useState, useEffect} from 'react'
import './Book.css'
import BookDetailsDisplay from './BookDetailsDisplay'

function Books() {

    const [bookInput, setBookInput] = useState('')
    const [authorInput, setAuthorInput] = useState('')
    const [genre, setGenre] = useState('')
    const [status, setStatus] = useState('')
    const placeholder = 'Enter the Name of the Book'
    const authorplaceholder = 'Enter the Author of the Book'

    const inputs = {
        bookInput,
        authorInput,
        genre,
        status
    }

    const [show, setShow] = useState(false)

    useEffect(() => {
        console.log('Show Status: ' + show)
    }, [show])

    const handleSubmit = () => {
        if(authorInput === "" || genre === "" || status === "") {
            alert("Please enter the details first")
        } else {
            alert("Book Added")
            setShow(true)
            console.log(bookInput)
            console.log(authorInput)
            console.log(genre)
            console.log(status)
            console.log(show)
            localStorage.setItem("Book Name", bookInput)
        }
        
    }
  return (
    <>
        <h1>Your Library</h1>
        <div className='details'>
            <h4>Enter the Details</h4>
            <input 
                className='inputfields'
                type='text'
                value={bookInput}
                onChange={(e) => setBookInput(e.target.value)}
                placeholder={placeholder}
            /> <br />
            <input 
                className='inputfields'
                type='text'
                value={authorInput}
                onChange={(e) => setAuthorInput(e.target.value)}
                placeholder={authorplaceholder}
            /> <br />
            <select value={genre} onChange={(e) => setGenre(e.target.value)} className='inputfields'>
                <option>--Select the Genre of the Book--</option>
                <option value='Drama'>Drama</option>
                <option value='Fable'>Fable</option>
                <option value='Historical'>Historical</option>
                <option value='Fiction'>Fiction</option>
                <option value='Horror'>Horror</option>
            </select> <br />
            <select value={status} onChange={(e) => setStatus(e.target.value)} className='inputfields'>
                <option>--Select the Status of the Book--</option>
                <option value='Reading'>Reading</option>
                <option value='Yet to Read'>Yet to Read</option>
                <option value='Completed'>Completed</option>
            </select> <br />
            <button onClick={handleSubmit}>Add Book</button>
            {show && (<BookDetailsDisplay input={inputs} bookstatus={show}/>)}
        </div>
    </>
  )
}

export default Books