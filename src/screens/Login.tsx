import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import SA from '../component/SA';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {landingScreenProps} from '../navigation/types';
import CustomButton from '../component/CustomButton';
const validData = {
  username: 'guest',
  password: 'abcde',
};
const Login: FC<landingScreenProps> = ({navigation}) => {
  const styles = makeStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [secure, setSecure] = useState(true);

  const handleLogin = () => {
    setPasswordError(false);
    setUsernameError(false);
    if (username.toLowerCase() !== validData.username) {
      setUsernameError(true);
    }
    if (password !== validData.password) {
      setPasswordError(true);
    }

    if (
      username.toLowerCase() === validData.username &&
      password === validData.password
    ) {
      navigation.push('home');
    }
  };
  return (
    <View style={styles.container}>
      <SA />
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Username"
            style={styles.input}
            placeholderTextColor={'gray'}
            selectionColor={'gray'}
            testID="username"
            onChangeText={val => setUsername(val)}
          />
        </View>
        {usernameError && (
          <Text style={styles.errorText}>Please enter a valid username</Text>
        )}
      </View>
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Password"
            style={styles.input}
            placeholderTextColor={'gray'}
            selectionColor={'gray'}
            testID="password"
            secureTextEntry={secure}
            onChangeText={val => setPassword(val)}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSecure(!secure)}>
            {secure ? (
              <Ionicons name="eye-outline" size={30} color={'#313131'} />
            ) : (
              <Ionicons name="eye-off-outline" size={30} color={'#313131'} />
            )}
          </TouchableOpacity>
        </View>
        {passwordError && (
          <Text style={styles.errorText}>Password is incorrect</Text>
        )}
      </View>

      <CustomButton onPress={handleLogin} text="Login" testID="loginBtn" />
    </View>
  );
};

export default Login;

const makeStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
      paddingHorizontal: 20,
    },
    row: {
      width: '100%',
    },
    inputContainer: {
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 10,
    },
    input: {
      padding: 10,
      color: '#333333',
      flex: 1,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 55,
      backgroundColor: '#044b7f',
      width: '100%',
      borderRadius: 5,
    },
    loginText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '500',
      letterSpacing: 2,
    },
    errorText: {
      color: 'red',
      fontSize: 10,
      marginTop: 2,
      letterSpacing: 1.5,
    },
  });
