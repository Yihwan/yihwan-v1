import { BREAKPOINTS } from 'src/styles/constants';

export const isMediumViewport = ()  => (
  typeof window !== 'undefined' ? window.innerWidth > BREAKPOINTS.md : false
);

export const isLargeViewport = ()  => (
  typeof window !== 'undefined' ? window.innerWidth > BREAKPOINTS.lg : false
);
