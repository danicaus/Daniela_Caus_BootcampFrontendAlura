/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import Button from '../../foundation/layout/Button';
import TextField from '../../foundation/layout/Input';
import errorAnimation from './animations/error.json';
import successAnimation from './animations/success.json';

const formStates = {
  DEFAULT: 'DEFAULT',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function ContactForm() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formState, setFormState] = useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleForm(event) {
    event.preventDefault();
    setIsFormSubmitted(true);

    const userDTO = {
      name: userInfo.name,
      email: userInfo.email,
      message: userInfo.message,
    };

    fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDTO),
    })
      .then((routeResponse) => {
        if (routeResponse.ok) {
          return routeResponse.json();
        }
        throw new Error('Não foi possível cadastrar o usuário');
      })
      .then((routeResponseConverted) => {
        setFormState(formStates.DONE);
        console.log(routeResponseConverted);
      })
      .catch((error) => {
        setFormState(formStates.ERROR);
        console.error(error);
      });
  }

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormEmpty = userInfo.name.length === 0 || userInfo.email.length === 0 || userInfo.message.length === 0;

  return (
    <form
      onSubmit={handleForm}
    >
      <Box
        display="flex"
        flexDirection="column"
      >
        <TextField
          label="Seu nome"
          tag="input"
          type="text"
          id="name"
          name="name"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          label="Seu email"
          tag="input"
          type="email"
          id="email"
          name="email"
          onChange={(e) => handleChange(e)}
          pattern="[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{1,4}"
        />
        <TextField
          label="Sua mensagem"
          tag="textarea"
          type="text"
          id="message"
          name="message"
          onChange={(e) => handleChange(e)}
        />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          opacity={isFormEmpty ? '0' : '1'}
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
            disabled={isFormEmpty}
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
        {isFormSubmitted && formState === formStates.DONE && (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            margin="12px 0 0 0"
          >
            <Lottie
              width="50px"
              height="50px"
              config={{ animationData: successAnimation }}
            />
          </Box>
        )}
        {isFormSubmitted && formState === formStates.ERROR && (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            margin="12px 0 0 0"
          >
            <Lottie
              width="50px"
              height="50px"
              config={{ animationData: errorAnimation }}
            />
          </Box>
        )}
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
