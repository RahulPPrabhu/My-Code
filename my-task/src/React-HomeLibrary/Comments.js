import React, {useState} from 'react'

function Comments() {

    const [bookName, setBookName] = useState('--Select Book Name--')
    const [review, setReview] = useState('')

    const localData = localStorage.getItem("Book Name")
    const localDataArray = []
    localDataArray.push(localData)
    console.log(localDataArray)
    const bookname = localDataArray.map((book, index) => <option key={index}>{book}</option>)
    
    const placeholder = 'Enter Your Review here...'
    const handleSubmit = () => {
        alert("Review Stored")
        localStorage.clear()
    }
  return (
    <>
        <h1>Book Reviews</h1>
        <select value={bookName} onChange={(e) => setBookName(e.target.value)}>
            <option>--Select the Book--</option>
            <option>{bookname}</option>
        </select> <br /> <br />
        <textarea rows='20' cols='50' placeholder={placeholder} value={review} onChange={(e) => setReview(e.target.value)}></textarea>
        <br /> <br />
        <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Comments