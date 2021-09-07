import styled from 'styled-components';

const Box = styled.div`
  ${propToStyle('height')};
  ${propToStyle('backgroundImage')};
  ${propToStyle('backgroundPosition')};
  ${propToStyle('backgroundRepeat')};
  ${propToStyle('position')};

`

export default Box;
