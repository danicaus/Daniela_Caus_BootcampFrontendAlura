import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import SectionTitle from '../../commons/SectionTitle';
import me from '../../../../public/images/me.png';
import Box from '../../foundation/layout/Box';
import Button from '../../foundation/layout/Button';
import Text from '../../foundation/Text';
import profileDescription from '../../../content/Profile';

export default function AboutMeScreen({ aluraRepos }) {
  const regex = /[-_]/g;

  return (
    <>
      <SectionTitle
        content="Sobre mim"
      />
      <Box
        backgroundImage="linear-gradient(#002d4aaa, #002d4aaa), url(./images/mergulho.png)"
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom left"
        backgroundSize="cover"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="-1"
        boxShadow="inset 0 -70px 40px #002d4a"
      />
      <Box
        position="relative"
        height={{
          xs: '280px',
          md: '450px',
        }}
        width={{
          xs: '280px',
          md: '450px',
        }}
        border="1px solid"
        borderColor="borders.secondary"
        backgroundColor="background.light"
        margin="0 auto"
      >
        <Image src={me} layout="fill" objectFit="cover" />
      </Box>
      <Button
        margin={{
          xs: '24px auto',
          md: '50px auto 80px',
        }}
      >
        <Text
          tag="p"
          variant="cardTitle"
          color="secondary.main"
          font="firaRegular"
        >
          +
        </Text>
      </Button>
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        maxWidth={{
          xs: '100%',
          md: '560px',
        }}
        maxHeight={{
          xs: 'auto',
          md: '370px',
        }}
        columnGap="60px"
        margin="0 auto"
        padding={{
          xs: '0 30px 0 15px',
          md: '0',
        }}
      >
        {profileDescription.map((paragraph) => (
          <Text
            key={paragraph.key}
            variant="paragraph"
            tag="p"
            color="tertiary.main"
            width={{
              xs: '100%',
              md: 'calc(50% - 30px)',
            }}
            marginBottom="10px"
          >
            {paragraph.content}
          </Text>
        ))}
      </Box>
      <SectionTitle
        content="Meus portfólios"
      />
      <Box
        width={{
          xs: '100%',
          md: '560px',
        }}
        margin="0 auto 50px"
        padding={{
          xs: '0 30px 0 15px',
          md: '0',
        }}
        textAlign="left"
      >
        {aluraRepos.map((repo) => (
          <Box
            key={repo.id}
            margin="0 0 10px 0"
          >
            <Text
              variant="paragraph"
              tag="p"
              color="tertiary.main"
              marginBottom="16px"
              fontWeight="700"
              textTransform="capitalize"
            >
              {repo.name.replace(regex, ' ')}
            </Text>
            <Text
              variant="paragraph"
              tag="a"
              href={repo.html_url}
              color="secondary.main"
              display="block"
              marginBottom="16px"
            >
              {repo.html_url}
            </Text>
          </Box>
        ))}
      </Box>
    </>
  );
}

AboutMeScreen.propTypes = {
  aluraRepos: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    html_url: PropTypes.string,
  }).isRequired,
};
