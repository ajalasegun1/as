import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

const ProjectItem: FC<{
  item: {
    name: string;
    tags: string[];
    details: string;
    tools: string[];
  };
}> = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
    </View>
  );
};

export default ProjectItem;

const styles = StyleSheet.create({
  container: {},
});
