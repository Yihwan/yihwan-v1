import styled from '@emotion/styled';

import { COLORS, SPACER } from 'src/styles/constants';

export const ProjectsSection = styled.section`
  > h1 {
    color: ${COLORS.terminalGold};
    font-weight: 700;
    margin-bottom: ${SPACER.large};
  }

  .obj-content {
    margin-left: ${SPACER.large};
  }

  .yellow {
    color: ${COLORS.terminalYellow};
  }

  .green {
    color ${COLORS.terminalGreen};
  }
`;