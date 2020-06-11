import React, { FC } from 'react';
import { Button, Text } from 'react-native';

import { ButtonPropTypes } from './Button.types';

export const ButtonComponent: FC<ButtonPropTypes> = ({ label, subLabel, onClick, ...props }) => (
  <Button title={label} onPress={onClick}>
    {subLabel && <Text>{subLabel}</Text>}
  </Button>
)
