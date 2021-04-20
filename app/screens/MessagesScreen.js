import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";

const initialMessages = [
  {
    id: 1,
    title: "Anish",
    description: "ur stealing all the hot water>:(",
    image: require("../assets/notstonks.jpg"),
  },
  {
    id: 2,
    title: "Remi",
    description:
      "DJIEJDOENOE ADVAITH WHY ARE YOU WASTING SO MUCH WATER",
    image: require("../assets/stonks.jpg"),
  },
  {
    id: 3,
    title: "Saranya",
    description:
      "I'm VERY VERY DISAPPOINTED IN YOU!!!!",
    image: require("../assets/saranya.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 4,
              title: "GRRRRRR",
              description: "RAWRRRR",
              image: require("../assets/advaith.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
