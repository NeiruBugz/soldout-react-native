import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';

import { GameScreenController } from './src/screens';

export const App = () => (
  <Fragment>
    <StatusBar barStyle="dark-content"/>
    <GameScreenController />
  </Fragment>
);
