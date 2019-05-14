import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/header';
import Navigation from 'src/components/navigation';
import CommandLine from 'src/components/commandLine';
import Terminal from 'src/components/terminal';
import injectGlobalStyles from '../utils/injectGlobalStyles';
import { isLargeViewport } from '../utils/viewportSizing';
import {
  LayoutContainer, ContentContainer, TerminalContentContainer, MobileSplashContainer, ToggleTerminalButton,
} from './style';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    isDesktop: null,
    isTerminalDisplayedOnMobile: false,
  }

  componentDidMount() {
    this.setState({ isDesktop: isLargeViewport() });
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
    const { children, location } = this.props;
    const { isDesktop, isTerminalDisplayedOnMobile } = this.state;
    const { pathname } = location;

    if (isDesktop === null) {
      return <div>Loading ...</div>;
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

export default Layout;
