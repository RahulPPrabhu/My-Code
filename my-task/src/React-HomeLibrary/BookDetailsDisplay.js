import React from 'react'
import './bookDetails.css'

function BookDetailsDisplay({input, bookstatus}) {
    const {bookInput, authorInput, genre, status} = input

    if (bookstatus) {
        return (
            <div className='bookDetails'>
                <h2>Your Book Details</h2>
                <h5>Book Title: {bookInput}</h5>
                <h5>Book Author: {authorInput}</h5>
                <h5>Book Genre: {genre}</h5>
                <h5>Book Status: {status}</h5>
            </div>
        )
    }
}

export default BookDetailsDisplay