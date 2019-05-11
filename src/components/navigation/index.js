import React from 'react';
import { Link } from 'gatsby';
import { capitalize } from 'lodash';

import PAGE_URLS from 'src/constants/pageUrls';
import arrayGenerator from 'src/utils/arrayGenerator';

class Navigation extends React.Component {

  renderPageLinks = () => {
    const { pathname } = this.props;
    const linkArray = [];

    for (const page in PAGE_URLS) {
      linkArray.push(
        <Link to={PAGE_URLS[page]}>{capitalize(page)}</Link>
      );
    }

    return linkArray;
  }

  render() {
    const linkArray = this.renderPageLinks();

    return(
      <div>
        Type or click where to go next: <br />
        [{arrayGenerator(linkArray)}] <br />
        Or type "help" at any time to view all options.
      </div>
    );
  }
}


export default Navigation;
