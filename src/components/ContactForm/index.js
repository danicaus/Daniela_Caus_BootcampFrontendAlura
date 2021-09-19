import React from 'react';
import PropTypes from 'prop-types';
import Box from '../foundation/layout/Box';
import Text from '../foundation/Text';

function ContactForm() {
  return (
    <>
      <p>
        Formulário
      </p>
    </>
  );
}

export default function ContactFormWrapper({ propsDoModal }) {
  return (
    <Box
      backgroundColor="background.light"
      padding="33px 45px"
      borderRadius="10px 10px 0 0"
      boxShadow="0 1px 25px 5px #0000001a"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...propsDoModal}
    >
      <Text
        tag="h3"
        variant="sectionTitle"
        // color="primary.main"
      >
        Envie sua mensagem
      </Text>
      <ContactForm />
    </Box>
  );
}

ContactFormWrapper.propTypes = {
  propsDoModal: PropTypes.string.isRequired,
};
