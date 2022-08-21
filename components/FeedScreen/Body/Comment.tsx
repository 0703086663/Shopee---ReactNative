import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ReadComment } from "../CRUD/ReadComment";
import { FontAwesome5 } from "@expo/vector-icons";

export const Comment = (props: any) => {
  const { data } = props;

  return (
    <View style={styles.container}>
      <View style={styles.wrapperTop}>
        <Text style={styles.title} numberOfLines={2}>
          <Text style={styles.name}>{data.userName}</Text>
          {"  "}
          {data.title}
        </Text>
        {/* </View>
      <View style={styles.wrapperCenter}>
        <Text
          style={styles.textGrey}
          onPress={() => {
            console.log(data);
            navigation.navigate("ReadComment" as never, data as never);
          }}
        >
          Xem toàn bộ 54 bình luận
        </Text> */}
      </View>
      <View style={styles.wrapperBottom}>
        <View style={styles.wrapLeftBottom}>
          {data.body.map((item: any, key: any) => {
            return (
              <View key={key} style={{ flexDirection: 'row' }}>
                <Text style={styles.name}> {item.userId}</Text>
                {/* {" "} */}
                <Text > {item.comment}</Text>

              </View>

            )
          })}

          {/* <Text style={styles.name}>NameOf{data.id}</Text> */}
          {/* <Text style={styles.name}>NameOf{data.id}</Text>
            {"  "}adsdad */}
        </View>
        <View style={styles.wrapRightBottom}>
          <FontAwesome5 name="heart" color={"grey"} size={16} />
        </View>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    // flexDirection: "column",
  },
  wrapperTop: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  title: {},
  name: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 25
  },
  wrapperCenter: {
    paddingTop: 10,
  },
  textGrey: { color: "grey" },
  wrapperBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  wrapLeftBottom: { justifyContent: "flex-start", width: "90%" },
  wrapRightBottom: { justifyContent: "flex-end" },
});
