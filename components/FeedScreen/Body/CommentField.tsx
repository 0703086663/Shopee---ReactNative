import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";

import avatar from "../../../assets/avatar.png";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export const CommentField = (data: any) => {

  return (
    <View style={styles.container}>
      <View style={styles.wrapperLeft}>
        <Image source={avatar} style={styles.avatar} />
        <TextInput placeholder={"Thêm Bình luận"} onSubmitEditing={(event) => {


          const newComment = {
            userId: 1,
            comment: event.nativeEvent.text
          }
          console.log('commentdasdadasdaasddassa', newComment)
          data.data.body.push(newComment)
          console.log('data', data.data.body)

        }}
        />
      </View>
      <View style={styles.wrapperRight}>
        <FontAwesome5
          name="grin-hearts"
          size={18}
          color="#FFCC00"
          style={styles.cmtIcon}
        />
        <MaterialCommunityIcons
          name="hand-clap"
          size={18}
          color="blue"
          style={styles.cmtIcon}
        />
        <FontAwesome5
          name="heart"
          size={18}
          color="#e75480"
          style={styles.cmtIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapperLeft: {
    flexDirection: "row",
  },
  wrapperRight: {
    alignSelf: "center",
    flexDirection: "row",
  },
  avatar: {
    height: 25,
    width: 25,
    borderRadius: 50,
    marginRight: 10,
  },
  cmtIcon: {
    marginLeft: 5,
  },
});
