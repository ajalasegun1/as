import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

const ListComponent: FC<{title: string; data: string[]; testID: string}> = ({
  title,
  data,
  testID,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.skill}>{title}:</Text>
      {data.map((item, i) => (
        <View style={styles.row} key={i.toString()} testID={testID}>
          <Text style={styles.item}>- </Text>
          <View style={styles.itemTextContainer}>
            <Text style={styles.item}>{item}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  container: {
    // marginBottom: 10,
  },
  skill: {
    fontSize: 18,
    fontWeight: '600',
    color: '#313131',
    marginTop: 20,
  },
  item: {
    fontSize: 16,
    color: '#313131',
    marginVertical: 2,
  },
  row: {
    flexDirection: 'row',
  },
  itemTextContainer: {
    flex: 1,
  },
});
