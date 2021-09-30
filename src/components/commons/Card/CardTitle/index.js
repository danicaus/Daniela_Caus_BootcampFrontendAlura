import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../foundation/layout/Box';
import Text from '../../../foundation/Text';

function CardTitle({ title, highlight }) {
  const highlightProject = (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={{
        xs: 'center',
        md: 'start',
      }}
      padding={{
        xs: '20px 72px',
        md: '40px 30px',
      }}
      textAlign="center"
    >
      <Text
        as="h3"
        variant="cardTitle"
        color="tertiary.main"
      >
        {title}
      </Text>
    </Box>
  );

  const normalProject = (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={{
        xs: '20px 72px',
        md: '40px 45px',
      }}
    >
      <Text
        as="h3"
        variant="cardTitle"
        color="tertiary.main"
      >
        {title}
      </Text>
    </Box>
  );

  return (
    highlight ? highlightProject : normalProject
  );
}

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  highlight: PropTypes.bool.isRequired,
};

export default CardTitle;
