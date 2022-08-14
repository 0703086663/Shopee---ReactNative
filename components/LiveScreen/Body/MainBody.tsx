import React, { useState } from "react";
import {
  Image,
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { BodyScroll } from "../Body/components/BodyScroll";
import dressImg from "../../../assets/dress.png";
import beautyImg from "../../../assets/beauty.png";
import freeshipImg from "../../../assets/freeship.png";
import houseImg from "../../../assets/house.png";
import jewelsImg from "../../../assets/jewels.png";
import likeImg from "../../../assets/like.png";
import refundImg from "../../../assets/refund.png";
import saleImg from "../../../assets/sale.png";
import shoesImg from "../../../assets/shoes.png";
import voucherImg from "../../../assets/voucher.png";

export const MainBody = () => {
  const sanxu = [
    {
      id: 1,
      name: "Product 01",
      image: "",
      video:
        "https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/04/file_example_MP4_480_1_5MG.mp4",
      title: 1000,
    },
    {
      id: 2,
      name: "Product 02",
      image: "",
      video: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      title: 2000,
    },
    {
      id: 3,
      name: "Product 03",
      image: "",
      video:
        "https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/04/file_example_MP4_480_1_5MG.mp4",
      title: 3000,
    },
  ];
  const freeship70k = [
    {
      id: 4,
      name: "Product 04",
      image: "",
      video: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      title: 4000,
    },
    {
      id: 5,
      name: "Product 05",
      image: "",
      video:
        "https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/04/file_example_MP4_1920_18MG.mp4",
      title: 5000,
    },
    {
      id: 6,
      name: "Product 06",
      image: "",
      video:
        "https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/04/file_example_MP4_480_1_5MG.mp4",
      title: 6000,
    },
  ];
  const x2voucher = [
    {
      id: 7,
      name: "Product 07",
      image: "",
      video:
        "https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/04/file_example_MP4_1280_10MG.mp4",
      title: 7000,
    },
    {
      id: 8,
      name: "Product 08",
      image: "",
      video:
        "https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/04/file_example_MP4_640_3MG.mp4",
      title: 8000,
    },
    {
      id: 9,
      name: "Product 09",
      image: "",
      video:
        "https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/04/file_example_MP4_1920_18MG.mp4",
      title: 9000,
    },
    {
      id: 10,
      name: "Product 10",
      image: "",
      video:
        "https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/04/file_example_MP4_480_1_5MG.mp4",
      title: 1000,
    },
  ];
  const [videos, setVideos] = useState([
    {
      id: 1,
      name: "Product 01",
      image: "",
      video:
        "https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/04/file_example_MP4_480_1_5MG.mp4",
      title: 1000,
    },
    {
      id: 2,
      name: "Product 02",
      image: "",
      video: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      title: 2000,
    },
    {
      id: 3,
      name: "Product 03",
      image: "",
      video:
        "https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/04/file_example_MP4_480_1_5MG.mp4",
      title: 3000,
    },
    {
      id: 4,
      name: "Product 04",
      image: "",
      video: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      title: 4000,
    },
    {
      id: 5,
      name: "Product 05",
      image: "",
      video:
        "https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/04/file_example_MP4_1920_18MG.mp4",
      title: 5000,
    },
    {
      id: 6,
      name: "Product 06",
      image: "",
      video:
        "https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/04/file_example_MP4_480_1_5MG.mp4",
      title: 6000,
    },
    {
      id: 7,
      name: "Product 07",
      image: "",
      video:
        "https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/04/file_example_MP4_1280_10MG.mp4",
      title: 7000,
    },
    {
      id: 8,
      name: "Product 08",
      image: "",
      video:
        "https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/04/file_example_MP4_640_3MG.mp4",
      title: 8000,
    },
    {
      id: 9,
      name: "Product 09",
      image: "",
      video:
        "https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/04/file_example_MP4_1920_18MG.mp4",
      title: 9000,
    },
    {
      id: 10,
      name: "Product 10",
      image: "",
      video:
        "https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/04/file_example_MP4_480_1_5MG.mp4",
      title: 1000,
    },
  ]);
  const [active, setActive] = useState("all");
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.row}>
          <TouchableOpacity
            activeOpacity={0.65}
            style={[
              styles.touchableOpacity,
              {
                borderBottomColor: active === "all" ? "tomato" : "white",
              },
            ]}
            onPress={() => {
              setActive("all");
              setVideos(videos);
            }}
          >
            <View style={styles.rowItemWrapper}>
              <Image source={likeImg} style={styles.rowImgItemWrapper} />
              <View style={styles.rowTextItemWrapper}>
                <Text
                  style={[
                    styles.rowTextItem,
                    { color: active === "all" ? "tomato" : "grey" },
                  ]}
                >
                  Tất Cả
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.65}
            style={[
              styles.touchableOpacity,
              { borderBottomColor: active === "freeship" ? "tomato" : "white" },
            ]}
            onPress={() => {
              setActive("freeship");
              setVideos(freeship70k);
            }}
          >
            <View style={styles.rowItemWrapper}>
              <Image source={saleImg} style={styles.rowImgItemWrapper} />
              <View style={styles.rowTextItemWrapper}>
                <Text
                  numberOfLines={2}
                  style={[
                    styles.rowTextItem,
                    { color: active === "freeship" ? "tomato" : "grey" },
                  ]}
                >
                  FREESHIP 70K
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.65}
            style={[
              styles.touchableOpacity,
              {
                borderBottomColor: active === "x2voucher" ? "tomato" : "white",
              },
            ]}
            onPress={() => {
              setActive("x2voucher");
              setVideos(x2voucher);
            }}
          >
            <View style={styles.rowItemWrapper}>
              <Image source={freeshipImg} style={styles.rowImgItemWrapper} />
              <View style={styles.rowTextItemWrapper}>
                <Text
                  style={[
                    styles.rowTextItem,
                    { color: active === "x2voucher" ? "tomato" : "grey" },
                  ]}
                >
                  x2 VOUCHER
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.65}
            style={[
              styles.touchableOpacity,
              { borderBottomColor: active === "sanxu" ? "tomato" : "white" },
            ]}
            onPress={() => {
              setActive("sanxu");
              setVideos(sanxu);
            }}
          >
            <View style={styles.rowItemWrapper}>
              <Image source={refundImg} style={styles.rowImgItemWrapper} />
              <View style={styles.rowTextItemWrapper}>
                <Text
                  style={[
                    styles.rowTextItem,
                    { color: active === "sanxu" ? "tomato" : "grey" },
                  ]}
                >
                  SĂN XU
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.65}
            style={[
              styles.touchableOpacity,
              { borderBottomColor: active === "giatu8k" ? "tomato" : "white" },
            ]}
            onPress={() => {
              setActive("giatu8k");
              setVideos(x2voucher);
            }}
          >
            <View style={styles.rowItemWrapper}>
              <Image source={beautyImg} style={styles.rowImgItemWrapper} />
              <View style={styles.rowTextItemWrapper}>
                <Text
                  style={[
                    styles.rowTextItem,
                    { color: active === "giatu8k" ? "tomato" : "grey" },
                  ]}
                >
                  GIÁ TỪ 8K
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.65}
            style={[
              styles.touchableOpacity,
              { borderBottomColor: active === "docquyen" ? "tomato" : "white" },
            ]}
            onPress={() => {
              setActive("docquyen");
              setVideos(x2voucher);
            }}
          >
            <View style={styles.rowItemWrapper}>
              <Image source={houseImg} style={styles.rowImgItemWrapper} />
              <View style={styles.rowTextItemWrapper}>
                <Text
                  style={[
                    styles.rowTextItem,
                    { color: active === "docquyen" ? "tomato" : "grey" },
                  ]}
                >
                  ĐỘC QUYỀN
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.65}
            style={[
              styles.touchableOpacity,
              { borderBottomColor: active === "hanghieu" ? "tomato" : "white" },
            ]}
            onPress={() => {
              setActive("hanghieu");
              setVideos(x2voucher);
            }}
          >
            <View style={styles.rowItemWrapper}>
              <Image source={jewelsImg} style={styles.rowImgItemWrapper} />
              <View style={styles.rowTextItemWrapper}>
                <Text
                  style={[
                    styles.rowTextItem,
                    { color: active === "hanghieu" ? "tomato" : "grey" },
                  ]}
                >
                  HÀNG HIỆU
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.65}
            style={[
              styles.touchableOpacity,
              { borderBottomColor: active === "moinhat" ? "tomato" : "white" },
            ]}
            onPress={() => {
              setActive("moinhat");
              setVideos(x2voucher);
            }}
          >
            <View style={styles.rowItemWrapper}>
              <Image source={shoesImg} style={styles.rowImgItemWrapper} />
              <View style={styles.rowTextItemWrapper}>
                <Text
                  style={[
                    styles.rowTextItem,
                    { color: active === "moinhat" ? "tomato" : "grey" },
                  ]}
                >
                  MỚI NHẤT
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={videos}
        numColumns={2}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <BodyScroll items={item} />}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 5 },
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
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  rowItemWrapper: {
    flexDirection: "column",
    height: 50,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  rowImgItemWrapper: { flex: 1 / 2, width: "100%", resizeMode: "cover" },
  rowTextItemWrapper: {
    flex: 1 / 2,
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  rowTextItem: {
    fontSize: 12,
    textAlign: "center",
  },
  touchableOpacity: {
    padding: 2,
    borderColor: "white",
    borderBottomColor: "tomato",
    borderWidth: 3,
    paddingBottom: 5,
  },
});
