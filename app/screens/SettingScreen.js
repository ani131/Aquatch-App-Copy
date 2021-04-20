import React, { useState } from 'react';
import { Alert, View, Switch, StyleSheet } from "react-native";

import AppButton from "../components/Button";
import Screen from "../components/Icon";
import colors from "../config/colors";
import routes from "../navigation/routes";

export default function App(){
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style = {styles.container}>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function SettingScreen() {
  return (
    <>
      <AppButton title="Change Profile Picture"/>
      <AppButton title="View Privacy Policy"/>
    </>

    //Add switches maybe for fun
  );

}

const menuItems = [
  {
    title: "Change Password",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: "#fc5c65",
    },
    targetScreen: routes.REGISTER,
  },
];