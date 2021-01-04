import React, { ReactElement, useCallback, useMemo, useState } from 'react';
import {
  Animated,
  GestureResponderEvent,
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from 'react-native';

export interface RippleButtonProps {
  children: ReactElement<ViewProps> | string;
  onPress?: () => void;
  backgroundColor?: string;
}
export const RippleButton = ({
  onPress = () => {
    console.log('onPress');
  },
  children,
}: RippleButtonProps) => {
  console.log('RippleButton');
  const child = useMemo(
    () =>
      typeof children === 'string' ? (
        <View>
          <Text>{children}</Text>
        </View>
      ) : (
        children
      ),
    [children]
  );
  const [radius, setRadius] = useState(0);
  const [scale] = useState(new Animated.Value(0.8));
  const position = new Animated.ValueXY({ x: 0, y: 0 });

  const ripple = ({
    nativeEvent: { locationX, locationY },
  }: GestureResponderEvent) => {
    console.log(locationX, ',', locationY);
    position.setValue({ x: locationX, y: locationY });
    Animated.sequence([
      Animated.timing(scale, {
        duration: 1000,
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        duration: 100,
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const onLayout = useCallback(
    ({
      nativeEvent: {
        layout: { width, height, x, y },
      },
    }: LayoutChangeEvent) => {
      console.log('layout: ', width, height, x, y);
      console.log('setRadius: ', Math.sqrt(width ** 2 + height ** 2));
      //setRadius(Math.sqrt(width ** 2 + height ** 2));
      setRadius(100);
    },
    []
  );

  return (
    <Pressable
      onLayout={onLayout}
      style={styles.root}
      onPressIn={ripple}
      onPress={onPress}
    >
      <View
        style={[child.props.style, { borderColor: 'yellow', borderWidth: 1 }]}
      >
        {child}
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'red',
            borderRadius: radius,
            height: radius * 2,
            opacity: 0.5,
            transform: [
              //...translate(vec.create(-radius)),
              { translateX: -radius },
              { translateY: -radius },
              { translateX: position.x },
              { translateY: position.y },
              { scale },
            ],
            width: radius * 2,
          }}
        />
        <View style={{ ...StyleSheet.absoluteFillObject, opacity: 0 }} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    borderColor: 'red',
    borderWidth: 1,
    //overflow: 'hidden',
  },
});
