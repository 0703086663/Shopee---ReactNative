import React from "react";
import { View, Text } from "react-native";

export const ReadComment = (props: any) => {
  const { userId, id, title, body } = props.route.params;
  return (
    <View>
      <Text>List</Text>
      <Text>ID: {id}</Text>
      <Text>title: {title}</Text>
      <Text>body: {body}</Text>
      <Text>userId: {userId}</Text>
    </View>
  );
};
