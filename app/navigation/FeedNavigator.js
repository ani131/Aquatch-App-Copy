import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard";
import DashboardDetails from "../screens/DashboardDetails";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={Dashboard} />
    <Stack.Screen name="ListingDetails" component={DashboardDetails} />
  </Stack.Navigator>
);

export default FeedNavigator;
