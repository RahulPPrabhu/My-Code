import { useMutation } from "@apollo/client"
import { ADD_USER } from "../graphql/mutation"
import { useState } from "react"

export default function AddUser() {

    const [name, setName] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [status, setStatus] = useState<boolean>(false)

    const [addUser, { error }] = useMutation(ADD_USER)

    const handleNewUser = async () => {
        try {
            await addUser({
                variables: {
                    name: name,
                    address: address,
                    status: status
                }
            })
            console.log("New User Added")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {error}
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
            <br />
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" />
            <br />
            <select value={String(status)} onChange={(e) => setStatus(Boolean(e.target.value))}>
                <option disabled>--Select Status--</option>
                <option value='true'>True</option>
                <option value='false'>False</option>
            </select>
            <button onClick={handleNewUser}>Add User</button>
        </>
    )
}
