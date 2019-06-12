import styled from '@emotion/styled';
import {
  MEDIA_QUERIES, SPACER, BREAKPOINTS, COLORS, Typography,
 } from 'src/styles/constants';

export const LoadingContainer = styled.div`
  font-size: 2rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.terminalBlack};

  > div {
    animation: zoomInAndOut 1s infinite;

    @keyframes zoomInAndOut {
      0% {
        transform: scale(1,1);
      }
      50% {
        transform: scale(1.5,1.5);
      }
      100% {
        transform: scale(1,1);
      }
    }
  }
`;

export const LayoutContainer = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const ContentContainer = styled.div`
  > section {
    height: 100vh;
  }

  ${MEDIA_QUERIES.lgUp} {
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: ${BREAKPOINTS.max}px;
    margin: 0 auto;
    flex-direction: row;
    flex: auto;

    > section {
      height: unset;
      flex: 1;
    }

    padding: ${SPACER.xlarge} ${SPACER.x5Large};
  }

  ${MEDIA_QUERIES.xlUp} {
    padding: ${SPACER.x2large} ${SPACER.desktopGutter};
  }
`;

export const MobileSplashContainer = styled.main`
  position: absolute;
  padding: ${SPACER.large};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  margin: auto;

  ${MEDIA_QUERIES.smUp} {
    padding: ${SPACER.large} ${SPACER.desktopGutter};
  }
`;

export const ToggleTerminalButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
  padding: ${SPACER.base} ${SPACER.large};

  color: ${COLORS.terminalWhite};
  border: 2px solid ${COLORS.terminalGreen};
  background-color: transparent;

  font-family: ${Typography.FONT_FAMILY.monospace};
  letter-spacing: 1.5px;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;

  opacity: 1;
  animation: fadeIn 4s ease-in;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const TerminalContentContainer = styled.section`
  margin: ${SPACER.large} 0;
`;
