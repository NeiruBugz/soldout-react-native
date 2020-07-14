import { createContext } from 'react';

import { TrackContextType } from './track.context.types';

export const TrackContext = createContext({
  tracks: [],
  setTracks: () => {},
} as TrackContextType);
