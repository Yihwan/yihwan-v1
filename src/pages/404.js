import React from 'react';

import CommandLineInterface from 'src/components/commandLineInterface';
import SEO from 'src/components/seo';

const NotFoundPage = () => (
  <CommandLineInterface>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </CommandLineInterface>
);

export default NotFoundPage;
