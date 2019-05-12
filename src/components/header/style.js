import styled from '@emotion/styled';
import { Typography } from 'src/styles/constants';

export const HeaderContainer = styled.header`
`;

export const Greeting = styled.h1`
  font-family: ${Typography.FONT_FAMILY.system};
  font-weight: 700;
  font-size: 3.5rem;
  letter-spacing: 1px;
`;

export const IntroSnippet = styled.h2`
`;

export const WaveContainer = styled.div`
  display: inline-block;
  animation: rotation 0.8s 2 ease-out;

  @keyframes rotation {
  50% {
    transform: rotate(30deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
`;
