import React from 'react';

import SEO from 'src/components/seo';
import CommandLineInterface from 'src/components/commandLineInterface';
import StyledArray from 'src/shared-components/styledArray';
const CONTACT_LINKS = [
  <a href="mailto:hi@yihwan.kim">hi@yihwan.kim</a>,
  <a href="https://www.strava.com/athletes/yihwan" target="_blank" rel="noopener noreferrer">Strava</a>,
  <a href="https://github.com/Yihwan" target="_blank" rel="noopener noreferrer">Github</a>,
  <a href="https://www.linkedin.com/in/yihwan" target="_blank" rel="noopener noreferrer">LinkedIn</a>,
];

const ContactPage = () => (
  <CommandLineInterface>
    <SEO title="Contact" keywords={['yihwan kim', 'yihwan', 'kim', 'contact', 'email']} />
    <section>
      <StyledArray array={CONTACT_LINKS}/>
    </section>
  </CommandLineInterface>
)

export default ContactPage;
