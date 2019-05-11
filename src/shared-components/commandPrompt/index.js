import React from 'react';
import { capitalize } from 'lodash';

import { CommandStart } from './style';

const CommandPrompt = ({ pathname }) => (
  <div>
    <CommandStart>$: </CommandStart>{'/'}Yihwan{pathname === "/" ? '' : `/${capitalize(pathname.slice(1))}`}
  </div>
)

export default CommandPrompt;
