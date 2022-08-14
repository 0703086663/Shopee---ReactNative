import React from "react";
import { View, Image, ScrollView, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.3;
import code from "../../../assets/code.jpg";

export const CarouselBody = () => {
  const images = [code, code, code, code];
  return (
    <View style={styles.container}>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ width, height }}
      >
        {images.map((image, index) => (
          <Image style={styles.carousel} key={index} source={image} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width,
    height,
  },
  carousel: { height, width, resizeMode: "cover" },
});
