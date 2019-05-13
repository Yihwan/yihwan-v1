import styled from '@emotion/styled';

import { COLORS, SPACER, MEDIA_QUERIES } from 'src/styles/constants';

export const ChangelogSection = styled.section`

  > h1 {
    color: ${COLORS.terminalGold};
    font-weight: 700;
  }

  .changelog-item {
    display: flex;
    margin-top: 1.5rem;

    .changelog-date {
      flex: 0 0 auto;
    }

    .changelog-header {
      color: ${COLORS.terminalYellow};
    }

    .changelog-content {
      margin-left: ${SPACER.base};

      ${MEDIA_QUERIES.mdUp} {
        margin-left: ${SPACER.large};
      }
    }
  }
`;
