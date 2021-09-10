import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle'
import get from 'lodash/get'

const Box = styled.div`
  ${propToStyle('height')};
  ${propToStyle('width')};
  ${propToStyle('top')};
  ${propToStyle('left')};
  ${propToStyle('position')};
  ${propToStyle('backgroundImage')};
  ${propToStyle('backgroundPosition')};
  ${propToStyle('backgroundRepeat')};
  ${propToStyle('backgroundSize')};
  ${propToStyle('display')};
  ${propToStyle('flexDirection')};
  ${propToStyle('alignItems')};
  ${propToStyle('justifyContent')};
  ${propToStyle('borderTop')};
  ${propToStyle('border')};
  ${propToStyle('padding')};
  background-color: ${({ theme, backgroundColor }) => get(theme, `colors.${backgroundColor}.color`)};
  border-color: ${({ theme, borderColor }) => get(theme, `colors.${borderColor}.color`)};
`

export default Box;
