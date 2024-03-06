import { useState } from "react"
import { DELETE_USER } from "../graphql/mutation"
import { useMutation } from "@apollo/client"

export default function DeleteUser() {
    const [deleteUser, { error }] = useMutation(DELETE_USER)
    const [id, setId] = useState<number>(0)

    const handleDelete = async () => {
        console.log(typeof (id))
        try {
            await deleteUser({
                variables: {
                    userId: id
                }
            })
            console.log("Deleted")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {error}
            <input type="text" placeholder="Enter ID" value={id} onChange={(e) => setId(parseInt(e.target.value))} />
            <button onClick={handleDelete}>Delete User</button>
        </>
    )
}
