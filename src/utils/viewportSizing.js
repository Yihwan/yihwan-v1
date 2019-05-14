import { BREAKPOINTS } from 'src/styles/constants';

export const isMediumViewport = ()  => (
  typeof window !== 'undefined' ? window.innerWidth > BREAKPOINTS.md : 'loading'
);

export const isLargeViewport = ()  => (
  typeof window !== 'undefined' ? window.innerWidth > BREAKPOINTS.lg : 'loading'
);
