import React from 'react';
import { graphql } from 'gatsby';

import SEO from 'src/components/seo';

const ChangelogPage = ({ data }) => {
  const { html } = data.markdownRemark;

  return(
    <React.Fragment>
      <SEO title="Changelog" keywords={['yihwan kim', 'yihwan', 'kim', 'bio']} />
      <div>$: Yihwan/Changelog</div>
      <section dangerouslySetInnerHTML={{ __html: html }} />
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

export default ChangelogPage;
