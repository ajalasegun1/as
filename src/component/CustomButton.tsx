import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';

const CustomButton: FC<{onPress: () => void; text: string; testID: string}> = ({
  onPress,
  text,
  testID,
}) => {
  return (
    <TouchableOpacity
      testID={testID}
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.loginText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    backgroundColor: '#044b7f',
    width: '100%',
    borderRadius: 5,
  },
  loginText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 2,
  },
});
