import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from "react-native";
import { useState } from "react";
import { Product } from "./Product";
// import { AntDesign } from "@expo/vector-icons";

import dressImg from "../../../../assets/dress.png";
import beautyImg from "../../../../assets/beauty.png";
import freeshipImg from "../../../../assets/freeship.png";
import houseImg from "../../../../assets/house.png";
import jewelsImg from "../../../../assets/jewels.png";
import likeImg from "../../../../assets/like.png";
import refundImg from "../../../../assets/refund.png";
import saleImg from "../../../../assets/sale.png";
import shoesImg from "../../../../assets/shoes.png";
import voucherImg from "../../../../assets/voucher.png";

export const ListProductsElement = () => {
  const sale = [
    {
      id: 1,
      name: "Product 01",
      image: "",
      price: 100000,
      buyCount: 1000,
    },
    {
      id: 2,
      name: "Product 02",
      image: "",
      price: 150000,
      buyCount: 2000,
    },
  ];
  const freeship = [
    {
      id: 3,
      name: "Product 03",
      image: "",
      price: 200000,
      buyCount: 3000,
    },

    {
      id: 4,
      name: "Product 04",
      image: "",
      price: 250000,
      buyCount: 4000,
    },
    {
      id: 5,
      name: "Product 05",
      image: "",
      price: 300000,
      buyCount: 5000,
    },
  ];
  const refund = [
    {
      id: 6,
      name: "Product 06",
      image: "",
      price: 350000,
      buyCount: 6000,
    },
    {
      id: 7,
      name: "Product 07",
      image: "",
      price: 400000,
      buyCount: 7000,
    },
    {
      id: 8,
      name: "Product 08",
      image: "",
      price: 450000,
      buyCount: 8000,
    },
    {
      id: 9,
      name: "Product 09",
      image: "",
      price: 500000,
      buyCount: 9000,
    },
    {
      id: 10,
      name: "Product 10",
      image: "",
      price: 550000,
      buyCount: 1000,
    },
  ];
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 01",
      image: "",
      price: 100000,
      buyCount: 1000,
    },
    {
      id: 2,
      name: "Product 02",
      image: "",
      price: 150000,
      buyCount: 2000,
    },
    {
      id: 3,
      name: "Product 03",
      image: "",
      price: 200000,
      buyCount: 3000,
    },

    {
      id: 4,
      name: "Product 04",
      image: "",
      price: 250000,
      buyCount: 4000,
    },
    {
      id: 5,
      name: "Product 05",
      image: "",
      price: 300000,
      buyCount: 5000,
    },
    {
      id: 6,
      name: "Product 06",
      image: "",
      price: 350000,
      buyCount: 6000,
    },
    {
      id: 7,
      name: "Product 07",
      image: "",
      price: 400000,
      buyCount: 7000,
    },
    {
      id: 8,
      name: "Product 08",
      image: "",
      price: 450000,
      buyCount: 8000,
    },
    {
      id: 9,
      name: "Product 09",
      image: "",
      price: 500000,
      buyCount: 9000,
    },
    {
      id: 10,
      name: "Product 10",
      image: "",
      price: 550000,
      buyCount: 1000,
    },
  ]);
  const [active, setActive] = useState("all");

  return (
    <View style={styles.productsListContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>GỢI Ý HÔM NAY</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.row}>
          <TouchableOpacity
            activeOpacity={0.65}
            style={styles.touchableOpacity}
            onPress={() => {
              setActive("all");
              setProducts(sale);
            }}
          >
            <View
              style={[
                styles.rowItemWrapper,
                {
                  borderColor: active === "all" ? "tomato" : "white",
                },
              ]}
            >
              <Image
                source={likeImg}
                resizeMode={"contain"}
                style={styles.rowImgItemWrapper}
              />
              <View style={styles.rowTextItemWrapper}>
                <Text
                  style={[
                    styles.rowTextItem,
                    { color: active === "all" ? "tomato" : "grey" },
                  ]}
                >
                  8.8 Siêu Sale Giảm 50%
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.65}
            style={styles.touchableOpacity}
            onPress={() => {
              setActive("sale");
              setProducts(freeship);
            }}
          >
            <View
              style={[
                styles.rowItemWrapper,
                { borderColor: active === "sale" ? "tomato" : "white" },
              ]}
            >
              <Image
                source={saleImg}
                resizeMode={"contain"}
                style={styles.rowImgItemWrapper}
              />
              <View style={styles.rowTextItemWrapper}>
                <Text
                  numberOfLines={2}
                  style={[
                    styles.rowTextItem,
                    { color: active === "sale" ? "tomato" : "grey" },
                  ]}
                >
                  8.8 Siêu Sale Giảm 50%
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.65}
            style={styles.touchableOpacity}
            onPress={() => {
              setActive("freeship");
              setProducts(refund);
            }}
          >
            <View
              style={[
                styles.rowItemWrapper,
                { borderColor: active === "freeship" ? "tomato" : "white" },
              ]}
            >
              <Image
                source={freeshipImg}
                resizeMode={"contain"}
                style={styles.rowImgItemWrapper}
              />
              <View style={styles.rowTextItemWrapper}>
                <Text
                  style={[
                    styles.rowTextItem,
                    { color: active === "freeship" ? "tomato" : "grey" },
                  ]}
                >
                  Freeship Xtra
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.65}
            style={styles.touchableOpacity}
            onPress={() => {
              setActive("refund");
              setProducts(freeship);
            }}
          >
            <View
              style={[
                styles.rowItemWrapper,
                { borderColor: active === "refund" ? "tomato" : "white" },
              ]}
            >
              <Image
                source={refundImg}
                resizeMode={"contain"}
                style={styles.rowImgItemWrapper}
              />
              <View style={styles.rowTextItemWrapper}>
                <Text
                  style={[
                    styles.rowTextItem,
                    { color: active === "refund" ? "tomato" : "grey" },
                  ]}
                >
                  Hoàn Xu Đơn Bất Kỳ
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.65}
            style={styles.touchableOpacity}
            onPress={() => {
              setActive("beauty");
              setProducts(refund);
            }}
          >
            <View
              style={[
                styles.rowItemWrapper,
                { borderColor: active === "beauty" ? "tomato" : "white" },
              ]}
            >
              <Image
                source={beautyImg}
                resizeMode={"contain"}
                style={styles.rowImgItemWrapper}
              />
              <View style={styles.rowTextItemWrapper}>
                <Text
                  style={[
                    styles.rowTextItem,
                    { color: active === "beauty" ? "tomato" : "grey" },
                  ]}
                >
                  Sắc Đẹp
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.65}
            style={styles.touchableOpacity}
            onPress={() => {
              setActive("house");
              setProducts(refund);
            }}
          >
            <View
              style={[
                styles.rowItemWrapper,
                { borderColor: active === "house" ? "tomato" : "white" },
              ]}
            >
              <Image
                source={houseImg}
                resizeMode={"contain"}
                style={styles.rowImgItemWrapper}
              />
              <View style={styles.rowTextItemWrapper}>
                <Text
                  style={[
                    styles.rowTextItem,
                    { color: active === "house" ? "tomato" : "grey" },
                  ]}
                >
                  Nhà Cửa & Đời Sống
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.65}
            style={styles.touchableOpacity}
            onPress={() => {
              setActive("jewels");
              setProducts(refund);
            }}
          >
            <View
              style={[
                styles.rowItemWrapper,
                { borderColor: active === "jewels" ? "tomato" : "white" },
              ]}
            >
              <Image
                source={jewelsImg}
                resizeMode={"contain"}
                style={styles.rowImgItemWrapper}
              />
              <View style={styles.rowTextItemWrapper}>
                <Text
                  style={[
                    styles.rowTextItem,
                    { color: active === "jewels" ? "tomato" : "grey" },
                  ]}
                >
                  Phụ Kiện & Trang Sức
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.65}
            style={styles.touchableOpacity}
            onPress={() => {
              setActive("shoes");
              setProducts(refund);
            }}
          >
            <View
              style={[
                styles.rowItemWrapper,
                { borderColor: active === "shoes" ? "tomato" : "white" },
              ]}
            >
              <Image
                source={shoesImg}
                resizeMode={"contain"}
                style={styles.rowImgItemWrapper}
              />
              <View style={styles.rowTextItemWrapper}>
                <Text
                  style={[
                    styles.rowTextItem,
                    { color: active === "shoes" ? "tomato" : "grey" },
                  ]}
                >
                  Giày Dép Nữ
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginTop: 10,
  },
  titleContainer: {
    backgroundColor: "white",
    padding: 10,
    paddingVertical: 15,
  },
  titleText: {
    color: "tomato",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  flatList: {
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  rowItemWrapper: {
    flexDirection: "column",
    height: 80,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1.3,
  },
  rowImgItemWrapper: { flex: 2 / 3, width: "100%" },
  rowTextItemWrapper: {
    flex: 1 / 3,
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  rowTextItem: {
    fontSize: 10,
    textAlign: "center",
  },
  touchableOpacity: {
    padding: 2,
  },
});
