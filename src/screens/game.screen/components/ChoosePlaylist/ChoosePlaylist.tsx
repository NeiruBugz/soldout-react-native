import React, { useContext, useEffect, Fragment } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';

import { GameContext, PlaylistContext } from '../../../../contexts';

import { ButtonComponent } from '../../../../components/Button';

import { Playlist } from '../../../../interfaces';

import { axiosInstance } from '../../../../shared/axios';

import { startScreenStyleSheet } from '../../../start.screen/Start.styles';

export const ChoosePlaylist = () => {
  const { setPlaylistId } = useContext(GameContext);
  const { playlists, setPlaylists } = useContext(PlaylistContext);

  useEffect(() => {
    axiosInstance.get<Playlist[]>('/playlists')
      .then((response) => setPlaylists(response.data))
      .catch((error) => console.log(error));
  }, [setPlaylists]);

  return (
    <View style={startScreenStyleSheet.container}>
      {playlists && !playlists.length ? <ActivityIndicator /> :
        <Fragment>
          <Text style={startScreenStyleSheet.title}>Выбери исполнителя</Text>
          <ScrollView>
            {playlists.map((playlist) => {
              return (
                <TouchableOpacity>
                  <ButtonComponent
                    title={playlist.name}
                    onPress={() => setPlaylistId(playlist.playlistId)}
                  />
                </TouchableOpacity>
              )
            })}
          </ScrollView>
        </Fragment>
      }
    </View>
  );
};
