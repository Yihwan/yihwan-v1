import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Navigation from './navigation';
import CommandLine from './commandLine';
import Terminal from './terminal';
import injectGlobalStyles from 'src/utils/injectGlobalStyles';
import {
  LayoutContainer,
  ContentContainer,
  HeaderOuterContainer, 
  TerminalOuterContainer,
  TerminalContentContainer,
} from './style';

class CommandLineInterface extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    pathname: '',
  }

  componentDidMount() {
    this.setState({
      pathname: window.location.pathname,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (window.location.pathname !== prevState.pathname) {
      this.setState({
        pathname: window.location.pathname,
      });
    }
  }

  render() {
    const { children } = this.props;
    const { pathname } = this.state;

    return(
      <LayoutContainer>
        <ContentContainer>
        {injectGlobalStyles()}
          <HeaderOuterContainer>
            <Header />
          </HeaderOuterContainer>

          <TerminalOuterContainer>
            <Terminal
              pathname={pathname}
            >
              <Navigation pathname={pathname}/>
              <TerminalContentContainer>
                {children}
              </TerminalContentContainer>
              <CommandLine pathname={pathname}/>
            </Terminal>
          </TerminalOuterContainer>
        </ContentContainer>
      </LayoutContainer>
    );
  }
}

export default CommandLineInterface;
