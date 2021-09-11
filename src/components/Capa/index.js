import React from 'react';
import Text from '../foundation/Text';
import Box from '../foundation/layout/Box';

export default function Capa() {
  return (
    <Box
      backgroundImage="url(./images/mergulho.png)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom left"
      backgroundSize="cover"
      height="100vh"
      display="flex"
      alignItems="center"
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
          Daniela Caus
        </Text>
        <Text
          tag="h2"
          variant="subTitle"
          color="tertiary.main"
          textAlign="center"
        >
          Portfolio
        </Text>
      </Box>

    </Box>
  );
}
