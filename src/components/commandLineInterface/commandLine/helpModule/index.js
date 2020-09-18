import React from 'react';

import PAGE_URLS from 'src/constants/pageUrls';

import { HelpContainer, HelpHeader, HelpContent } from './style';

const HelpModule = () => (
  <HelpContainer>
    <HelpHeader>Page Navigation</HelpHeader>
    {Object.keys(PAGE_URLS).map(pageName => <HelpContent>{pageName}</HelpContent>)}

    <HelpHeader>Editing</HelpHeader>
    <HelpContent>clear - clears terminal screen</HelpContent>
  </HelpContainer>
)

export default HelpModule;
