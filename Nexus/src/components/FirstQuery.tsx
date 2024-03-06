import {graphql} from '../gql/gql'

export default function FirstQuery() {

    const alluserDetails = graphql(`
        query userDetails() {
            userDetails {
                id,
                name
            }
        }
    `)
  return (
    <>

    </>
  )
}
