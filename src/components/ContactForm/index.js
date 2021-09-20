import React from 'react';
import PropTypes from 'prop-types';
import Box from '../foundation/layout/Box';
import Text from '../foundation/Text';
import Button from '../foundation/layout/Button';
import TextField from '../foundation/layout/Input';

function ContactForm() {
  return (
    <form>
      <Box
        display="flex"
        flexDirection="column"
      >
        <TextField label="Seu nome" tag="input" type="text" id="name" name="name" />
        <TextField label="Seu email" tag="input" type="email" id="email" name="email" />
        <TextField label="Sua mensagem" tag="textarea" type="text" id="message" name="message" />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            tag="span"
            variant="navBar"
          >
            ENVIAR
          </Text>
          <Button
            type="submit"
            margin="0 0 0 12px"
          >
            <Text
              tag="p"
              variant="cardTitle"
              color="primary.main"
              font="firaRegular"
            >
              &gt;
            </Text>
          </Button>
        </Box>
      </Box>
    </form>
  );
}

export default function ContactFormWrapper({ propsDoModal, onClose }) {
  return (
    <Box
      backgroundColor="background.light"
      position="relative"
      padding={{
        xs: '75px 18px 27px',
        md: '33px 45px',
      }}
      borderRadius="10px 10px 0 0"
      boxShadow="0 1px 25px 5px #0000001a"
      width="100%"
      maxWidth={{
        md: '900px',
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...propsDoModal}
    >
      <Text
        tag="h3"
        variant="getInTouchTitle"
        color="primary.main"
        textAlign="center"
        marginBottom={{
          xs: '24px',
          md: '30px',
        }}
      >
        ENVIE SUA MENSAGEM
      </Text>
      <Button
        position="absolute"
        top={{
          xs: '16px',
          md: '32px',
        }}
        right={{
          xs: '15px',
          md: '24px',
        }}
        onClick={() => {
          onClose();
        }}
      >
        <Text
          tag="p"
          variant="cardTitle"
          color="primary.main"
          font="firaRegular"
          transform="rotate(135deg)"
        >
          +
        </Text>
      </Button>
      <ContactForm />
    </Box>
  );
}

ContactFormWrapper.propTypes = {
  propsDoModal: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
