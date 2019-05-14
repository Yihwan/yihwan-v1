import styled from '@emotion/styled';
import { COLORS, Typography, MEDIA_QUERIES } from 'src/styles/constants';

export const CommandLineForm = styled.form`
  input[type="text"] {
    border: 0;
    font-family: ${Typography.FONT_FAMILY.primary};
    background-color: ${COLORS.darkGrey};
    color: ${COLORS.terminalWhite};
    caret-color: ${COLORS.terminalGreen};
    font-size: 0.75rem;

    ${MEDIA_QUERIES.lgUp} {
      font-size: 0.875rem;
      width: 90%;
    }

    &:focus {
      outline: 0;
    }
  }
`;

export const CommandStart = styled.span`
  color: ${COLORS.terminalGreen};
`;

export const CommandError = styled.div`
  > span {
    color: ${COLORS.borderRed};
  }
`;
