import styled from '@emotion/styled';

import { COLORS } from 'src/styles/constants';

export const ChangelogSection = styled.section`

  > h1 {
    color: ${COLORS.terminalGold};
    font-weight: 700;
  }

  .changelog-item {
    margin-top: 1.5rem;

    .changelog-header {
      color: ${COLORS.terminalYellow};
    }

    .changelog-content {
      margin-left: 84px;
    }
  }
`;
