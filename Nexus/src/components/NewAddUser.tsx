import { useQuery } from "@apollo/client";
import {UserDetailsDocument} from '../gql/graphql'
import { useEffect } from "react";

export default function NewAddUser() {
    const {error, loading, data} = useQuery(UserDetailsDocument)

    useEffect(() => {
        if(data) {
            console.log(data.userDetails)
        }
    }, [data])

    if (loading) return <h2>Loading........</h2>

    if (error) return <h2>Error.......</h2>
  return (
    <div>NewAddUser</div>
  )
}
