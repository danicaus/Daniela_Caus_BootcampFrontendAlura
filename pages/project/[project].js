import React from 'react';
import PropTypes from 'prop-types';
import ProjectScreen from '../../src/components/screens/ProjectScreen';
import websitePageHOC from '../../src/components/wrappers/WebSitePage/hoc';
import db from '../../db.json';

function ProjectPage({ project }) {
  return (
    <ProjectScreen projeto={project} />
  );
}

export default websitePageHOC(ProjectPage);

export function getStaticProps({ params }) {
  const projectContent = db.projetos.find((projeto) => {
    if (projeto.slug === params.project) {
      return true;
    }
    return false;
  });

  return {
    props: {
      project: projectContent,
    },
  };
}

export function getStaticPaths() {
  const paths = db.projetos.map((projeto) => (
    { params: { project: projeto.slug } }
  ));

  return {
    paths,
    fallback: false,
  };
}

ProjectPage.propTypes = {
  project: PropTypes.shape({
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
