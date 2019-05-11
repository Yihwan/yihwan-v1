import React from 'react';
import PropTypes from 'prop-types';

import TerminalHeader from 'src/components/terminalHeader';
import Navigation from 'src/components/navigation';
import CommandPrompt from 'src/components/commandPrompt';

import injectGlobalStyles from '../utils/injectGlobalStyles';
import { LayoutContainer } from './style';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children, location } = this.props;
    const { pathname } = location;

    return(
      <LayoutContainer>
        <TerminalHeader />
        <Navigation pathname={pathname}/>
        {injectGlobalStyles()}
        {children}
        <CommandPrompt pathname={pathname}/>
      </LayoutContainer>
    );
  }
}

export default Layout;
