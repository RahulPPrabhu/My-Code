import { useEffect } from 'react'
import { GET_VALID_USER } from '../graphql/query'
import { useQuery } from '@apollo/client'

export default function ValidUser() {

  const { error, loading, data } = useQuery(GET_VALID_USER)

  useEffect(() => {
    if (data) {
      console.log(data.drafts)
    }
  }, [data])
  return (
    <>
      {error}
      {loading}
    </>
  )
}
