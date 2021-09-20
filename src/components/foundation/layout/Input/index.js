import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../Text';
import Box from '../Box';
import propToStyle from '../../../../theme/utils/propToStyle';

const Input = styled(Text)`
  width: 100%;
  margin: 12px 0 32px 0;
  border: 1px solid;
  padding: 10px;
  border-color: ${({ theme }) => (theme.colors.secondary.main.color)};
  ${propToStyle('height')};
  resize: none;
`;

export default function TextField({
  label,
  tag,
  type,
  id,
  name,
  onChange,
  value,
  ...inputProps
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
    >
      <Text
        tag="label"
        variant="navBar"
        htmlFor={id}
        color="primary.main"
      >
        {label}
      </Text>
      <Input
        as={tag}
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        height={tag === 'textarea' ? '120px' : '48px'}
        required
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...inputProps}
      />
    </Box>
  );
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  inputProps: PropTypes.string.isRequired,
};
