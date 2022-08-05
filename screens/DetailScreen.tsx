import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { ButtonHref } from "../components/ButtonHref";

import { TopTab } from "../components/HomeScreen/Body/BodyElements/TopTab";

export const DetailScreen = (route?: any) => {
  return (
    <View>
      <TopTab />
    </View>
  );
};
