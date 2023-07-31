import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Button } from './styles';

export const FavButton = ({ liked, likes, handleClick }) => {
	const Icon = liked ? MdFavorite : MdFavoriteBorder;

	return (
		<Button onClick={handleClick}>
			<Icon size='32px' />
			{likes} likes!
		</Button>
	);
};

FavButton.propTypes = {
	liked: PropTypes.bool.isRequired,
	likes: (props, propName, componentName) => {
		const propValue = props[propName];
		if (propValue === undefined) {
			return new Error(`${propName} value must be defined`);
		}
		if (propValue < 0) {
			return new Error(`${propName} value must be greated than 0`);
		}
	},
	handleClick: PropTypes.func.isRequired,
};
