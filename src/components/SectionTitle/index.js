import React from 'react';
import PropTypes from 'prop-types';
import Text from '../foundation/Text';

function SectionTitle({ content }) {
  return (
    <Text
      as="h2"
      variant="sectionTitle"
      textAlign="center"
      color="tertiary.main"
      marginTop={{
        xs: '32px',
        md: '64px',
      }}
      marginBottom={{
        xs: '33px',
        md: '85px',
      }}
    >
      {content}
    </Text>
  );
}

SectionTitle.propTypes = {
  content: PropTypes.string.isRequired,
};

export default SectionTitle;
