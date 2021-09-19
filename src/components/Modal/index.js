import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import Box from '../foundation/layout/Box';

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; 
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

export default function Modal({ isOpen, onClose, children }) {
  const motionVariants = {
    open: {
      y: 0,
    },
    closed: {
      y: '100%',
    },
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(e) => {
        if (!e.target.closest('[data-modal-safe-area="true"]')) {
          onClose();
        }
      }}
    >
      <motion.div
        variants={motionVariants}
        animate={isOpen ? 'open' : 'closed'}
        style={{
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        {children({
          'data-modal-safe-area': 'true',
        })}
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};
