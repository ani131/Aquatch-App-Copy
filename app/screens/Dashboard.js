import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const listings = [    //Listings of graphs on the "feed" page
  {
    id: 1,
    title: "Average Water Usage this Week",
    price: "Good",
    image: require("../assets/stonks.jpg"),
  },
  {
    id: 2,
    title: "Average Time Spent in Shower",
    price: "Bad Bad Bad Bad Bad",
    image: require("../assets/notstonks.jpg"),
  },
];

function Dashboard({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default Dashboard;
