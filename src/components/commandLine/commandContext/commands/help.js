import HelpModule from 'src/components/commandLine/helpModule';

class HelpCommand {
  static executeCommand = () => {
    console.log('hi!');

    return {
      command: 'help',
      errorMessage: null,
      output: HelpModule(),
    };
  }
}

export default HelpCommand;
