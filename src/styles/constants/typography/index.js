import { css } from '@emotion/core';
import styled from '@emotion/styled';

import COLORS from '../colors';
import MEDIA_QUERIES from '../mediaQueries';

const FONT_SIZE = {
  displaySmall: '2rem',
  displayLarge: '2.25rem',

  headingSmall: '1.5rem',
  headingLarge: '1.75rem',

  titleSmall: '1.25rem',
  titleLarge: '1.5rem',


  bodySmall: '0.875rem',
  bodyLarge: '1rem',

  captionSmall: '0.70rem',
  captionLarge: '0.80rem',
};

const FONT_FAMILY = {
  primary: 'serif',
  secondary: 'mono',
}

const displayStyle = css`
  font-size: ${FONT_SIZE.displaySmall};
  font-family: ${FONT_FAMILY.primary};
  color: ${COLORS.primaryBlack};

  ${MEDIA_QUERIES.mdUp} {
    font-size: ${FONT_SIZE.displayLarge};
  }
`;

const headingStyle = css`
  font-size: ${FONT_SIZE.headingSmall};
  font-family: ${FONT_FAMILY.primary};
  color: ${COLORS.primaryBlack};
  font-weight: 600;

  ${MEDIA_QUERIES.mdUp} {
    font-size: ${FONT_SIZE.headingLarge};
  }
`;

const titleStyle = css`
  font-size: ${FONT_SIZE.titleSmall};
  font-family: ${FONT_FAMILY.primary};
  color: ${COLORS.primaryBlack};

  ${MEDIA_QUERIES.mdUp} {
    font-size: ${FONT_SIZE.titleLarge};
  }
`;

const captionStyle = css`
  font-size: ${FONT_SIZE.captionSmall};
  font-family: ${FONT_FAMILY.secondary};
  color: ${COLORS.primaryBlack};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;

  ${MEDIA_QUERIES.mdUp} {
    font-size: ${FONT_SIZE.captionLarge};
  }
`;

const pStyle = css`
  font-size: ${FONT_SIZE.bodySmall};
  font-family: ${FONT_FAMILY.primary};
  color: ${COLORS.primaryBlack};
  line-height: 1.5;
  letter-spacing: .1px;
  ${MEDIA_QUERIES.mdUp} {
    font-size: ${FONT_SIZE.bodyLarge};
  }
`;

const Display = styled.h1(displayStyle);
const Heading = styled.h2(headingStyle);
const Title = styled.h3(titleStyle);
const Caption = styled.p(captionStyle);

export const style = {
  p: pStyle,
  caption: captionStyle,
};

const Typography = {
  FONT_FAMILY,
  FONT_SIZE,
  Display,
  Heading,
  Title,
  Caption,
};

export default Typography;
