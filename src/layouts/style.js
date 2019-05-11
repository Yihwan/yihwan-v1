import styled from '@emotion/styled';
import { COLORS, MEDIA_QUERIES, SPACER } from 'src/styles/constants';

export const LayoutContainer = styled.main`
  position: absolute;
  height: 100%;
  width: 100%;


  display: flex;
  flex-direction: column;

  ${MEDIA_QUERIES.xlUp} {
    flex-direction: row;
  }

  > section {
    ${MEDIA_QUERIES.smUp} {
    }
    ${MEDIA_QUERIES.xlUp} {
      flex: 1;
    }
  }
`;
