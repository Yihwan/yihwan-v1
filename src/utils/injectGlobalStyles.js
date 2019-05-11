import React from 'react';
import { Global } from '@emotion/core';

import fonts from 'src/styles/fonts';
import { resetStyles, brandStyles } from 'src/styles/globalStyles';

const injectGlobalStyles = () => (
  <React.Fragment>
    <Global styles={fonts} />
    <Global styles={resetStyles} />
    <Global styles={brandStyles} />
  </React.Fragment>
);

export default injectGlobalStyles;
