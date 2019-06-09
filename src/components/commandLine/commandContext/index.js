import {
  HelpCommand,
} from './commands';

const STRATEGY_MAP = {
  clear: '',
};

class CommandContext {
  static execute = () => {
    console.log('hello!');
  }
}

export default CommandContext;
