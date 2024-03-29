import React, { useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppTextInput from '../auth_components/AppTextInput';
import AppButton from '../auth_components/AppButton';


export default function SignUp({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const signUpErrorAlert = () =>
    Alert.alert(
      "Error Signing Up",

      "Make Sure:" 
      + '\n' + "-Your username matches your email" 
      + '\n' + "-Password is 6 characters or longer" 
      + '\n' + "-The provided email is valid",

      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK" } 
      ],
      { cancelable: true }
    );

  async function signUp() {
    try {
    await Auth.signUp({ username, password, attributes: { email } });
      console.log(' Sign-up Confirmed');
      navigation.navigate('ConfirmSignUp');
    } catch (error) {
      signUpErrorAlert();
      console.log(' Error signing up...', error);
    }
  }


  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Create a new account</Text>
        <AppTextInput
          value={username}
          onChangeText={text => setUsername(text)}
          leftIcon="account"
          placeholder="Enter username"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppTextInput
          value={password}
          onChangeText={text => setPassword(text)}
          leftIcon="lock"
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
        />
        <AppTextInput
          value={email}
          onChangeText={text => setEmail(text)}
          leftIcon="email"
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppButton title="Sign Up" onPress={signUp} />
        <View style={styles.footerButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.forgotPasswordButtonText}>
              Already have an account? Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

    safeAreaContainer: {
      flex: 1,
      backgroundColor: 'white'
    },
    container: {
      flex: 1,
      alignItems: 'center'
    },
    title: {
      fontSize: 20,
      color: '#202020',
      fontWeight: '500',
      marginVertical: 15
    },
    footerButtonContainer: {
      marginVertical: 15,
      justifyContent: 'center',
      alignItems: 'center'
    },
    forgotPasswordButtonText: {
      color: '#55CCED',
      fontSize: 18,
      fontWeight: '600'
    }
  });