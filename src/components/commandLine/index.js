import React from 'react';
import PropTypes from 'prop-types';
import PAGE_URLS from 'src/constants/pageUrls';
import { capitalize, toLower } from 'lodash';
import { navigate } from 'gatsby';
import stringSimilarity from 'string-similarity';

import CommandPrompt from 'src/shared-components/commandPrompt';
import { isLargeViewport } from 'src/utils/viewportSizing';

import HelpModule from './helpModule';
import {
  CommandLineForm, CommandError,
} from './style';

class CommandLine extends React.Component {
  static propTypes = {
    pathname: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.commandLineInput = React.createRef();

    this.state = {
      previousInteractions: [],
      currentCommand: '',
      isLargeViewport: isLargeViewport(),
    }
  }

  componentDidMount() {
    const shouldAutoFocusOnInput = this.state.isLargeViewport && this.state.isLargeViewport !== 'loading';
    if (shouldAutoFocusOnInput) {
      this.commandLineInput.current.focus();
      this.commandLineInput.current.select();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pathname !== this.props.pathname) {
      this.setState({ previousInteractions: [] });
    }
  }

  renderPreviousInteractions = () => {
    const { pathname } = this.props;
    const { previousInteractions } = this.state;

    return previousInteractions.map((interaction, idx) => (
      <div key={`${interaction.command}-${idx}`}>
        <CommandPrompt pathname={pathname}/>
        <div>>> {interaction.command}</div>
        {interaction.errorMessage && <CommandError><span>error:</span> {interaction.errorMessage}</CommandError>}
        {interaction.output}
      </div>
    ));
  }

  populatePreviousInteractions = (currentCommand, errorMessage, output) => {
    const interaction = {
      command: currentCommand,
    };
    interaction.errorMessage = errorMessage;
    interaction.output = output;

    this.setState(prevState => ({
      previousInteractions: [...prevState.previousInteractions, interaction],
    }));
  }

  // TODO: Refactor to separate class and command hash.
  handleCommandSubmit = event => {
    event.preventDefault();
    let errorMessage = null;
    const currentCommand = toLower(this.state.currentCommand).replace(/\s|"|'|`/gi, '');
    const currentPath = toLower(this.props.pathname);
    const availableRoutes = Object.keys(PAGE_URLS).map(page => toLower(page));
    this.setState({ currentCommand: '' });

    if (currentCommand === '') {
      this.populatePreviousInteractions(currentCommand);
      return;
    }

    if ((currentCommand === currentPath) || (currentCommand === 'home' && currentPath === '/')) {
      errorMessage = `Current page is already ${capitalize(currentCommand)}`;
      this.populatePreviousInteractions(currentCommand, errorMessage);
      return;
    }

    if (currentCommand === 'help') {
      this.populatePreviousInteractions(currentCommand, null, <HelpModule />);
      return;
    }

    if (currentCommand === 'clear') {
      this.setState({ previousInteractions: [] });
      return;
    }

    if (availableRoutes.includes(currentCommand)) {
      navigate(`/${PAGE_URLS[currentCommand]}`);
      return;
    }

    const bestMatch = stringSimilarity.findBestMatch(currentCommand, availableRoutes).bestMatch;

    if (bestMatch.rating > 0.25) {
      errorMessage = `${currentCommand}: command not found. Did you mean ${bestMatch.target}?`;
    } else {
      errorMessage = `${currentCommand}: command not found`;
    }

    this.populatePreviousInteractions(currentCommand, errorMessage);
  }

  handleCommandChange = event => {
    this.setState({ currentCommand: event.target.value });
  }

  render() {
    const { pathname } = this.props;
    const { currentCommand } = this.state;

    return(
      <React.Fragment>
        {this.renderPreviousInteractions()}
        <CommandPrompt pathname={pathname}/>
        <CommandLineForm onSubmit={this.handleCommandSubmit}>
          <label htmlFor="command">>> </label>
          <input ref={this.commandLineInput} name="command" type="text" value={currentCommand} onChange={this.handleCommandChange}/>
        </CommandLineForm>
      </React.Fragment>
    );
  }
}

export default CommandLine;
