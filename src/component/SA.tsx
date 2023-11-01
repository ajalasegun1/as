import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const SA = () => {
  const styles = makeStyles();
  const pos = useSharedValue(0);
  const scale = useSharedValue(0.5);
  const animatedStyle1 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: withSpring(pos.value)},
        {scale: withSpring(scale.value)},
      ],
    };
  });

  useEffect(() => {
    setTimeout(() => {
      pos.value = -50;
      scale.value = 1;
    }, 1000);
  }, []);
  return (
    <Animated.View style={[styles.container, animatedStyle1]}>
      <Text style={styles.sa}>SA</Text>
    </Animated.View>
  );
};

export default SA;

const makeStyles = () =>
  StyleSheet.create({
    container: {
      width: 70,
      aspectRatio: 1,
      borderWidth: 2,
      borderColor: 'gray',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sa: {
      fontSize: 30,
      fontWeight: '600',
    },
  });
