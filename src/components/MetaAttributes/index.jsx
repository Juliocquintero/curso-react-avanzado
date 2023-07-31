import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';

const MetaAttributes = ({ title, description }) => {
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{title}</title>
					<meta name='description' content={description} />
				</Helmet>
			</HelmetProvider>
		</>
	);
};

MetaAttributes.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
};

export default MetaAttributes;
