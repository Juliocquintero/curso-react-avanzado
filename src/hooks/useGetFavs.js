import { useQuery, gql } from '@apollo/client';

const GET_FAVORITES = gql`
	query getFavs {
		favs {
			id
			categoryId
			src
			likes
			userId
		}
	}
`;
const useGetFavs = () => {
	const { data, loading } = useQuery(GET_FAVORITES, {
		fetchPolicy: 'cache-and-network',
	});

	const photos = data?.favs;
	return {
		photos,
		loading,
	};
};

export default useGetFavs;
