import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

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
  ${breakpointsMedia({
    xs: css`
      margin-top: 12px;
    `,
    md: css`
      margin-top: 8px;
    `,
  })};

  &:hover {
    filter: brightness(1.4);
  };
`;

export default Button;
