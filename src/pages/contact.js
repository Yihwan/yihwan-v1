import React from 'react';

import SEO from 'src/components/seo';
import arrayGenerator from 'src/utils/arrayGenerator';

const CONTACT_LINKS = [
  <a href="mailto:hi@yihwan.kim">hi@yihwan.kim</a>,
  <a href="https://www.strava.com/athletes/yihwan" target="_blank" rel="noopener noreferrer">Strava</a>,
  <a href="https://github.com/Yihwan" target="_blank" rel="noopener noreferrer">Github</a>,
  <a href="https://www.linkedin.com/in/yihwan" target="_blank" rel="noopener noreferrer">LinkedIn</a>,
];

const ContactPage = () => (
  <React.Fragment>
    <SEO title="Contact" keywords={['yihwan kim', 'yihwan', 'kim', 'contact', 'email']} />
    <section>
      [{arrayGenerator(CONTACT_LINKS)}]
    </section>
  </React.Fragment>
)

export default ContactPage;
