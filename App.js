import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet, StatusBar } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";  

// import { withAuthenticator, Auth } from 'aws-amplify-react-native';
// import Amplify from 'aws-amplify';
import config from './aws-exports';
import { TouchableOpacity } from "react-native-gesture-handler";

import SignIn from './app/auth_screens/SignIn';
import SignUp from './app/auth_screens/SignUp';
import ConfirmSignUp from './app/auth_screens/ConfirmSignUp';
import SignOut from './app/auth_screens/SignOut';
import WelcomeScreen from './app/screens/WelcomeScreen';

Amplify.configure(config)


const AuthenticationStack = createStackNavigator();
const AppStack = createStackNavigator();

const AuthenticationNavigator = props => {
  return (
    <>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
      <AuthenticationStack.Navigator headerMode="none">
        <AuthenticationStack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
        />

        <AuthenticationStack.Screen name="SignIn">
          {screenProps => (
            <SignIn {...screenProps} updateAuthState={props.updateAuthState} />
          )}
        </AuthenticationStack.Screen>

        <AuthenticationStack.Screen 
          name="SignUp" 
          component={SignUp} 
        />

        <AuthenticationStack.Screen
          name="ConfirmSignUp"
          component={ConfirmSignUp}
        />
      </AuthenticationStack.Navigator>
    </>
  );
};


// const AppNavigatorOne = props => {
//   return (
//     <AppStack.Navigator>
//       <AppStack.Screen name="AppNavigator">
//         {screenProps => (
//           <AppNavigator {...screenProps} updateAuthState={props.updateAuthState} />
//         )}
//       </AppStack.Screen>
//     </AppStack.Navigator>
//   );
// };

const Initializing = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#55CCED" />
    </View>
  );
};
  
function App() {

  const [isUserLoggedIn, setUserLoggedIn] = useState('initializing');

  useEffect(() => {
    checkAuthState();
  }, []);
      
  async function checkAuthState() {    
    try {
      await Auth.currentAuthenticatedUser();
      console.log(' User is signed in');
      setUserLoggedIn('loggedIn');
    } catch (err) {
      console.log(' User is not signed in');
      setUserLoggedIn('loggedOut');
    }
  }
      
  function updateAuthState(isUserLoggedIn) {
    setUserLoggedIn(isUserLoggedIn);
  }

  return (
    <NavigationContainer>
      {isUserLoggedIn === 'initializing' && <Initializing />}
      {isUserLoggedIn === 'loggedIn' && (
        <>
          <SignOut updateAuthState={updateAuthState} />
          <AppNavigator updateAuthState={updateAuthState} />
        </>
      )}
      {isUserLoggedIn === 'loggedOut' && (
        <AuthenticationNavigator updateAuthState={updateAuthState} />
      )}
    </NavigationContainer>
  );

}



export default App;


