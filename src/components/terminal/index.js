import React from 'react';
import { capitalize } from 'lodash';

import { terminalHeaderDate } from 'src/utils/dateGenerator';
import { COLORS } from 'src/styles/constants';
import {
  TerminalContainer,
  TerminalMenuBar,
  TerminalMenuButton,
  TerminalMenuHeader,
  TerminalBody
} from './style';

class Terminal extends React.Component {

  render() {
    const { pathname, children } = this.props;

    return(
      <TerminalContainer>
        <TerminalMenuBar>
          <TerminalMenuButton
            background={COLORS.buttonRed}
            border={COLORS.borderRed}
          />
          <TerminalMenuButton
            background={COLORS.buttonYellow}
            border={COLORS.borderYellow}
          />
          <TerminalMenuButton
            background={COLORS.buttonGreen}
            border={COLORS.borderGreen}
          />
        <TerminalMenuHeader>Yihwan Kim—{terminalHeaderDate}—Yihwan{pathname === '/' ? '' : `/${capitalize(pathname.slice(1))}`}</TerminalMenuHeader>
        </TerminalMenuBar>
        <TerminalBody>
          {children}
        </TerminalBody>
      </TerminalContainer>
    );
  }
}

export default Terminal;
