import React from 'react';
import useGetFavs from '../hooks/useGetFavs';
import { Link } from 'react-router-dom';
import { ListOfFavorites } from '../components/ListOfFavs';

const Favorites = () => {
	const { photos } = useGetFavs();

	return (
		<div>
			<ListOfFavorites favs={photos} />
		</div>
	);
};

export default Favorites;
