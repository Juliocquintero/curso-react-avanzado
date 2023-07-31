import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Article, Img, ImgWrapper } from './styles';

import useNearScreen from '../../hooks/useNearScreen';
import useLikeStorage from '../../hooks/useLocalStorage';
import useMutationToogleLike from '../../hooks/useMutationToogleLike';

import { FavButton } from '../FavButton';

const DEFAULT_IMAGE =
	'https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
	const { ref, show } = useNearScreen();

	const { handleToggleLike } = useMutationToogleLike();

	const key = `like-${id}`;
	const [liked, setLiked] = useLikeStorage(key, false);

	const handleClick = () => {
		setLiked(!liked);
		handleToggleLike(id);
	};

	return (
		<Article ref={ref}>
			{show && (
				<>
					<Link to={`/detail/${id}`}>
						<ImgWrapper>
							<Img src={src} alt='' />
						</ImgWrapper>
					</Link>
					<FavButton handleClick={handleClick} liked={liked} likes={likes} />
				</>
			)}
		</Article>
	);
};

PhotoCard.propTypes = {
	id: PropTypes.string.isRequired,
	likes: (props, propName, componentName) => {
		const propValue = props[propName];
		if (propValue === undefined) {
			return new Error(`${propName} value must be defined`);
		}
		if (propValue < 0) {
			return new Error(`${propName} value must be greated than 0`);
		}
	},
	src: PropTypes.string,
};
