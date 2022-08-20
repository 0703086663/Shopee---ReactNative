import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ActionSheetIOS } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { Comment } from "./Comment";
import { CommentField } from "./CommentField";
import { Read } from "../CRUD/Read";

import avatar from "../../../assets/avatar.png";

export const RenderItem = (props: any) => {
  const [result, setResult] = useState("🔮");

  const ActionSheet = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "Create", "Read", "Update", "Delete"],
        destructiveButtonIndex: 4,
        cancelButtonIndex: 0,
        userInterfaceStyle: "dark",
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setResult("Create");
        } else if (buttonIndex === 2) {
          setResult("Read");
        } else if (buttonIndex === 3) {
          setResult("Update");
        } else if (buttonIndex === 4) {
          setResult("Delete");
        }
      }
    );

  const { data } = props;
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.wrap}>
          <View style={styles.wrapLeft}>
            <Image source={avatar} style={styles.wrapLeftAva} />
            <View style={styles.badgeIcon}>
              <FontAwesome name="check" size={12} color="white" />
            </View>
            <Text style={styles.wrapLeftName}>Tên {data.id}</Text>
          </View>
          <View style={styles.wrapRight}>
            <View style={styles.badgeFollower}>
              <Text style={styles.badgeText}>Theo Dõi</Text>

              <Text>{result}</Text>
            </View>
            <FontAwesome
              name="ellipsis-h"
              size={22}
              color="grey"
              onPress={ActionSheet}
            />
          </View>
        </View>
        {/* <Text style={styles.id}>{data.id}</Text> */}
        <Image source={avatar} style={styles.image} />
        <View style={styles.interaction}>
          <View style={styles.interactionLeft}>
            <View style={styles.interactionRow}>
              <FontAwesome name="heart-o" size={20} color="grey" />
              <Text style={styles.interactionText}>1,5k</Text>
            </View>
            <View style={styles.interactionRow}>
              <FontAwesome name="comment-o" size={20} color="grey" />
              <Text style={styles.interactionText}>292</Text>
            </View>
            <View style={styles.interactionRow}>
              <FontAwesome name="eye" size={20} color="grey" />
              <Text style={styles.interactionText}>610.526</Text>
            </View>
          </View>
          <View style={styles.interactionRight}>
            <FontAwesome name="share" size={20} color="grey" />
          </View>
        </View>
        <Comment data={data} />
        <CommentField />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 260,
    width: "100%",
    padding: 5,
  },
  container: { flex: 1 },
  wrapper: {
    width: "100%",
    flex: 1,
    // justifyContent: "center",
    backgroundColor: "white",
    paddingBottom: 25,
    paddingTop: 5,
  },
  wrap: { flexDirection: "row", flex: 1, justifyContent: "space-between" },
  wrapLeft: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  wrapLeftAva: {
    margin: 10,
    height: 35,
    width: 35,
    borderRadius: 20,
  },
  badgeIcon: {
    backgroundColor: "tomato",
    borderRadius: 20,
    padding: 3,
    position: "absolute",
    top: 30,
    left: 30,
  },
  wrapLeftName: { fontSize: 16, fontWeight: "600" },
  wrapRight: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
  },
  badgeFollower: {
    backgroundColor: "tomato",
    padding: 5,
    marginRight: 10,
    borderRadius: 4,
  },
  badgeText: { color: "white" },
  interaction: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  interactionLeft: {
    flex: 4,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  interactionRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  interactionText: {
    paddingHorizontal: 5,
  },
  interactionRight: {
    flex: 1,
    alignItems: "flex-end",
  },
});
