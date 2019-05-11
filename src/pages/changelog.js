import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import SEO from 'src/components/seo';
import CommandPrompt from 'src/shared-components/commandPrompt';

const ChangelogPage = ({ data }) => {
  const { html } = data.markdownRemark;

  return(
    <React.Fragment>
      <SEO title="Changelog" keywords={['yihwan kim', 'yihwan', 'kim', 'bio']} />
      <CommandPrompt pathname="/changelog"/>
      <ChangelogSection dangerouslySetInnerHTML={{ __html: html }} />
    </React.Fragment>
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

const ChangelogSection = styled.section`
  h1 {

  }
`;

export default ChangelogPage;
