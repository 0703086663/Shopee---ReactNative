import { StyleSheet, View, Image, Text } from "react-native";
import icon from "../../../../assets/icon.png";

export const Product = (props: any) => {
  const { product } = props;
  return (
    <View style={styles.productContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={icon} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{product.title}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>đ{product.price}</Text>
          <Text style={styles.buyCount}>Đã bán {product.buyCount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: { flexDirection: "column" },
  imageContainer: {
    flex: 4,
    aspectRatio: 1,
  },
  image: {
    height: 128,
    width: 128,
  },
  infoContainer: {
    flex: 2,
    flexDirection: "column",
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    textTransform: "uppercase",
    fontSize: 14,
  },
  priceContainer: {
    flex: 1,
    flexDirection: "row",
  },
  price: {
    flex: 1,
    color: "orange",
    fontSize: 16,
  },
  buyCount: {
    fontSize: 14,
  },
});
