import React from 'react';
import PropTypes from 'prop-types';
import PAGE_URLS from 'src/constants/pageUrls';
import { capitalize, lowercase } from 'lodash';
import { navigate } from 'gatsby';
import stringSimilarity from 'string-similarity';

import CommandPrompt from 'src/shared-components/commandPrompt';

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
      currentCommand: ''
    }
  }

  componentDidMount() {
    this.commandLineInput.current.focus();
    this.commandLineInput.current.select();
  }

  renderPreviousInteractions = () => {
    const { pathname } = this.props;
    const { previousInteractions } = this.state;

    return previousInteractions.map(interaction => (
      <div>
        <CommandPrompt pathname={pathname}/>
        <div>>> {interaction.command}</div>
        {interaction.errorMessage && <CommandError><span>error:</span> {interaction.errorMessage}</CommandError>}
      </div>
    ));
  }

  populatePreviousInteractions = (currentCommand, errorMessage) => {
    const interaction = {
      command: currentCommand,
    };
    interaction.errorMessage = errorMessage;

    this.setState(prevState => ({
      previousInteractions: [...prevState.previousInteractions, interaction],
    }));
  }

  handleCommandSubmit = event => {
    event.preventDefault();
    let errorMessage = null;
    const currentCommand = lowercase(this.state.currentCommand);
    const currentPath = lowercase(this.props.pathname);
    const availableRoutes = Object.keys(PAGE_URLS).map(page => lowercase(page));
    this.setState({ currentCommand: '' });

    if ((currentCommand === currentPath) || (currentCommand === 'home' && currentPath === '')) {
      console.log(currentPath);
      errorMessage = `Current page is already ${capitalize(currentCommand)}`;
      this.populatePreviousInteractions(currentCommand, errorMessage);
      return;
    }

    if (availableRoutes.includes(currentCommand)) {
      navigate(`/${PAGE_URLS[currentCommand]}`);
      this.setState({ previousInteractions: [] });
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
          >> <input ref={this.commandLineInput} type="text" value={currentCommand} onChange={this.handleCommandChange}/>
        </CommandLineForm>
      </React.Fragment>
    );
  }
}

export default CommandLine;
