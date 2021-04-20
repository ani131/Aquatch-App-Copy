import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Foundation } from '@expo/vector-icons';

import colors from "../config/colors";

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Foundation
          name="graph-bar"          //Change icons from https://icons.expo.fyi/ and import above
          color={colors.white}
          size={35}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 20,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
});

export default NewListingButton;
