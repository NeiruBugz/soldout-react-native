import React, { FC } from 'react';
import { Button, Text } from 'react-native';

import { ButtonPropTypes } from './Button.types';

export const ButtonComponent: FC<ButtonPropTypes> = ({ subLabel, ...props }) => (
  <Button {...props}>
    {subLabel && <Text>{subLabel}</Text>}
  </Button>
)
