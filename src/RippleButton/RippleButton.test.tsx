import React from 'react';
import { Text, View } from 'react-native';
import renderer from 'react-test-renderer';
import { RippleButton } from './RippleButton';

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock')
);

describe('RippleButton', () => {
  it('should allow a string as the children', () => {
    renderer.create(<RippleButton>Hello World</RippleButton>);
  });

  it('should allow any children', () => {
    renderer.create(
      <RippleButton>
        <View>
          <Text>Hello World</Text>
        </View>
      </RippleButton>
    );
  });
});
