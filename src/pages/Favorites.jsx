import React from 'react';
import useGetFavs from '../hooks/useGetFavs';
import { ListOfFavorites } from '../components/ListOfFavs';
import MetaAttributes from '../components/MetaAttributes';

const Favorites = () => {
	const { photos } = useGetFavs();

	return (
		<>
			<MetaAttributes
				title=' Petgram | Favoritos'
				description='En esta sección encontrarás tus foto favoritas'
			/>
			<ListOfFavorites favs={photos} />
		</>
	);
};

export default Favorites;
