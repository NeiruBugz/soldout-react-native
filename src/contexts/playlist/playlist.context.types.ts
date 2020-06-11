import { Dispatch, SetStateAction } from "react";

import { Playlist } from "../../interfaces";

export interface PlaylistContextType {
  playlists: Playlist[];
  setPlaylists: Dispatch<SetStateAction<Playlist[]>> | (() => void);
}
