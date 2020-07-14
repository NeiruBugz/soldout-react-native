import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ButtonComponent } from '../../components';

import { startScreenStyleSheet } from './Start.styles';

export const Start = () => (
  <View style={startScreenStyleSheet.container}>
    <Text style={startScreenStyleSheet.title}>SOLDOUT</Text>
    <Text style={startScreenStyleSheet.description}>Угадывай песни популярных исполнителей, соревнуйся с друзьями и
      делись результатами в инстаграме.</Text>
    <TouchableOpacity style={startScreenStyleSheet.playButton}>
      <ButtonComponent
        color="#fdfdfd"
        title="Сыграть"
        onPress={() => {}}
      />
    </TouchableOpacity>
  </View>
);
