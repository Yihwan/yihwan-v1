import React from 'react';
import PropTypes from 'prop-types';
import PAGE_URLS from 'src/constants/pageUrls';
import { capitalize, lowercase } from 'lodash';
import { navigate } from 'gatsby';
import stringSimilarity from 'string-similarity';

class CommandPrompt extends React.Component {
  static propTypes = {
    pathname: PropTypes.string,
  }

  state = {
    previousInteractions: [],
    currentCommand: ''
  }

  renderPreviousInteractions = () => {
    const { pathname } = this.props;
    const { previousInteractions } = this.state;

    return previousInteractions.map(interaction => (
      <div>
        <div>$: {'/'}Yihwan{pathname === "/" ? '' : `/${capitalize(pathname.slice(1))}`}</div>
        <div>>> {interaction.command}</div>
        {interaction.errorMessage && <div>{interaction.errorMessage}</div>}
      </div>
    ));
  }

  handleCommandSubmit = event => {
    event.preventDefault();
    let errorMessage = null;
    const currentCommand = lowercase(this.state.currentCommand);
    const availableRoutes = Object.keys(PAGE_URLS).map(page => lowercase(page));
    this.setState({ currentCommand: '' });

    if (availableRoutes.includes(currentCommand)) {
      navigate(`/${PAGE_URLS[currentCommand]}`);
      this.setState({ previousInteractions: [] });
      return;
    }

    const bestMatch = stringSimilarity.findBestMatch(currentCommand, availableRoutes).bestMatch;

    if (bestMatch.rating > 0.25) {
      errorMessage = `error: ${currentCommand}: command not found. Did you mean ${bestMatch.target}?`;
    } else {
      errorMessage = `error: ${currentCommand}: command not found`;
    }

    const interaction = {
      command: currentCommand,
    };
    interaction.errorMessage = errorMessage;

    this.setState(prevState => ({
      previousInteractions: [...prevState.previousInteractions, interaction],
    }));
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
        <div>$: {'/'}Yihwan{pathname === "/" ? '' : `/${capitalize(pathname.slice(1))}`}</div>
        <form onSubmit={this.handleCommandSubmit}>
          >><input type="text" value={currentCommand} onChange={this.handleCommandChange}/>
        </form>
      </React.Fragment>
    );
  }
}

export default CommandPrompt;
