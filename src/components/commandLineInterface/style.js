import styled from '@emotion/styled';
import {
  MEDIA_QUERIES, SPACER, BREAKPOINTS, 
 } from 'src/styles/constants';

export const LayoutContainer = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  
  ${MEDIA_QUERIES.lgUp} {
    position: relative;
    max-width: ${BREAKPOINTS.max}px;
    margin: 0 auto;
    flex-direction: row;
    flex: auto;
    height: unset;

    > section {
      flex: 1;
    }

    padding: ${SPACER.xlarge} ${SPACER.x5Large};
  }

  ${MEDIA_QUERIES.xlUp} {
    padding: ${SPACER.x2large} ${SPACER.desktopGutter};
  }
`;

export const HeaderOuterContainer = styled.section`
  height: 210px;
  margin: ${SPACER.x2large} ${SPACER.large};

  ${MEDIA_QUERIES.lgUp} {
    height: unset; 
    margin: unset;
  }
`;

export const TerminalOuterContainer = styled.section`
`;

export const TerminalContentContainer = styled.section`
  margin: ${SPACER.large} 0;
`;
