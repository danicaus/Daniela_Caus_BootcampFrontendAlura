import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle'
import get from 'lodash/get'

const Box = styled.div`
  ${propToStyle('height')};
  ${propToStyle('width')};
  ${propToStyle('backgroundImage')};
  ${propToStyle('backgroundPosition')};
  ${propToStyle('backgroundRepeat')};
  ${propToStyle('backgroundSize')};
  ${propToStyle('display')};
  ${propToStyle('alignItems')};
  ${propToStyle('justifyContent')};
  ${propToStyle('borderTop')};
  background-color: ${({ theme, backgroundColor }) => get(theme, `colors.${backgroundColor}.color`)};
  border-color: ${({ theme, borderColor }) => get(theme, `colors.${borderColor}.color`)};
`

export default Box;
