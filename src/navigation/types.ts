import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  landing: undefined;
  home: undefined;
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
