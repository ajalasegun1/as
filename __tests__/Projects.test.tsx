import 'react-native';
import React from 'react';
import {describe} from '@jest/globals';
import {render} from '@testing-library/react-native';

import {
  projectsScreenNavigationProps,
  projectsScreenRouteType,
} from '../src/navigation/types';
import Projects from '../src/screens/Projects';
import ProjectItem from '../src/component/ProjectItem';
const navigation = {
  navigate: jest.fn(),
  reset: jest.fn(),
  goBack: jest.fn(),
  push: jest.fn(),
} as unknown as projectsScreenNavigationProps;
const route = jest.fn() as unknown as projectsScreenRouteType;

describe('Projects screen', () => {
  test('renders home screen correctly', () => {
    render(<Projects navigation={navigation} route={route} />);
  });
  test('It renders project item properly', () => {
    const data = {
      item: {
        name: 'Ndali v1',
        image: require('../src/assets/images/ndali.png'),
        url: 'https://play.google.com/store/apps/details?id=com.ndali_customer&hl=en&gl=US',
        tags: ['social networking', 'ecommerce'],
        details:
          'Ndali is a socio-commerce platform that uses geolocation connect business owners with customers near them. Users of Ndali can also socialize with other users by sharing posts, chatting, writing blogs and so on. Merchants on ndali can create a virtual store, upload their products or services for users nearby to see and make purchases.',
        tools: [
          'React Native',
          'Typescript',
          'Redux',
          'RESTful API',
          'Payment gateways',
          'Videos',
          'Push notification',
          'Messaging',
        ],
      },
    };
    render(<ProjectItem navigation={navigation} item={data.item} />);
  });
});
