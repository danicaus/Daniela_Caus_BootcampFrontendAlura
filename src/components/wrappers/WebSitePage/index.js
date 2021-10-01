/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Cabecalho from '../../commons/Cabecalho';
import ContactFormWrapper from '../../commons/ContactForm';
import Footer from '../../commons/Footer';
import Modal from '../../commons/Modal';
import Box from '../../foundation/layout/Box';
import Capa from '../../commons/Capa';

export const WebsitePageContext = createContext({
  toggleModalContato: () => {},
});

export default function WebsitePageWrapper({
  children,
  boxProps,
  capaProps,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalContato: () => {
          setIsModalOpen(!isModalOpen);
        },
      }}
    >
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="space-between"
        {...boxProps}
      >
        {capaProps.display && <Capa title={capaProps.title} subtitle={capaProps.subtitle} />}
        <Cabecalho
          openModal={() => {
            setIsModalOpen(true);
          }}
        />
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          {(propsDoModal) => (
            <ContactFormWrapper
              propsDoModal={propsDoModal}
              onClose={() => {
                setIsModalOpen(false);
              }}
            />
          )}
        </Modal>
        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  boxProps: PropTypes.shape({
    height: PropTypes.string,
  }),
  capaProps: PropTypes.shape({
    display: PropTypes.bool,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }),
};

WebsitePageWrapper.defaultProps = {
  boxProps: {
    height: '',
  },
  capaProps: {
    display: false,
  },
};
