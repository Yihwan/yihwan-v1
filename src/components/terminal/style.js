import styled from '@emotion/styled';
import { COLORS, MEDIA_QUERIES, SPACER } from 'src/styles/constants';

export const TerminalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 600px;
  width: 100%;
  max-width: 720px;

  ${MEDIA_QUERIES.mdUp} {
    width: 90%;
  }

  ${MEDIA_QUERIES.xlUp} {
    max-width: 760px;
    width: 95%;
  }
`;

export const TerminalMenuBar = styled.div`
  display: flex;
  height: 1.75rem;
  background-color: ${COLORS.lightGrey};
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px 10px 0 0;
`;

export const TerminalMenuButton = styled.div`
  height: 0.75rem;
  width: 0.75rem;
  border: 1px solid ${props => props.border};
  border-radius: 50%;
  background-color: ${props => props.background};
  margin-left: 0.5rem;
`;

export const TerminalBody = styled.div`
  height: 100%;
  border-radius: 0 0 4px 4px;
  background-color: ${COLORS.darkGrey};

  font-size: 14px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  box-shadow: 0 50px 100px rgba(65, 65, 74, .2);
  box-shadow: 0 15px 35px rgba(65, 65, 74, .3);
  box-shadow: 0 5px 15px rgba(0,0,0,.2);

  padding: ${SPACER.small};
  ${MEDIA_QUERIES.mdUp} {
    padding: ${SPACER.medium};
  }
`;
