import styled from '@emotion/styled';
import { MEDIA_QUERIES, SPACER, BREAKPOINTS } from 'src/styles/constants';

export const LayoutContainer = styled.main`
  max-width: ${BREAKPOINTS.max}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${MEDIA_QUERIES.xlUp} {
    flex-direction: row;
    padding: ${SPACER.x2large} ${SPACER.desktopGutter};
  }

  > section {
    ${MEDIA_QUERIES.smUp} {
    }
    ${MEDIA_QUERIES.xlUp} {
      flex: 1;
    }
  }
`;

export const TerminalContentContainer = styled.section`
  margin: ${SPACER.large} 0;
`;
