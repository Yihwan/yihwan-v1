import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/header';
import Navigation from 'src/components/navigation';
import CommandLine from 'src/components/commandLine';
import Terminal from 'src/components/terminal';
import injectGlobalStyles from '../utils/injectGlobalStyles';
import { LayoutContainer, TerminalContentContainer } from './style';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children, location } = this.props;
    const { pathname } = location;

    return(
      <LayoutContainer>
        {injectGlobalStyles()}
        <section>
          <Header />
        </section>

        <section>
          <Terminal pathname={pathname}>
            <Navigation pathname={pathname}/>
              <TerminalContentContainer>
                {children}
              </TerminalContentContainer>
            <CommandLine pathname={pathname}/>
          </Terminal>
        </section>
      </LayoutContainer>
    );
  }
}

export default Layout;
