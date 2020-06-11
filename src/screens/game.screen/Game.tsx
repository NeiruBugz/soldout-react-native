import React, { useContext, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { GameContext, TrackContext } from '../../contexts';

import { ChoosePlaylist } from './components/ChoosePlaylist/ChoosePlaylist';
import { ButtonComponent } from '../../components/Button';

import { startScreenStyleSheet } from '../start.screen/Start.styles';

export const GameScreen = () => {
  const {
    playlistId,
    selectedTrack,
    correctTrack,
    audioSrc,
    setSelectedTrack,
    setCorrectTrack,
    setPlaylistId,
  } = useContext(GameContext);
  const { tracks } = useContext(TrackContext);

  useEffect(() => {
    setSelectedTrack(undefined);
    setCorrectTrack(undefined);
  }, [audioSrc]);

  useEffect(() => () => {
    setPlaylistId(undefined)
  }, []);

  return playlistId ? (
    <View style={startScreenStyleSheet.container}>
      {tracks.map((track) => (
        <TouchableOpacity style={startScreenStyleSheet.playButton} key={track.id}>
          <ButtonComponent
            title={`${track.artist} ${track.name}`}
            onPress={() => setSelectedTrack(track.id)}
          />
        </TouchableOpacity>
      ))}
    </View>
  ) : <ChoosePlaylist />
};
