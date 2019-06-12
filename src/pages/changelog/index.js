import React from 'react';
import { graphql } from 'gatsby';

import CommandLineInterface from 'src/components/commandLineInterface';
import SEO from 'src/components/seo';
import CommandPrompt from 'src/shared-components/commandPrompt';

import { ChangelogSection } from './_style';

const ChangelogPage = ({ data }) => {
  const { html } = data.markdownRemark;

  return(
    <CommandLineInterface>
      <SEO
        title="Changelog"
        keywords={['yihwan kim', 'yihwan', 'kim', 'bio']}
        description="Some highlights from my life ..."
      />
      <CommandPrompt pathname="/changelog"/>
      <ChangelogSection dangerouslySetInnerHTML={{ __html: html }} />
    </CommandLineInterface>
  );
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { contentType: { eq:"changelog" } }) {
      html
      frontmatter {
        contentType,
      }
    }
  }
`;

export default ChangelogPage;
