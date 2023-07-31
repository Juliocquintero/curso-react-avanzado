import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const MetaAttributes = ({ title, description }) => {
	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta name='description' content={description} />
			</Helmet>
		</>
	);
};

MetaAttributes.propTypes = {
	title: PropTypes.string.isRequired,
  description: PropTypes.string
};


export default MetaAttributes;


