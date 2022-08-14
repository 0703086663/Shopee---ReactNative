import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { ScrollViewElements } from "./BodyElements/ScrollView";
import { ListProductsElement } from "./BodyElements/ListProducts";
// import Carousel from "react-native-snap-carousel";

import test from "../../../assets/code.jpg";

export const Body = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={test} style={styles.carousel} />
        <ScrollViewElements />
        <ListProductsElement />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carousel: { height: 220 },
});
