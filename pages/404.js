import React from 'react';
import Cabecalho from '../src/components/commons/Cabecalho';
import Footer from '../src/components/commons/Footer';
import Box from '../src/components/foundation/layout/Box';
import Text from '../src/components/foundation/Text';

export default function ErrorPage() {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Cabecalho />
      <Box
        backgroundImage="linear-gradient(#002d4aaa, #002d4aaa), url(./images/mergulho.png)"
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom left"
        backgroundSize="cover"
        display="flex"
        alignItems="center"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="-1"
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
            404
          </Text>
          <Text
            tag="h2"
            variant="subTitle"
            color="tertiary.main"
            textAlign="center"
          >
            Página Não Encontrada
          </Text>
        </Box>

      </Box>
      <Footer />
    </Box>
  );
}
