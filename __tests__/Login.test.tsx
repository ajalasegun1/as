import 'react-native';
import React from 'react';
import {it, describe} from '@jest/globals';
import {render, screen, fireEvent} from '@testing-library/react-native';
import Login from '../src/screens/Login';
import {
  landingScreenNavigationType,
  landingScreenRouteType,
} from '../src/navigation/types';
import CustomButton from '../src/component/CustomButton';
const navigation = {
  navigate: jest.fn(),
  reset: jest.fn(),
  goBack: jest.fn(),
  push: jest.fn(),
} as unknown as landingScreenNavigationType;
const route = jest.fn() as unknown as landingScreenRouteType;

describe('Login Screen', () => {
  test('renders login screen correctly', () => {
    render(<Login navigation={navigation} route={route} />);
  });

  test('Login button calls onLogin function on press', () => {
    const onLogin = jest.fn();
    render(<CustomButton text="Login" onPress={onLogin} />);

    const loginBtn = screen.getByTestId('loginBtn');

    fireEvent.press(loginBtn);

    expect(onLogin).toHaveBeenCalledTimes(1);
  });

  test('Displays error message when incorrect username is inputed and login button is pressed', () => {
    render(<Login navigation={navigation} route={route} />);
    const usernameTextInput = screen.getByPlaceholderText('Username');
    const loginBtn = screen.getByTestId('loginBtn');

    fireEvent.changeText(usernameTextInput, 'kolawole');
    fireEvent.press(loginBtn);
    const errorText = screen.getByText('Please enter a valid username');
    expect(errorText).toBeTruthy();
  });

  test('Username error message is not displayed when the correct username is inputed', () => {
    render(<Login navigation={navigation} route={route} />);
    const usernameTextInput = screen.getByPlaceholderText('Username');
    const loginBtn = screen.getByTestId('loginBtn');
    fireEvent.changeText(usernameTextInput, 'guest');
    fireEvent.press(loginBtn);
    const errorText = screen.queryByText('Please enter a valid username');
    expect(errorText).toBeNull();
  });

  test('Displays error message when incorrect password is inputed and login button is pressed', () => {
    render(<Login navigation={navigation} route={route} />);
    const passwordTextInput = screen.getByPlaceholderText('Password');
    const loginBtn = screen.getByTestId('loginBtn');
    fireEvent.changeText(passwordTextInput, 'kolawole');
    fireEvent.press(loginBtn);
    const errorText = screen.queryByText('Password is incorrect');
    expect(errorText).toBeTruthy();
  });

  test('Hides error message when correct password is inputed and login button is pressed', () => {
    render(<Login navigation={navigation} route={route} />);
    const passwordTextInput = screen.getByPlaceholderText('Password');
    const loginBtn = screen.getByTestId('loginBtn');
    fireEvent.changeText(passwordTextInput, 'abcde');
    fireEvent.press(loginBtn);
    const errorText = screen.queryByText('Password is incorrect');
    expect(errorText).toBeNull();
  });
});
