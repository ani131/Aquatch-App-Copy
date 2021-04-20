import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.name}>Aquatech</Text>
        <Text style={styles.motto}>"Save Water, Save Money, Help the World"</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Login"
          onPress={() => navigation.navigate('SignIn')}
        />
        <Button
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 120,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 60,
    alignItems: "center",
  },
  name: {
    fontSize: 40,
    fontWeight: "300",
    paddingVertical: 15,
  },
  motto: {
    fontSize: 17.5,
    fontWeight: "300",
    paddingVertical: 0,

  }

});

export default WelcomeScreen;
