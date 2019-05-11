import React from 'react'

import { HeaderContainer, Greeting, IntroSnippet } from './style';

const Header = () => (
  <HeaderContainer>
    <Greeting>Hi, I'm Yihwan <span role="img" aria-label="waving-hand">👋</span></Greeting>
    <IntroSnippet>I'm a software engineer at Curology.</IntroSnippet>
  </HeaderContainer>
);

export default Header;
