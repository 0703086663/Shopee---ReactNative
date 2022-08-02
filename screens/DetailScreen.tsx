import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { ButtonHref } from "../components/ButtonHref";

export const DetailScreen = (route?: any) => {
  const navigation = useNavigation();
  const { id, name } = route.route.params.item;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>id: {id}</Text>
      <Text>name: {name}</Text>
      <Button
        title={"Go Back to Home"}
        onPress={() => navigation.goBack()}
      ></Button>
    </View>
  );
};
