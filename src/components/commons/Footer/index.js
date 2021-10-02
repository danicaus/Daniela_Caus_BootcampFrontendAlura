import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import get from 'lodash/get';
import Box from '../../foundation/layout/Box';
import Link from '../Link';

const FooterBase = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, backgroundColor }) => get(theme, `colors.${backgroundColor}.color`)};
`;

export default function Footer() {
  const socialNetworks = [
    {
      id: 1,
      name: 'Twitter',
      link: 'https://twitter.com/danicaus',
      image: '/images/icon-twitter.svg',
    },
    {
      id: 2,
      name: 'Github',
      link: 'http://github.com/danicaus',
      image: '/images/icon-github.svg',
    },
  ];

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
        {socialNetworks.map((socialNetwork) => (
          <Link
            key={socialNetwork.id}
            href={socialNetwork.link}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              alt={socialNetwork.name}
              src={socialNetwork.image}
              width="32px"
              height="32px"
            />
          </Link>
        ))}
      </Box>
    </FooterBase>
  );
}
