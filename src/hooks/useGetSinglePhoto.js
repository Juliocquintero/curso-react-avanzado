import { gql, useQuery } from "@apollo/client"

const GET_SINGLE_PHOTO = gql`
  query getPhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
}
`
const useGetSinglePhoto = (id) => {
  const { loading, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: {
      id
    }
  })

  const photo = data?.photo
  return {
    photo, loading
  }
}

export default useGetSinglePhoto