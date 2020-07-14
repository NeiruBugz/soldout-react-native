import React, { useContext, useMemo, useEffect } from 'react';
import io from 'socket.io-client';

import { GameContext, TrackContext } from '../../../contexts';
import { Track } from '../../../interfaces';

import { WS_HOST } from '../../../shared/variables';

export const WSWrapper = () => {
  const {
    playlistId,
    selectedTrack,
    setAudioSrc,
    setCorrectTrack,
    setPlaylistId,
    setSelectedTrack,
    addDot,
  } = useContext(GameContext);
  const { setTracks } = useContext(TrackContext);

  const socket = useMemo(() => io(WS_HOST, { transports: ['websockets'] }), []);

  useEffect(() => {
    if (!playlistId) return;

    socket.emit('start', { playlistId });

    socket.on('tracks', ({ src, tracks }: { src: string, tracks: Track[] }) => {
      setTracks(tracks);
      setAudioSrc(src);
    });

    socket.on('showCorrect', ({ choose, correct }: { choose: number, correct: number }) => {
      setSelectedTrack(choose);
      setCorrectTrack(correct);
    });

    socket.on('guess', (newDot: boolean) => {
      addDot(newDot);
    });

    socket.on('disconnect', () => {
      setPlaylistId(undefined);
    });
  }, [socket, playlistId, setPlaylistId, setAudioSrc, setTracks, setSelectedTrack, setCorrectTrack]);

  useEffect(() => {
    if (!selectedTrack) return;

    socket.emit('choose', { trackId: selectedTrack });
  }, [socket, selectedTrack]);

  return null;
};
