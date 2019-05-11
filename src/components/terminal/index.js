import React from 'react';

import { COLORS } from 'src/styles/constants';
import {
  TerminalContainer,
  TerminalMenuBar,
  TerminalMenuButton,
  TerminalBody
} from './style';

class Terminal extends React.Component {

  render() {
    const { children } = this.props;

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
        </TerminalMenuBar>
        <TerminalBody>
          {children}
        </TerminalBody>
      </TerminalContainer>
    );
  }
}

export default Terminal;
