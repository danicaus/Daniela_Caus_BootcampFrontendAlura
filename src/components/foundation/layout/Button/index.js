import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  width: 46px;
  padding: 0;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borders.secondary.color};
  border-radius: 50%;
  cursor: pointer;
  ${propToStyle('margin')};
  ${propToStyle('position')};
  ${propToStyle('top')};
  ${propToStyle('right')};

  &:hover {
    filter: brightness(1.4);
  };

  &:disabled {
    cursor: default;
  }
`;

export default Button;
