import styled from '@emotion/styled';
import { Typography, SPACER, MEDIA_QUERIES } from 'src/styles/constants';

export const HeaderContainer = styled.header`
  ${MEDIA_QUERIES.lgUp} {
    margin-right: ${SPACER.desktopGutter};
    margin-top: ${SPACER.desktopGutter};
  }
`;

export const Greeting = styled(Typography.Display)`

`;

export const IntroSnippet = styled(Typography.Heading)`

  margin-top: ${SPACER.small};
  ${MEDIA_QUERIES.lgUp} {
    margin-top: ${SPACER.base};
  }
`;

export const WaveContainer = styled.div`
  display: inline-block;
  animation: rotation 0.8s 3 ease-out;
  @keyframes rotation {
    50% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
