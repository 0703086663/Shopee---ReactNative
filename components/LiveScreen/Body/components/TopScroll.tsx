import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export const TopScroll = (props: any) => {
  const { liveItem } = props;
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={liveItem.image} style={styles.image} />
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>LIVE</Text>
        </View>
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.text}>
            {liveItem.name}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "red",
    margin: 10,
  },
  badgeContainer: {
    position: "absolute",
    zIndex: 1,
    top: 60,
    backgroundColor: "tomato",
    borderRadius: 5,
  },
  badgeText: { color: "white", paddingHorizontal: 4, paddingVertical: 1 },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
  },
  text: {
    fontSize: 12,
  },
});
