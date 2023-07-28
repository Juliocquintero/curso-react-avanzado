import { gql, useMutation } from '@apollo/client';
import useAuth from './useAuth';

const LIKE_PHOTO_ANON = gql`
	mutation likeAnonymousPhoto($input: LikePhoto!) {
		likeAnonymousPhoto(input: $input) {
			id
			liked
			likes
		}
	}
`;
const MUTATION_LIKE_PHOTO = gql`
	mutation likePhoto($input: LikePhoto!) {
		likePhoto(input: $input) {
			id
			liked
			likes
		}
	}
`;

const useMutationToogleLike = () => {
	const { user } = useAuth();

	const [mutation, { loading: mutationLoading, error: mutationError }] =
		useMutation(user ? MUTATION_LIKE_PHOTO : LIKE_PHOTO_ANON);


	const handleToggleLike = (id) => {
		mutation({
			variables: {
				input: { id },
			},
		});
	};
	return { mutation, mutationLoading, mutationError, handleToggleLike };
};
export default useMutationToogleLike;
