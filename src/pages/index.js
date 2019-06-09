import React from 'react';

import CommandLineInterface from 'src/components/commandLineInterface';

import SEO from 'src/components/seo';
const IndexPage = () => (
  <CommandLineInterface>
    <SEO title="Home" keywords={['yihwan kim', 'yihwan', 'kim', 'curology', 'stanford']} />
  </CommandLineInterface>
)

export default IndexPage;
