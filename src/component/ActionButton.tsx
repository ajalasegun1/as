import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';

const ActionButton: FC<{
  title: string;
  onPress: () => void;
  testID: string;
}> = ({title, onPress, testID}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}
      testID={testID}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: '#044b7f80',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
