import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/header';
import Navigation from 'src/components/navigation';
import CommandPrompt from 'src/components/commandPrompt';
import Terminal from 'src/components/terminal';
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
        {injectGlobalStyles()}
        <section>
          <Header />
        </section>

        <section>
          <Terminal>
            <Navigation pathname={pathname}/>
              {children}
            <CommandPrompt pathname={pathname}/>
          </Terminal>
        </section>
      </LayoutContainer>
    );
  }
}

export default Layout;
