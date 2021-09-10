import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle'
import get from 'lodash/get'

const Box = styled.div`
  ${propToStyle('height')};
  ${propToStyle('width')};
  ${propToStyle('maxWidth')};
  ${propToStyle('top')};
  ${propToStyle('left')};
  ${propToStyle('overflow')};
  ${propToStyle('position')};
  ${propToStyle('backgroundImage')};
  ${propToStyle('backgroundPosition')};
  ${propToStyle('backgroundRepeat')};
  ${propToStyle('backgroundSize')};
  ${propToStyle('display')};
  ${propToStyle('flexDirection')};
  ${propToStyle('flexWrap')};
  ${propToStyle('alignItems')};
  ${propToStyle('justifyContent')};
  ${propToStyle('order')};
  ${propToStyle('gap')};
  ${propToStyle('borderTop')};
  ${propToStyle('border')};
  ${propToStyle('padding')};
  ${propToStyle('margin')};
  background-color: ${({ theme, backgroundColor }) => get(theme, `colors.${backgroundColor}.color`)};
  border-color: ${({ theme, borderColor }) => get(theme, `colors.${borderColor}.color`)};
`

export default Box;
