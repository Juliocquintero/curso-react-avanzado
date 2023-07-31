import React from 'react';
import PropTypes from 'prop-types';
import { Link, Grid, Image } from './styles';

export const ListOfFavorites = ({ favs = [] }) => {
	return (
		<>
			<Grid>
				{favs.map((fav) => (
					<Link key={fav.id} to={`/detail/${fav.id}`}>
						<Image src={fav.src} />
					</Link>
				))}
			</Grid>
		</>
	);
};

ListOfFavorites.propTypes = {
	liked: PropTypes.array,
};
