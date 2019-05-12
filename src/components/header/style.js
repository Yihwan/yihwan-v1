import styled from '@emotion/styled';
import { Typography, SPACER } from 'src/styles/constants';

export const HeaderContainer = styled.header`
  position: relative;
  top: 15%;
`;

export const Greeting = styled.h1`
  font-family: ${Typography.FONT_FAMILY.system};
  font-weight: 700;
  font-size: 3.5rem;
  letter-spacing: 1px;
`;

export const IntroSnippet = styled.h2`
  font-size: 1.35rem;
  line-height: 1.85rem;
  margin-top: ${SPACER.base};
  margin-right: ${SPACER.desktopGutter};
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
