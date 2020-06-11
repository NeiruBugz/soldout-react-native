import React, { useCallback, useState } from 'react';
import { Playlist, Track } from '../../interfaces';
import { GameContext, PlaylistContext, TrackContext } from '../../contexts';
import { GameScreen } from './Game';
import { WSWrapper } from './components/WSWrapper';

export const GameScreenController = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [playlistId, setPlaylistId] = useState<number | undefined>();
  const [selectedTrack, setSelectedTrack] = useState<number | undefined>();
  const [correctTrack, setCorrectTrack] = useState<number | undefined>();
  const [dots, setDots] = useState<boolean[]>([]);
  const [audioSrc, setAudioSrc] = useState<string>();

  const addDot = useCallback(
    (newDot: boolean) => {
      dots.push(newDot);
      setDots(dots);
    },
    [dots, setDots],
  );

  return (
    <GameContext.Provider
      value={{
        audioSrc,
        setAudioSrc,
        selectedTrack,
        setSelectedTrack,
        playlistId,
        setPlaylistId,
        dots,
        setDots,
        addDot,
        correctTrack,
        setCorrectTrack,
      }}
    >
      <PlaylistContext.Provider value={{ playlists, setPlaylists }}>
        <TrackContext.Provider value={{ tracks, setTracks }}>
          <GameScreen />
          <WSWrapper />
        </TrackContext.Provider>
      </PlaylistContext.Provider>
    </GameContext.Provider>
  );
};
