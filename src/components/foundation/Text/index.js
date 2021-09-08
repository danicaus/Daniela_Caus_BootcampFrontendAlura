import breakpointsMedia from "../../../theme/utils/breakpointsMedia";
import theme from "../../../theme";
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import propToStyle from "../../../theme/utils/propToStyle";
import get from 'lodash/get'

const { typographyVariants } = theme

const mapTypographyVariants = {
  title: css`
    ${breakpointsMedia({
      xs: css`
        font-size: ${typographyVariants.titleXS.fontSize};
        font-weight: ${typographyVariants.titleXS.fontWeight};
        text-transform: ${typographyVariants.titleXS.textTransform};
      `,
      md: css`
        font-size: ${typographyVariants.title.fontSize};
        font-weight: ${typographyVariants.title.fontWeight};
        text-transform: ${typographyVariants.title.textTransform};
      `
    })}
  `,
  subTitle: css`
    font-size: ${typographyVariants.subTitle.fontSize};
    font-weight: ${typographyVariants.subTitle.fontWeight};
  `,
  logo: css`
    ${breakpointsMedia({
      xs: css`
        font-size: ${typographyVariants.logoXS.fontSize};
        font-weight: ${typographyVariants.logoXS.fontWeight};
        text-transform: ${typographyVariants.logoXS.textTransform};
      `,
      md: css`
        font-size: ${typographyVariants.logo.fontSize};
        font-weight: ${typographyVariants.logo.fontWeight};
        text-transform: ${typographyVariants.logo.textTransform};
      `
    })}
  `,
  navBar: css`
    ${breakpointsMedia({
      xs: css`
        font-size: ${typographyVariants.navBarXS.fontSize};
        font-weight: ${typographyVariants.navBarXS.fontWeight};
      `,
      md: css`
        font-size: ${typographyVariants.navBar.fontSize};
        font-weight: ${typographyVariants.navBar.fontWeight};
      `
    })}
  `,
  sectionTitle: css`
    ${breakpointsMedia({
      xs: css`
        font-size: ${typographyVariants.sectionTitleXS.fontSize};
        font-weight: ${typographyVariants.sectionTitleXS.fontWeight};
        text-transform: ${typographyVariants.sectionTitleXS.textTransform};
      `,
      md: css`
        font-size: ${typographyVariants.sectionTitle.fontSize};
        font-weight: ${typographyVariants.sectionTitle.fontWeight};
        text-transform: ${typographyVariants.sectionTitle.textTransform};
      `
    })}
  `,
  cardTitle: css`
    ${breakpointsMedia({
      xs: css`
        font-size: ${typographyVariants.cardTitleXS.fontSize};
        font-weight: ${typographyVariants.cardTitleXS.fontWeight};
      `,
      md: css`
        font-size: ${typographyVariants.cardTitle.fontSize};
        font-weight: ${typographyVariants.cardTitle.fontWeight};
      `
    })}`,
  paragraph: css`
    font-size: ${typographyVariants.paragraph.fontSize};
    font-weight: ${typographyVariants.paragraph.fontWeight};
  `,
}

const TextBase = styled.span`
  margin: 0;
  padding: 0;
  ${(props) => mapTypographyVariants[props.variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  ${propToStyle('textAlign')}
`;

export default function Text({tag, variant, children, ...props}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      {...props}
    >
      {children}
    </TextBase>
  )
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Text.defaultProps = {
  tag: 'span',
  variant: 'cardTitle',
}