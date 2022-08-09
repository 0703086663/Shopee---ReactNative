import { StyleSheet, View, Image, Text } from "react-native";
import code from "../../../../assets/code.jpg";
import { formatNumber } from "../../../../utils/format";

export const Product = (props: any) => {
  const { product } = props;
  return (
    <View style={styles.productContainer}>
      <View style={styles.topLeftBadge}>
        <Text style={styles.topLeftBadgeText}>Yêu thích</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={code} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {product.name}
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>đ{product.price}</Text>
          <Text style={styles.buyCount}>
            Đã bán {formatNumber(product.buyCount)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topLeftBadge: {
    top: 2,
    left: -2,
    backgroundColor: "tomato",
    alignSelf: "flex-start",
    position: "absolute",
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    // shadowColor: "tomato",
    // shadowOpacity: 1,
  },
  topLeftBadgeText: {
    fontSize: 10,
    color: "white",
    padding: 1,
    paddingHorizontal: 2,
  },
  productContainer: {
    backgroundColor: "white",
    flexDirection: "column",
    width: "50%",
    borderWidth: 5,
    borderColor: "#f2f2f2",
  },
  imageContainer: {
    flex: 4,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
  },
  infoContainer: {
    flex: 2,
    flexDirection: "column",
    padding: 5,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    textTransform: "uppercase",
    fontSize: 12,
  },
  priceContainer: {
    paddingTop: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    flex: 1,
    color: "orange",
    fontSize: 14,
  },
  buyCount: {
    fontSize: 10,
  },
});
