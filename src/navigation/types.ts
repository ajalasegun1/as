import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  landing: undefined;
  home: undefined;
  projects: undefined;
};

export type landingScreenProps = StackScreenProps<
  RootStackParamList,
  'landing'
>;
export type landingScreenNavigationType = StackNavigationProp<
  RootStackParamList,
  'landing',
  undefined
>;
export type landingScreenRouteType = RouteProp<RootStackParamList, 'landing'>;

export type homeScreenProps = StackScreenProps<RootStackParamList, 'home'>;
export type homeScreenNavigationType = StackNavigationProp<
  RootStackParamList,
  'home',
  undefined
>;
export type homeScreenRouteType = RouteProp<RootStackParamList, 'home'>;

export type projectsScreenProps = StackScreenProps<
  RootStackParamList,
  'projects'
>;
