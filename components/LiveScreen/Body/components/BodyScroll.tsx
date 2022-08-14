import React from "react";
import { View, Text, StyleSheet } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Video } from "expo-av";

export const BodyScroll = (props: any) => {
  const video = React.useRef(null);
  const { items } = props;
  return (
    <View style={styles.container}>
      <View style={styles.badgeLeft}>
        <View style={styles.contentLeft}>
          <FontAwesome
            name="circle"
            size={5}
            color="white"
            style={styles.badgeIcon}
          />
          <Text style={styles.badgeText}>LIVE</Text>
        </View>
        <View style={styles.contentRight}>
          <FontAwesome
            name="eye"
            size={12}
            color="white"
            style={[styles.badgeIcon, { marginLeft: 5 }]}
          />
          <Text style={styles.badgeText}>33</Text>
        </View>
      </View>
      <View style={styles.badgeRight}>
        <FontAwesome
          name="percent"
          size={10}
          color="white"
          style={styles.badgeIcon}
        />
        <Text style={styles.badgeText}>Voucher</Text>
      </View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: items.video,
          // uri: video1,
        }}
        useNativeControls
        isLooping
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#fcf6eb",
    alignItems: "center",
    width: "50%",
    padding: 5,
  },
  badgeLeft: {
    flexDirection: "row",
    position: "absolute",
    zIndex: 1,
    top: 15,
    left: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  contentLeft: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
    paddingHorizontal: 3,
    paddingVertical: 2,
    borderRadius: 5,
  },
  contentRight: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    marginLeft: -3,
    zIndex: -2,
  },
  badgeIcon: { paddingRight: 2 },
  badgeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 9,
  },
  badgeRight: {
    flexDirection: "row",
    position: "absolute",
    zIndex: 1,
    top: 15,
    right: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
    paddingVertical: 2,
    paddingHorizontal: 3,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
