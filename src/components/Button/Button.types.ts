import { ReactNode } from 'react';
import { ButtonProps, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';

export interface ButtonPropTypes extends ButtonProps{
  label: string;
  subLabel?: string;
  onClick: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}
