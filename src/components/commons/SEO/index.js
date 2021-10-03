import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function SEO({ headTitle }) {
  const hasHeadTitle = Boolean(headTitle);
  const baseTitle = 'Portfólio Alura - Daniela Caus';
  const title = hasHeadTitle
    ? (`${headTitle} | ${baseTitle}`)
    : baseTitle;

  const description = 'Portfólio de projetos propostos pela Alura, desenvolvidos por Daniela Caus';
  const urlBase = 'https://portfolio-danicaus-bootcamp-frontend-alura.vercel.app/';
  const image = 'https://www.alura.com.br/assets/img/alura-share.1617727198.png';

  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

    </Head>
  );
}

SEO.propTypes = {
  headTitle: PropTypes.string,
};

SEO.defaultProps = {
  headTitle: '',
};
