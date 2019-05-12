import { shuffle } from 'lodash';

const firstIntroSnippet = [
  `I'm a software engineer at <a href="https://curology.com" target="_blank" rel="noopener noreferrer">Curology</a>.`,
  `I like working with React, Laravel, Rails, and LEGO.`,
];
let introSnippets = [
  `I'm a Redux skeptic.`,
  `I enjoy figuring out how to game rewards programs, ^500 whether it's for free flights or burritos.`,
  `I've developed PTSD from UberConference hold music.`,
  `I'm from LA, but have lived in SF and NYC. ^1000 I'm currently back in SF.`,
  `I've been passively 'looking' for my own apartment for the past two years, ^500 so let me know if you've got any leads.`,
  `I once boarded the wrong flight destined for the wrong continent... ^1000 and only found out because I was in someone else's seat.`,
  `I've visited or lived in 58% of the countries in South America.`,
  `I've been to Hong Kong exactly once. ^1000 It was probably a beautiful city ^500 - I couldn't really tell because I left my contacts at home.`,
  `When I speak Spanish, native Spanish-speakers think I'm Brazilian. ^1000 When I speak Portuguese, Brazilians think I'm Mexican.`,
  `My shameful, disgusting food pleasure is cheap supermarket 'sushi' ^1000 - the kind with flourescent orange crab-like product ^500 surrounded by a sticky sweet gelatinous gob of 'rice'.`,
  `I miss Anthony Bourdain.`,
];
const lastIntroSnippet = [`I've run out of things to say. ^1000 Are you still here? <span role="img" aria-label="thinking-face"> 🤔</span>^2000`];

export const combinedSnippets = firstIntroSnippet.concat(shuffle(introSnippets), lastIntroSnippet);

export const typewriterOptions = {
  strings: combinedSnippets,
  typeSpeed: 15,
  backDelay: 3500,
  showCursor: false,
  loop: true,
};
