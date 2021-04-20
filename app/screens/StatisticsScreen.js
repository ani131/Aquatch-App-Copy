import React from "react";
import { StyleSheet, View, Dimensions, } from "react-native";
import Text from "../components/Text";
import dynamoDBQuery from "../aws/query";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'

import colors from "../config/colors";
import { ScrollView } from "react-native";

function StatisticsScreen() {
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.text3}>Statistics</Text>
      <LineChart
        data={{
          labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun", dynamoDBQuery()],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={0.90 * Dimensions.get("window").width}
        height={220}
        yAxisLabel="$"
        //yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: colors.secondary,
          backgroundGradientFrom: colors.secondary,
          backgroundGradientTo: colors.secondary,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 15
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: colors.secondary,
          }
        }}
        bezier
        style={{
          marginVertical: 40,
          borderRadius: 15,
          padding: 20,
          width: '100%',
        }}
      />
      <Text style={styles.text}>Average Money Spent</Text>
      <BarChart
        data = {{
          labels: ['Anish', 'Advaith', 'Remi', 'Saranya',],
          datasets: [
            {
              data: [20, 10, 15, 25],
            },
          ],
        }}
        width={ 0.9 * Dimensions.get("window").width} // change the 0.9 to account for more space if needed
        height={220}
        //yAxisLabel=""
        yAxisSuffix=" min"
        chartConfig={{
          backgroundColor: colors.primary,
          backgroundGradientFrom: colors.primary,
          backgroundGradientTo: colors.primary,
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 15
          },
        }}
        style={{
          marginVertical: 40,
          borderRadius: 15,
          padding: 20,
          width: '100%',
        }}
      />
      <Text style={styles.text}>Average Time Spent In Shower</Text>
      <PieChart
        data = {[
          {
            name: "Anish",
            time: 20,
            color: colors.primary,
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
          },
          {
            name: "Advaith",
            time: 10,
            color: colors.secondary,
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
          },
          {
            name: "Remi",
            time: 15,
            color: "#ffe66d",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
          },
          {
            name: "Saranya",
            time: 25,
            color: "#fc5c65",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
          },
        ]}
        width={ 1 * Dimensions.get("window").width} // change the 0.9 to account for more space if needed
        height={220}
        chartConfig={{
          backgroundColor: colors.secondary,
          backgroundGradientFrom: colors.secondary,
          backgroundGradientTo: colors.secondary,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 15
          },
        }}
        accessor={"time"}
        backgroundColor={"transparent"}
        center={[0, 0]}
        absolute
        style={{
          marginVertical: 30,
          marginBottom: 10,
          borderRadius: 15,
          padding: 20,
          width: '100%',
        }}
      />
      <Text style={styles.text2}>Average Time Spent In Shower</Text>
    </ScrollView>
    
  
  );
}

const styles = StyleSheet.create({
  text: {
    marginVertical: -40,
    alignSelf: "center"
  },
  text2: {
    marginVertical: 5,
    alignSelf: "center",
  },
  text3: {
    marginTop: "5%",
    marginBottom: "-10%",
    alignSelf: "center",

  },
  screen: {
    marginTop: 40,
    marginBottom: 10
  },

  
})

export default StatisticsScreen;