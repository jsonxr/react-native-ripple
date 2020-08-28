import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { RippleButton } from './RippleButton';

const App = () => (
  <SafeAreaView style={styles.root}>
    <RippleButton>Hello World</RippleButton>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    borderColor: 'green',
    borderWidth: 1,
  },
});

export default App;
