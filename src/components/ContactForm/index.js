import React from 'react';
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

export default function ContactFormWrapper() {
  return (
    <Box>
      <Text
        tag="h3"
        variant="sectionTitle"
      >
        Envie sua mensagem
      </Text>
      <ContactForm />
    </Box>
  );
}
