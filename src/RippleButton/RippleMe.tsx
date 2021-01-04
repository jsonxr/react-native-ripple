import React from 'react';
import { Pressable, Text } from 'react-native';

export interface RippleMeProps {
  //children: ReactElement<ViewProps> | string;
}
export const RippleMe = () => (
  <Pressable
    style={{ borderColor: 'red', borderWidth: 1 }}
    onPress={() => console.log('press')}
  >
    <Text>Press Me</Text>
  </Pressable>
);
