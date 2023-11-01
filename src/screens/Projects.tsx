import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {PROJECTS} from '../constants';
import ProjectItem from '../component/ProjectItem';
import {projectsScreenProps} from '../navigation/types';

const Projects: FC<projectsScreenProps> = ({navigation}) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <Text style={styles.projectText}>Projects</Text>
      {PROJECTS.map((item, index) => (
        <ProjectItem
          key={index.toString()}
          item={item}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
};

export default Projects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingBottom: 40,
  },
  projectText: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 1.5,
    marginBottom: 20,
    color: '#313131',
  },
});
