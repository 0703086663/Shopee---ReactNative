import React, { useState } from "react";
import { View, FlatList, StyleSheet, Image } from "react-native";

import home from "../../../assets/home.png";
import { TopScroll } from "./components/TopScroll";

export const TopBody = () => {
  const [liveUpdate, setLiveUpdate] = useState([
    {
      id: 1,
      name: "VN Shopee Live",
      image: home,
    },
    {
      id: 2,
      name: "HANATO VN",
      image: home,
    },
    {
      id: 3,
      name: "Xưởng chăn gối VN",
      image: home,
    },
    {
      id: 4,
      name: "Jami shop",
      image: home,
    },
    {
      id: 5,
      name: "Title 05",
      image: home,
    },
    {
      id: 6,
      name: "Title 06",
      image: home,
    },
    {
      id: 7,
      name: "Title 07",
      image: home,
    },
    {
      id: 8,
      name: "Title 08",
      image: home,
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={liveUpdate}
        numColumns={1}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <TopScroll liveItem={item} />}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
});
