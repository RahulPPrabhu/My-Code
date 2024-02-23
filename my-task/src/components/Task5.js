import React, {useState} from 'react'
import Task5A from './Task5A'

// Working With Props
function Task5(props) {

    const [textInput, setTextInput] = useState('')
    const placeholder = "Enter anything...."

    const handleTextChange = (e) => {
        setTextInput(e.target.value)
    }
  return (
    <div>
        <h4>Using Props</h4>
        <input type='text' value={textInput} onChange={handleTextChange} placeholder={placeholder} />
        <p>{props.children} Rahul</p>
        <p>{props.uname}</p>
        <Task5A propsInput={textInput}/>
    </div>
  )
}

export default Task5