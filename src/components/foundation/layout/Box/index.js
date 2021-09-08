import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle'

const Box = styled.div`
  ${propToStyle('height')};
  ${propToStyle('width')};
  ${propToStyle('backgroundImage')};
  ${propToStyle('backgroundPosition')};
  ${propToStyle('backgroundRepeat')};
  ${propToStyle('backgroundSize')};
  ${propToStyle('display')};
  ${propToStyle('alignItems')};
`

export default Box;
