import { createContext } from 'react';

import { GameContextType } from './game.context.types';

export const GameContext = createContext({
  playlistId: undefined,
  selectedTrack: undefined,
  correctTrack: undefined,
  audioSrc: undefined,
  dots: [],
  setPlaylistId: () => {},
  setSelectedTrack: () => {},
  setCorrectTrack: () => {},
  setAudioSrc: () => {},
  setDots: () => {},
  addDot: () => {},
} as GameContextType);

