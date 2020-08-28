import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import {
  Animated,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'cornflowerblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'yellow',
    borderWidth: 1,
  },
});

export interface RippleButtonProps {
  children?: ReactNode;
}
export const RippleButton = ({ children }: RippleButtonProps) => {
  const child =
    typeof children === 'string' ? <Text>{children}</Text> : children;
  const [sizes, setSizes] = useState({ radius: 0, width: 0, height: 0 });
  const [scale] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(scale, {
      useNativeDriver: true,
      toValue: 1,
      duration: 10000,
    }).start();
  }, [scale]);

  const onLayout = useCallback(
    ({
      nativeEvent: {
        layout: { width, height },
      },
    }: LayoutChangeEvent) =>
      setSizes({ width, height, radius: Math.sqrt(width ** 2 + height ** 2) }),
    []
  );

  return (
    <View style={styles.root} onLayout={onLayout}>
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          overflow: 'hidden',
          width: 100,
          height: 100,
          borderRadius: sizes.radius,
          backgroundColor: 'red',
          transform: [{ scale }],
        }}
      />
      {child}
    </View>
  );
};
