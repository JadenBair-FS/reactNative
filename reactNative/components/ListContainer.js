import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

import ListItem from "./ListItem";

export default function ListContainer({ data }) {
  const renderItem = ({ item }) => (
    <ListItem
      year={item.year}
      make={item.make}
      model={item.model}
      id={item._id}
    />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
    />
  );
}
