/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';
import Box from '../../foundation/layout/Box';

export default function Capa({ title, subtitle, boxProps }) {
  return (
    <Box
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom left"
      backgroundSize="cover"
      height="100vh"
      display="flex"
      alignItems="center"
      {...boxProps}
    >
      <Box
        display="block"
        width={{
          xs: '100%',
          md: '50%',
        }}
      >
        <Text
          tag="h1"
          variant="title"
          color="tertiary.main"
          textAlign="center"
        >
          {title}
        </Text>
        <Text
          tag="h2"
          variant="subTitle"
          color="tertiary.main"
          textAlign="center"
        >
          {subtitle}
        </Text>
      </Box>

    </Box>
  );
}

Capa.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  boxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    position: PropTypes.string,
    top: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    bottom: PropTypes.string,
    zIndex: PropTypes.string,
  }),
};

Capa.defaultProps = {
  boxProps: {
    backgroundImage: 'url(./images/mergulho.png)',
    position: '',
    top: '',
    left: '',
    right: '',
    bottom: '',
    zIndex: '',
  },
};
