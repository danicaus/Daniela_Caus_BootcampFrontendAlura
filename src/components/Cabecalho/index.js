import Box from "../foundation/layout/Box"
import Text from "../foundation/Text"
import CabecalhoWrapper from "./styles"


export default function Cabecalho() {
  const links = [
    {
      text: 'Sobre mim',
      url: '/about-me'
    },
    {
      text: 'Contato',
      url: '/contact'
    }
  ]
  
  return(
    <Box
      width='100%'
      backgroundColor='background.light'
      display='flex'
      justifyContent='center'
      alignItems='center'
      borderTop='4px solid'
      borderColor='borders.secondary'
    >
      <CabecalhoWrapper>
        <CabecalhoWrapper.LeftSide
          backgroundColor='background.middle'
        >
          <Text
            variant='logo'
            tag='a'
            href='/'
            color='primary.main'
          >
            &lt;me/&gt;
          </Text>
        </CabecalhoWrapper.LeftSide>
        <CabecalhoWrapper.RightSide>
          {links.map(link =>(
            <li key={link.url}>
              <Text
                variant='navBar'
                tag='a'
                href={link.url}
                color='primary.main'
              >
                {link.text}
              </Text>
            </li>  
          ))}
        </CabecalhoWrapper.RightSide>
      </CabecalhoWrapper>
    </Box>
  )
}