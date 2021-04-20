import React, { useState } from 'react';

import { View, Text, StyleSheet, Alert } from 'react-native';
import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppTextInput from '../auth_components/AppTextInput';
import AppButton from '../auth_components/AppButton';


export default function ConfirmSignUp({ navigation }) {

  const [username, setUsername] = useState('');
  const [authCode, setAuthCode] = useState('');

  const confirmSignUpError = () =>
    Alert.alert(
      "Verification Error",
      "The Username or Password does not exist" + '/n' + "Verification code does not match. Please enter a valid verification code",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK" } 
      ],
      { cancelable: true }
    );

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, authCode);
      console.log(' Code confirmed');
      navigation.navigate('SignIn');

    } catch (error) {
      confirmSignUpError();
      console.log(
        ' Verification code does not match. Please enter a valid verification code.',
        error.code
      );
    }
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Confirm Sign Up</Text>
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
          value={authCode}
          onChangeText={text => setAuthCode(text)}
          leftIcon="numeric"
          placeholder="Enter verification code"
          keyboardType="numeric"
        />
        <AppButton title="Confirm Sign Up" onPress={confirmSignUp} />
        <Text style={styles.text}>
          Already have an account? Sign In
        </Text>
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
    text: {
      color: '#55CCED',
      fontSize: 18,
      fontWeight: '600'
    }
  });
  