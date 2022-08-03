import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export const Cart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.text}>Cart</Text>
        <Text style={styles.text}>Cart</Text>
        <Text style={styles.text}>Cart</Text>
        <Text style={styles.text}>Cart</Text>
        <Text style={styles.text}>Cart</Text>
      </View>
    </View>
  );
};
