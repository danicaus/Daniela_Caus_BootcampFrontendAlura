import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import SectionTitle from '../../commons/SectionTitle';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';

export default function ProjectScreen({ projeto }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
    >
      <SectionTitle
        content={projeto.title}
      />
      <Box
        display="flex"
        gap={{
          xs: '62px',
          md: '42px',
        }}
        flexDirection={{
          xs: 'column',
          md: 'row',
        }}
        margin={{
          xs: '0 0 36px',
          md: '0 auto 92px',
        }}
        padding="0 16px"
      >
        <Box
          width={{
            xs: '100%',
            md: '500px',
          }}
          height={{
            xs: '200px',
            md: '300px',
          }}
          border="1px solid"
          borderColor="borders.secondary"
          position="relative"
          backgroundColor="background.light"
        >
          <Image src={projeto.imageNext} layout="fill" objectFit="cover" />
        </Box>
        <Box
          maxWidth={{
            xs: '100%',
            md: '500px',
          }}
        >
          <Text
            tag="p"
            variant="paragraph"
            color="tertiary.main"
          >
            {projeto.description}
          </Text>
          <Text
            tag="p"
            variant="paragraph"
            color="tertiary.main"
            fontWeight="700"
            marginTop={{
              xs: '36px',
              md: '63px',
            }}
            marginBottom="16px"
          >
            Visite o site
          </Text>
          <Text
            tag="a"
            href={projeto.url}
            variant="paragraph"
            color="secondary.main"
          >
            {projeto.url}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

ProjectScreen.propTypes = {
  projeto: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    imageNext: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
    slug: PropTypes.string,
    highlight: PropTypes.bool,
    description: PropTypes.string,
  }).isRequired,
};
