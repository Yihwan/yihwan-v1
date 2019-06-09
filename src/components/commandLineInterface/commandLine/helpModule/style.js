import styled from '@emotion/styled';

import { SPACER, COLORS } from 'src/styles/constants';

export const HelpContainer = styled.section`
  margin-bottom: ${SPACER.base};
`;

export const HelpHeader = styled.div`
  color: ${COLORS.terminalYellow};
  font-weight: 700;

  :nth-of-type(n + 2) {
    margin-top: ${SPACER.base};
  }
`;

export const HelpContent = styled.div`
  margin-left: ${SPACER.small};
`;
