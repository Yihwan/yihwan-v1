import React from 'react';
import { graphql } from 'gatsby';

import SEO from 'src/components/seo';
import CommandPrompt from 'src/shared-components/commandPrompt';

import { ProjectsSection } from './_style';

const ContactPage = ({ data: { markdownRemark: { html } } }) => (
  <React.Fragment>
    <SEO title="Projects" />
    <CommandPrompt pathname="/projects" />
    <ProjectsSection dangerouslySetInnerHTML={{ __html: html }} />
  </React.Fragment>
)

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { contentType: { eq:"projects" } }) {
      html
      frontmatter {
        contentType,
      }
    }
  }
`;

export default ContactPage;
