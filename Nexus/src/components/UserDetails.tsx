import { useEffect, useState } from 'react'
import { GETALLUSER } from '../graphql/query'
import { useQuery } from '@apollo/client'

export default function UserDetails() {

  interface datatype {
    id: number,
    name: string,
    address: string,
    status: boolean
  }

  const { error, loading, data } = useQuery(GETALLUSER)
  const [userDetails, setUserDetails] = useState<datatype[]>([])

  useEffect(() => {
    if (data) {
      console.log(data.userDetails)
      setUserDetails(data.userDetails)
      console.log(userDetails)
    }
  }, [data, userDetails])

  if (loading) return <h1>Loading......</h1>
  if (error) return <p>{error.message}</p>

  return (
    <>
      {userDetails.map(val => <h4 key={val.id}>{val.name}</h4>)}
    </>
  )
}
