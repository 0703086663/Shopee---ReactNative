import { View, StyleSheet, Text, Image } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export const NoticeCartItem = (props: any) => {
  const { cartUpdate } = props;
  return (
    <View
      style={[
        styles.readContainer,
        cartUpdate.isRead ? styles.readContainer : styles.unReadContainer,
      ]}
    >
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={cartUpdate.image}></Image>
      </View>
      <View style={styles.contentAndArrowWrapper}>
        <View style={styles.contentWrapper}>
          <Text numberOfLines={1} style={styles.contentTitle}>
            {cartUpdate.name}
          </Text>
          <Text numberOfLines={4} style={styles.mainContent}>
            {cartUpdate.content}
          </Text>
          <Text numberOfLines={1} style={styles.contentCreatedDate}>
            {cartUpdate.createdDate}
          </Text>
        </View>
        <View style={styles.arrowWrapper}>
          <AntDesign name="down" size={14} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  readContainer: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderBottomColor: "lightgrey",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  unReadContainer: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fce8e3",
    borderBottomColor: "lightgrey",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  imageWrapper: {
    flex: 1 / 8,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "auto",
    resizeMode: "contain",
  },
  contentAndArrowWrapper: {
    flex: 7 / 8,
    flexDirection: "row",
    paddingLeft: 10,
  },
  contentWrapper: {
    flex: 9 / 10,
    flexDirection: "column",
  },
  contentTitle: {
    justifyContent: "flex-start",
    fontWeight: "500",
    fontSize: 16,
  },
  mainContent: {
    paddingVertical: 3,
    fontSize: 16,
    fontWeight: "300",
  },
  contentCreatedDate: {
    justifyContent: "flex-end",
    fontSize: 10,
    fontWeight: "300",
    color: "grey",
    letterSpacing: 1,
  },
  arrowWrapper: {
    flex: 1 / 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
