import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";

function DashboardDetails({ route }) {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>{listing.price}</Text>
        <View style={styles.userContainer}>
          <ScrollView horizontal={false} style={styles.container}>
            <ListItem
              image={require("../assets/notstonks.jpg")}
              title="Anish"
              subTitle="375L Used"
            />
            <ListItem
              image={require("../assets/stonks.jpg")}
              title="Remi"
              subTitle="400L Used"
            />
            <ListItem
              image={require("../assets/advaith.jpg")}
              title="Advaith"
              subTitle="425L Used"
            />
            <ListItem
              image={require("../assets/saranya.jpg")}
              title="Saranya"
              subTitle="450L Used"
            />

          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 5,
    marginLeft: -15,
  },
  container: {
    width: "100%",
    height: "100%",
  }
});

export default DashboardDetails;
