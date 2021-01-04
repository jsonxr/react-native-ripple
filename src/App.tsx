import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { RippleButton } from './RippleButton';

const App = () => (
  <SafeAreaView style={styles.root}>
    <RippleButton>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'cornflowerblue',
          borderColor: 'blue',
          borderRadius: 10,
          borderWidth: 1,
          height: 48,
          justifyContent: 'center',
          width: 200,
        }}
      >
        <Text>Hello React Native</Text>
      </View>
    </RippleButton>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
  },
});

export default App;
