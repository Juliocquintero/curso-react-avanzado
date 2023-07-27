import { gql, useQuery } from "@apollo/client"

const GET_ALL_PHOTOS = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
const useGetPhotos = (categoryId) => {
  const { loading, data } = useQuery(GET_ALL_PHOTOS, {
    variables: {
      categoryId
    }
  })

  const photos = data?.photos
  return {
    photos, loading
  }
}

export default useGetPhotos