import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PROJECTS} from '../constants';
import ProjectItem from '../component/ProjectItem';

const Projects = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <Text style={styles.projectText}>Projects</Text>
      {PROJECTS.map((item, index) => (
        <ProjectItem key={index.toString()} item={item} />
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
    flex: 1,
    paddingHorizontal: 10,
  },
  projectText: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 1.5,
  },
});
