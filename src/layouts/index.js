import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/header';
import Navigation from 'src/components/navigation';
import CommandLine from 'src/components/commandLine';
import Terminal from 'src/components/terminal';
import injectGlobalStyles from '../utils/injectGlobalStyles';
import { isMediumViewport } from '../utils/viewportSizing';
import {
  LayoutContainer, ContentContainer, TerminalContentContainer, MobileSplashContainer, ToggleTerminalButton,
} from './style';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    isDesktop: isMediumViewport(),
    isTerminalDisplayedOnMobile: false,
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const { isDesktop } = this.state;

    if (isDesktop !== isMediumViewport()){
      this.setState({ isDesktop: isMediumViewport() })
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

    if (isDesktop) {
      return(
        <LayoutContainer>
          {injectGlobalStyles()}
          <ContentContainer>
            <section>
              <Header />
            </section>

            <section>
              <Terminal isDesktop={isDesktop} pathname={pathname}>
                <Navigation pathname={pathname}/>
                <TerminalContentContainer>
                  {children}
                </TerminalContentContainer>
                <CommandLine pathname={pathname}/>
              </Terminal>
            </section>
          </ContentContainer>
        </LayoutContainer>
      );
    }

    return(
      <LayoutContainer>
        {injectGlobalStyles()}
        {!isTerminalDisplayedOnMobile && <MobileSplashContainer>
          <Header />
          <ToggleTerminalButton onClick={this.toggleMobileTerminalDisplay}>
            Open Terminal
          </ToggleTerminalButton>
        </MobileSplashContainer>}

        {isTerminalDisplayedOnMobile &&
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
        }
      </LayoutContainer>
    );
  }
}

export default Layout;
