import styled, { css } from 'styled-components';
import get from 'lodash/get'
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

const CabecalhoWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  ${breakpointsMedia({
    xs: css`
      width: 100%;
    `,
    md: css`
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `
  })}
`;


CabecalhoWrapper.LeftSide = styled.div`
  background-color: ${({ theme, backgroundColor }) => get(theme, `colors.${backgroundColor}.color`)};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px;
  ${breakpointsMedia({
    xs: css`
      width: 83px;
      height: 40px;
      `,
    md: css`
      width: 136px;
      height: 67px;
    `,
  })}
`;


CabecalhoWrapper.RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  text-decoration: none;
  ${breakpointsMedia({
    md: css`
      gap: 38px;
    `
  })}
`;

export default CabecalhoWrapper;
