import React from 'react';
import PropTypes from 'prop-types';
import Box from '../foundation/layout/Box';
import CardImage from './CardImage';
import CardTitle from './CardTitle';
import CardText from './CardText';

function Card({ infoProjeto }) {
  const highlightProject = (
    <Box
      display="flex"
      flexDirection={{
        xs: 'column',
        md: 'row',
      }}
      border="1px solid"
      borderColor="borders.main"
      width={{
        xs: 'auto',
        md: '100%',
      }}
      order={{
        md: '0',
        xs: '-1',
      }}
    >
      <CardImage
        highlight={infoProjeto.highlight}
        image={infoProjeto.image}
        description={infoProjeto.description}
      />
      <Box
        display="flex"
        flexDirection="column"
      >
        <CardTitle
          title={infoProjeto.title}
          highlight={infoProjeto.highlight}
        />
        <CardText
          description={infoProjeto.description}
        />
      </Box>
    </Box>
  );

  const normalProject = (
    <Box
      display="flex"
      flexDirection="column"
      border="1px solid"
      borderColor="borders.main"
    >
      <CardImage
        highlight={infoProjeto.highlight}
        image={infoProjeto.image}
        description={infoProjeto.description}
      />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CardTitle
          title={infoProjeto.title}
        />
      </Box>
    </Box>
  );

  return (
    infoProjeto.highlight ? highlightProject : normalProject
  );
}

Card.propTypes = {
  infoProjeto: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    highlight: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default Card;
