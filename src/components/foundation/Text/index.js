import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

const mapTypographyVariants = {
  title: css`
    ${breakpointsMedia({
    xs: css`
        font-size: ${({ theme }) => theme.typographyVariants.titleXS.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.titleXS.fontWeight};
        text-transform: ${({ theme }) => theme.typographyVariants.titleXS.textTransform};
      `,
    md: css`
        font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.title.fontWeight};
        text-transform: ${({ theme }) => theme.typographyVariants.title.textTransform};
      `,
  })}
  `,
  subTitle: css`
    font-size: ${({ theme }) => theme.typographyVariants.subTitle.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.subTitle.fontWeight};
  `,
  logo: css`
    ${breakpointsMedia({
    xs: css`
        font-size: ${({ theme }) => theme.typographyVariants.logoXS.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.logoXS.fontWeight};
        text-transform: ${({ theme }) => theme.typographyVariants.logoXS.textTransform};
      `,
    md: css`
        font-size: ${({ theme }) => theme.typographyVariants.logo.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.logo.fontWeight};
        text-transform: ${({ theme }) => theme.typographyVariants.logo.textTransform};
      `,
  })}
  `,
  navBar: css`
    ${breakpointsMedia({
    xs: css`
        font-size: ${({ theme }) => theme.typographyVariants.navBarXS.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.navBarXS.fontWeight};
      `,
    md: css`
        font-size: ${({ theme }) => theme.typographyVariants.navBar.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.navBar.fontWeight};
      `,
  })}
  `,
  sectionTitle: css`
    ${breakpointsMedia({
    xs: css`
        font-size: ${({ theme }) => theme.typographyVariants.sectionTitleXS.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.sectionTitleXS.fontWeight};
        text-transform: ${({ theme }) => theme.typographyVariants.sectionTitleXS.textTransform};
      `,
    md: css`
        font-size: ${({ theme }) => theme.typographyVariants.sectionTitle.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.sectionTitle.fontWeight};
        text-transform: ${({ theme }) => theme.typographyVariants.sectionTitle.textTransform};
      `,
  })}
  `,
  cardTitle: css`
    ${breakpointsMedia({
    xs: css`
        font-size: ${({ theme }) => theme.typographyVariants.cardTitleXS.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.cardTitleXS.fontWeight};
      `,
    md: css`
        font-size: ${({ theme }) => theme.typographyVariants.cardTitle.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.cardTitle.fontWeight};
      `,
  })}`,
  cardHighlight: css`
    ${breakpointsMedia({
    xs: css`
        font-size: ${({ theme }) => theme.typographyVariants.cardHighlightXS.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.cardHighlightXS.fontWeight};
      `,
    md: css`
        font-size: ${({ theme }) => theme.typographyVariants.cardHighlight.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.cardHighlight.fontWeight};
      `,
  })}`,
  paragraph: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph.fontWeight};
  `,
  getInTouchTitle: css`
  ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.getInTouchTitleXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.getInTouchTitleXS.fontWeight};
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.getInTouchTitle.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.getInTouchTitle.fontWeight};
    `,
  })}
  `,
};

const TextBase = styled.span`
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  ${({ variant }) => mapTypographyVariants[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  font-family: ${({ theme, font }) => get(theme, `fontFamilies.${font}`)};
  ${propToStyle('textAlign')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('transform')};
`;

function Text({
  tag, variant, font, children, ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      font={font}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  font: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'cardTitle',
  font: 'firaCondensed',
};

export default Text;
