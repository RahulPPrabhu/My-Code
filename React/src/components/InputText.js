import React, {useState} from 'react'
import DisplayText from './DisplayText'

function InputText() {

    const placeholder = "Enter Something"
    const [userText, setUserText] = useState('')

    const handleTextChange = (e) => {
        setUserText(e.target.value)
    }
  return (
    <div>
        <input type='text' placeholder={placeholder} value={userText} onChange={handleTextChange}/>
        <DisplayText uText={userText}/>
    </div>
  )
}

export default InputText