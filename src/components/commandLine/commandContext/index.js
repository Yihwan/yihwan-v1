import React from 'react';

import {
  HelpCommand,
} from './commands';

const STRATEGY_MAP = {
  help: HelpCommand,
};

class CommandContext {
  execute = (command) => {
    const interaction = STRATEGY_MAP[command].executeCommand();
    return interaction;
  }
}

export default CommandContext;
