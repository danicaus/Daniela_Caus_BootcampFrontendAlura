import styled from "styled-components";
import Box from "../foundation/layout/Box";
import get from "lodash/get"


const FooterBase = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, backgroundColor }) => get(theme, `colors.${backgroundColor}.color`)};
`

export default function Footer() {
  
  const socialNetworks = [
    {
      id: 1,
      name: "Twitter",
      link: "https://twitter.com/danicaus",
      image: "./images/icon-twitter.svg"
    },
    {
      id: 2,
      name: "Github",
      link: "http://github.com/danicaus",
      image: "./images/icon-github.svg"
    },
    {
      id: 3,
      name: "Medium",
      link: "/",
      image: "./images/icon-medium.svg"
    }
  ]
  
  
  return (
    <FooterBase
      backgroundColor="background.light"
    >
      <Box
        backgroundColor="background.middle"
        padding="18px 24px"
        display="flex"
        alignItems="center"
        gap="40px"
      >
        {socialNetworks.map(socialNetwork => {
          return (
            <a
              key={socialNetwork.id}
              href={socialNetwork.link}
              target="_blank"
            >
              <img 
                alt={socialNetwork.name}
                src={socialNetwork.image}
                width="32px"
                height="32px"
              />
            </a>
          )
        })}
      </Box>
    </FooterBase>
  )
}