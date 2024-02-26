import React, {useEffect} from 'react'
import axios from 'axios'

function Data() {

    useEffect(() => {
        axios.get('https://api.publicapis.org/entries')
    .then((res) => {
        console.log(res.data.entries)
    })
    .catch((err) => {
        console.log(err)
    })
    }, [])
    
    return(
        <>
           
        </>
    )
}

export default Data