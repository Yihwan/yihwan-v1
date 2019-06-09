import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Navigation from './navigation';
import CommandLine from './commandLine';
import Terminal from './terminal';
import injectGlobalStyles from 'src/utils/injectGlobalStyles';
import { isLargeViewport } from 'src/utils/viewportSizing';
import {
  LoadingContainer,
  LayoutContainer,
  ContentContainer,
  TerminalContentContainer,
  MobileSplashContainer,
  ToggleTerminalButton,
} from './style';

class CommandLineInterface extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    isDesktop: null,
    isTerminalDisplayedOnMobile: false,
    pathname: '',
  }

  componentDidMount() {
    this.setState({
      isDesktop: isLargeViewport(),
      pathname: window.location.pathname,
    });

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const { isDesktop } = this.state;

    if (isDesktop !== isLargeViewport()){
      this.setState({ isDesktop: isLargeViewport() })
    }
  };

  toggleMobileTerminalDisplay = () => {
    this.setState(prevState => ({
      isTerminalDisplayedOnMobile: !prevState.isTerminalDisplayedOnMobile,
    }));
  }

  render() {
    const { children } = this.props;
    const { isDesktop, isTerminalDisplayedOnMobile, pathname } = this.state;

    if (isDesktop === null) {
      return(
        <LoadingContainer>
          <div><span role="img" aria-label="face-with-monocle">🧐</span></div>
        </LoadingContainer>
      );
    }

    return(
      <LayoutContainer>
        <ContentContainer>
        {injectGlobalStyles()}
        {(!isDesktop && !isTerminalDisplayedOnMobile) && (
          <MobileSplashContainer>
            <Header />
            <ToggleTerminalButton onClick={this.toggleMobileTerminalDisplay}>
              Open Terminal
            </ToggleTerminalButton>
          </MobileSplashContainer>
        )}

        {(isDesktop && !isTerminalDisplayedOnMobile) && (
          <section>
            <Header />
          </section>
        )}

        {(isDesktop || isTerminalDisplayedOnMobile) && (
          <section>
            <Terminal
              closeTerminal={this.toggleMobileTerminalDisplay}
              isDesktop={isDesktop}
              pathname={pathname}
              >
              <Navigation pathname={pathname}/>
              <TerminalContentContainer>
                {children}
              </TerminalContentContainer>
              <CommandLine pathname={pathname}/>
            </Terminal>
          </section>
        )}
        </ContentContainer>
      </LayoutContainer>
    );
  }
}

export default CommandLineInterface;
