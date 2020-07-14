import { createContext } from 'react';

import { PlaylistContextType } from './playlist.context.types';

export const PlaylistContext = createContext({
  playlists: [],
  setPlaylists: () => {},
} as PlaylistContextType);
