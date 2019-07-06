import React from 'react';

import { HelpContainer, HelpHeader, HelpContent } from './style';

const HelpModule = () => (
  <HelpContainer>
    <HelpHeader>Page Navigation</HelpHeader>
    <HelpContent>home</HelpContent>
    <HelpContent>changelog</HelpContent>
    <HelpContent>blog</HelpContent>
    <HelpContent>contact</HelpContent>

    <HelpHeader>Editing</HelpHeader>
    <HelpContent>clear - clears terminal screen</HelpContent>
  </HelpContainer>
)

export default HelpModule;
