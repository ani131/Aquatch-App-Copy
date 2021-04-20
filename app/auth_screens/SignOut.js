import React from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';
import { Auth } from 'aws-amplify';
import colors from '../config/colors';

export default function Home({ updateAuthState }) {

  async function signOut() {
    try {
      await Auth.signOut();
      updateAuthState('loggedOut');
      console.log('User is logged out');
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Sign Out"  color="#55cced" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    paddingRight: 7,
    marginTop: 35,
  }
});