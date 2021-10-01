import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import CabecalhoWrapper from './styles';

export default function Cabecalho({ openModal }) {
  return (
    <Box
      width="100%"
      backgroundColor="background.light"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderTop="4px solid"
      borderColor="borders.secondary"
    >
      <CabecalhoWrapper>
        <CabecalhoWrapper.LeftSide
          backgroundColor="background.middle"
        >
          <Text
            variant="logo"
            tag="a"
            href="/"
            color="primary.main"
          >
            &lt;danicaus/&gt;
          </Text>
        </CabecalhoWrapper.LeftSide>
        <CabecalhoWrapper.RightSide>
          <li>
            <Text
              variant="navBar"
              tag="a"
              href="/about-me"
              color="primary.main"
            >
              Sobre mim
            </Text>
          </li>
          <li>
            <Text
              variant="navBar"
              tag="button"
              onClick={openModal}
              color="primary.main"
            >
              Contato
            </Text>
          </li>
        </CabecalhoWrapper.RightSide>
      </CabecalhoWrapper>
    </Box>
  );
}

Cabecalho.propTypes = {
  openModal: PropTypes.func.isRequired,
};
