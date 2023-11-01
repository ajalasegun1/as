import 'react-native';
import React from 'react';
import {describe} from '@jest/globals';
import {render, screen, fireEvent} from '@testing-library/react-native';

import {
  homeScreenNavigationType,
  homeScreenRouteType,
} from '../src/navigation/types';
import CustomButton from '../src/component/CustomButton';
import Home from '../src/screens/Home';
import ListComponent from '../src/component/ListComponent';
import ActionButton from '../src/component/ActionButton';
const navigation = {
  navigate: jest.fn(),
  reset: jest.fn(),
  goBack: jest.fn(),
  push: jest.fn(),
} as unknown as homeScreenNavigationType;
const route = jest.fn() as unknown as homeScreenRouteType;

describe('Home Screen', () => {
  test('renders home screen correctly', () => {
    render(<Home navigation={navigation} route={route} />);
  });

  test('Displays the right amount of items passed as props', () => {
    const title = 'Water no get enemy';
    const data = ['Water', 'No', 'Get', 'Enemy'];
    const testID = 'checking';
    render(<ListComponent title={title} data={data} testID={testID} />);

    const items = screen.queryAllByTestId('checking');

    expect(items.length).toEqual(4);
  });

  test('Displays item on the list', () => {
    const title = 'Water no get enemy';
    const data = ['Water', 'No', 'Get', 'Enemy'];
    const testID = 'checking';
    render(<ListComponent title={title} data={data} testID={testID} />);

    const item = screen.queryByText('Water');

    expect(item).toBeTruthy();
  });

  test('call function that triggers navigation to projects screen', () => {
    const gotoProjects = jest.fn();
    render(
      <CustomButton
        text="View Projects"
        testID="goToProjects"
        onPress={gotoProjects}
      />,
    );
    const btn = screen.getByTestId('goToProjects');

    fireEvent.press(btn);

    expect(gotoProjects).toHaveBeenCalledTimes(1);
  });

  test('action function is called on press', () => {
    const carryOutAction = jest.fn();
    render(
      <ActionButton title="call" testID="call" onPress={carryOutAction} />,
    );
    const btn = screen.getByTestId('call');

    fireEvent.press(btn);

    expect(carryOutAction).toHaveBeenCalledTimes(1);
  });
});
