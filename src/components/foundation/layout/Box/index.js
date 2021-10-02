import styled from 'styled-components';
import get from 'lodash/get';
import propToStyle from '../../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('height')};
  ${propToStyle('width')};
  ${propToStyle('maxWidth')};
  ${propToStyle('minHeight')};
  ${propToStyle('top')};
  ${propToStyle('left')};
  ${propToStyle('right')};
  ${propToStyle('bottom')};
  ${propToStyle('zIndex')};
  ${propToStyle('overflow')};
  ${propToStyle('opacity')};
  ${propToStyle('position')};
  ${propToStyle('backgroundImage')};
  ${propToStyle('backgroundPosition')};
  ${propToStyle('backgroundRepeat')};
  ${propToStyle('backgroundSize')};
  ${propToStyle('display')};
  ${propToStyle('flexDirection')};
  ${propToStyle('flexWrap')};
  ${propToStyle('flex')};
  ${propToStyle('alignItems')};
  ${propToStyle('justifyContent')};
  ${propToStyle('order')};
  ${propToStyle('gap')};
  ${propToStyle('textAlign')};
  ${propToStyle('borderTop')};
  ${propToStyle('border')};
  ${propToStyle('borderRadius')};
  ${propToStyle('boxShadow')};
  ${propToStyle('padding')};
  ${propToStyle('margin')};
  background-color: ${({ theme, backgroundColor }) => get(theme, `colors.${backgroundColor}.color`)};
  border-color: ${({ theme, borderColor }) => get(theme, `colors.${borderColor}.color`)};
`;

export default Box;
