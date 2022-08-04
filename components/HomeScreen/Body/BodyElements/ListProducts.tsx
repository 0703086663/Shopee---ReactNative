import { View, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import { Product } from "./Product";

export const ListProductsElement = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 01Product 01Product 01Product 01Product 01Product 01",
      image: "",
      price: 100000,
      buyCount: 1000,
    },
    {
      id: 2,
      name: "Product 02Product 01Product 01Product 01Product 01Product 01",
      image: "",
      price: 150000,
      buyCount: 2000,
    },
    {
      id: 3,
      name: "Product 03Product 01Product 01Product 01Product 01Product 01",
      image: "",
      price: 200000,
      buyCount: 3000,
    },
    {
      id: 4,
      name: "Product 04Product 01Product 01Product 01Product 01Product 01",
      image: "",
      price: 250000,
      buyCount: 4000,
    },
    {
      id: 5,
      name: "Product 05Product 01Product 01Product 01Product 01Product 01",
      image: "",
      price: 300000,
      buyCount: 5000,
    },
    {
      id: 6,
      name: "Product 06Product 01Product 01Product 01Product 01Product 01",
      image: "",
      price: 350000,
      buyCount: 6000,
    },
    {
      id: 7,
      name: "Product 07Product 01Product 01Product 01Product 01Product 01",
      image: "",
      price: 400000,
      buyCount: 7000,
    },
    {
      id: 8,
      name: "Product 08Product 01Product 01Product 01Product 01Product 01",
      image: "",
      price: 450000,
      buyCount: 8000,
    },
    {
      id: 9,
      name: "Product 09Product 01Product 01Product 01Product 01Product 01",
      image: "",
      price: 500000,
      buyCount: 9000,
    },
    {
      id: 10,
      name: "Product 10Product 01Product 01Product 01Product 01Product 01",
      image: "",
      price: 550000,
      buyCount: 1000,
    },
  ]);
  return (
    <View style={styles.productsListContainer}>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={products}
        numColumns={2}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <Product product={item} />}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  productsListContainer: {
    flex: 1,
  },
  flatList: {
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#f2f2f2",
  },
});
