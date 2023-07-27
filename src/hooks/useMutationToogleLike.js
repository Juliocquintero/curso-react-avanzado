import { gql, useMutation } from "@apollo/client"

const LIKE_PHOTO = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`

const useMutationToogleLike = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(LIKE_PHOTO)

  const handleToggleLike = (id) => {
    mutation({
      variables: {
        input: { id }
      }
    })
  }
  return { mutation, mutationLoading, mutationError, handleToggleLike }
}
export default useMutationToogleLike 
