import React, {useState} from 'react'

// Handling the form values
function Task6() {

    const [nameInput, setNameInput] = useState('')
    const [qualification, setQualification] = useState('')
    const [gender, setGender] = useState('')

    const handleNameChange = (e) => {
        setNameInput(e.target.value)
    }

    const handleQualiChange = (e) => {
        setQualification(e.target.value)
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value)
    }

    const handleFormDetails = (e) => {
        e.preventDefault()
        console.log(nameInput)
        console.log(qualification)
        console.log(gender)
    }
  return (
    <>
        <h4>User Details</h4>
        <form onSubmit={handleFormDetails}>
            <input type='text' value={nameInput} onChange={handleNameChange} placeholder='Enter Your Name...'/>
            <br />
            <select value={qualification} onChange={handleQualiChange}>
                <option>-- Select Qualification --</option>
                <option value='MCA'>MCA</option>
                <option value='MTECH'>MTECH</option>
                <option value='BCA'>BCA</option>
                <option value='BTECH'>BTECH</option>
            </select>
            <br />
            Male: <input type='radio' value='Male' onChange={handleGenderChange} />
            Female: <input type='radio' value='Female' onChange={handleGenderChange} />
            <br />
            <button type='submit'>Submit</button>

        </form>
    </>
  )
}

export default Task6