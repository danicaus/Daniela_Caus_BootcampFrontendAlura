import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../foundation/layout/Box';
import Text from '../../../foundation/Text';

function CardText({ description }) {
  return (
    <Box
      padding="0 30px"
      display={{
        xs: 'none',
        md: 'block',
      }}
    >
      <Text
        as="p"
        variant="paragraph"
        color="tertiary.main"
        font="firaRegular"
      >
        {description}
      </Text>
    </Box>
  );
}

CardText.propTypes = {
  description: PropTypes.string.isRequired,
};

export default CardText;
