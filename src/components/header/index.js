import React from 'react';
import Typed from 'typed.js';

import { typewriterOptions } from 'content/introSnippets';

import { HeaderContainer, Greeting, IntroSnippet, WaveContainer } from './style';

class Header extends React.Component {
  componentDidMount() {
    this.typed = new Typed(this.typewriter, typewriterOptions);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return(
      <HeaderContainer>

          <Greeting>Hi, I'm Yihwan <WaveContainer><span role="img" aria-label="waving-hand"> 👋</span></WaveContainer></Greeting>
          <IntroSnippet>
            <span ref={typewriter => { this.typewriter = typewriter; }}></span>
          </IntroSnippet>
      </HeaderContainer>
    );
  }
}

export default Header;
