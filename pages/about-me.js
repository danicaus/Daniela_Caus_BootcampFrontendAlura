import React from 'react';
import PropTypes from 'prop-types';
import AboutMeScreen from '../src/components/screens/AboutMeScreen';
import websitePageHOC from '../src/components/wrappers/WebSitePage/hoc';

function AboutMe({ aluraRepos }) {
  return (
    <AboutMeScreen aluraRepos={aluraRepos} />
  );
}

export default websitePageHOC(AboutMe, {
  pageWrapperProps: {
    SEOProps: {
      headTitle: 'Sobre mim',
    },
  },
});

export async function getStaticProps() {
  const myRepos = await fetch('https://api.github.com/users/danicaus/repos')
    .then((response) => response.json())
    .then((responseJson) => responseJson);

  const regex = /alura/i;

  const aluraRepos = myRepos.filter((repo) => {
    if (regex.test(repo.name)) {
      return true;
    }
    return false;
  });

  return {
    props: {
      aluraRepos,
    },
  };
}

AboutMe.propTypes = {
  aluraRepos: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    html_url: PropTypes.string,
  }).isRequired,
};
