import { css } from '@emotion/core';
import styled from '@emotion/styled';

import COLORS from '../colors';
import MEDIA_QUERIES from '../mediaQueries';

const FONT_SIZE = {
  displaySmall: '2rem',
  displayLarge: '3rem',

  headingSmall: '1.25rem',
  headingLarge: '1.5rem',

  titleSmall: '1.2em',
  titleLarge: '1.35rem',

  bodySmall: '1rem',
  bodyLarge: '1rem',

  captionSmall: '0.70rem',
  captionLarge: '0.80rem',
};

const FONT_FAMILY = {
  monospace: 'Monaco, monospace',
  system: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const displayStyle = css`
  font-size: ${FONT_SIZE.displaySmall};
  font-family: ${FONT_FAMILY.system};
  color: ${COLORS.terminalWhite};
  font-weight: 700;
  letter-spacing: 1px;

  ${MEDIA_QUERIES.mdUp} {
    font-size: ${FONT_SIZE.displayLarge};
  }
`;

const headingStyle = css`
  font-size: ${FONT_SIZE.headingSmall};
  line-height: 1.35;
  font-family: ${FONT_FAMILY.monospace};
  color: ${COLORS.terminalWhite};
  font-weight: 600;

  ${MEDIA_QUERIES.mdUp} {
    font-size: ${FONT_SIZE.headingLarge};
    line-height: 1.5;
  }
`;

const titleStyle = css`
  font-size: ${FONT_SIZE.titleSmall};
  font-family: ${FONT_FAMILY.monospace};
  color: ${COLORS.terminalWhite};
  line-height: 1.2;

  ${MEDIA_QUERIES.mdUp} {
    font-size: ${FONT_SIZE.titleLarge};
    line-height: 1.33;
  }
`;

const captionStyle = css`
  font-size: ${FONT_SIZE.captionSmall};
  font-family: ${FONT_FAMILY.secondary};
  color: ${COLORS.terminalWhite};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;

  ${MEDIA_QUERIES.mdUp} {
    font-size: ${FONT_SIZE.captionLarge};
  }
`;

const pStyle = css`
  font-size: ${FONT_SIZE.bodySmall};
  font-family: ${FONT_FAMILY.monospace};
  color: ${COLORS.terminalWhite};
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
