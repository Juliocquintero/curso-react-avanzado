import React from 'react';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';
import { useParams } from 'react-router-dom';
import MetaAttributes from '../components/MetaAttributes';

const Home = () => {
	const { categoryId } = useParams();
	return (
		<>
			<MetaAttributes
				title='Petgram | Home'
				description='Con Petgram puedes encontrar fotos de animales domesticos muy bonitos'
			/>
			<ListOfCategories />
			<ListOfPhotoCards categoryId={categoryId} />
		</>
	);
};

export default Home;
