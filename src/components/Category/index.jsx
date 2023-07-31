import React from 'react';
import { Image, Link } from './styles';
import PropTypes from 'prop-types';
const DEFAULT_IMAGE =
	'https://placehold.co/800x800/000000/FFF?text=Imagen+por+defecto';

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => {
	return (
		<Link to={path}>
			<Image src={cover} alt='' />
			{emoji}
		</Link>
	);
};

Category.propTypes = {
	cover: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
	emoji: PropTypes.string.isRequired,
};
