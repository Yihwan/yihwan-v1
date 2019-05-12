import React from 'react'

import { HeaderContainer, Greeting, IntroSnippet, WaveContainer } from './style';

const Header = () => (
  <HeaderContainer>
    <Greeting>Hi, I'm Yihwan <WaveContainer><span role="img" aria-label="waving-hand">👋</span></WaveContainer></Greeting>
    <IntroSnippet>I'm a software engineer at Curology.</IntroSnippet>
  </HeaderContainer>
);

export default Header;
