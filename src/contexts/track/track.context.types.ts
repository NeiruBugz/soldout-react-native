import { Dispatch, SetStateAction } from 'react';

import { Track } from '../../interfaces';

export interface TrackContextType {
  tracks: Track[];
  setTracks: Dispatch<SetStateAction<Track[]>> | (() => void);
}
