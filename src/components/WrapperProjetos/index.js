import React from 'react';
import PropTypes from 'prop-types';
import Box from '../foundation/layout/Box';

function WrapperProjetos({ children }) {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      padding={{
        xs: '0 40px',
        md: '0 45px',
      }}
      gap={{
        xs: '32px',
        md: '30px 18px',
      }}
      margin="0 auto 50px"
      width="100%"
      maxWidth={{
        md: '996px',
      }}
    >
      {children}
    </Box>
  );
}

WrapperProjetos.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WrapperProjetos;
