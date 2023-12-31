import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Projects from '../screens/Projects';
import ProjectDetail from '../screens/ProjectDetail';

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="landing" component={Login} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="projects" component={Projects} />
        <Stack.Screen name="projectDetail" component={ProjectDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
