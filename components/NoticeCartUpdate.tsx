import { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import home from "../assets/home.png";
import { NoticeCartItem } from "./NoticeCartItem";

export const NoticeCartListHeader = (props: any) => {
  const { title, badge } = props;
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerFirstTextWrapper}>
        <Text style={styles.headerFirstText}>{title}</Text>
      </View>
      {badge > 0 ? (
        <View style={styles.headerSecondTextWrapper}>
          <Text style={styles.headerSecondText}>Đọc tất cả ({badge})</Text>
        </View>
      ) : null}
    </View>
  );
};

export const NoticeCartUpdate = (props: any) => {
  const { title, badge } = props;
  const [cartUpdate, setCartUpdate] = useState([
    {
      id: 1,
      name: "Title 01",
      content:
        "Đơn hàng 01 đã hoàn thành. Bạn hãy đánh giá sản phẩm trước ngày 10-08-2022 để nhận 200 xu và giúp người dùng khác hiểu hơn về sản phẩm nhé!",
      createdDate: "09:50 05-08-2022",
      image: home,
      isRead: true,
    },
    {
      id: 2,
      name: "Title 02",
      content: "Đơn hàng 02 đã hoàn thành.",
      createdDate: "09:50 05-08-2022",
      image: home,
      isRead: false,
    },
    {
      id: 3,
      name: "Title 03",
      content: "Đơn hàng 03 đã hoàn thành.",
      createdDate: "09:50 05-08-2022",
      image: home,
      isRead: false,
    },
    {
      id: 4,
      name: "Title 04",
      content:
        "Đơn hàng 04 đã hoàn thành. Bạn hãy đánh giá sản phẩm trước ngày 10-08-2022 để nhận 200 xu và giúp người dùng khác hiểu hơn về sản phẩm nhé!",
      createdDate: "09:50 05-08-2022",
      image: home,
      isRead: true,
    },
    {
      id: 5,
      name: "Title 05",
      content:
        "Đơn hàng 05 đã hoàn thành. Bạn hãy đánh giá sản phẩm trước ngày 10-08-2022 để nhận 200 xu và giúp người dùng khác hiểu hơn về sản phẩm nhé!",
      createdDate: "09:50 05-08-2022",
      image: home,
      isRead: true,
    },
    {
      id: 6,
      name: "Title 06",
      content:
        "Đơn hàng 06 đã hoàn thành. Bạn hãy đánh giá sản phẩm trước ngày 10-08-2022 để nhận 200 xu và giúp người dùng khác hiểu hơn về sản phẩm nhé!",
      createdDate: "09:50 05-08-2022",
      image: home,
      isRead: false,
    },
    {
      id: 7,
      name: "Title 07",
      content: "Đơn hàng 07 đã hoàn thành.",
      createdDate: "09:50 05-08-2022",
      image: home,
      isRead: true,
    },
    {
      id: 8,
      name: "Title 08",
      content: "Đơn hàng 08 đã hoàn thành.",
      createdDate: "09:50 05-08-2022",
      image: home,
      isRead: false,
    },
    {
      id: 9,
      name: "Title 09",
      content:
        "Đơn hàng 09 đã hoàn thành. Bạn hãy đánh giá sản phẩm trước ngày 10-08-2022 để nhận 200 xu và giúp người dùng khác hiểu hơn về sản phẩm nhé!",
      createdDate: "09:50 05-08-2022",
      image: home,
      isRead: true,
    },
    {
      id: 10,
      name: "Title 10",
      content:
        "Đơn hàng 10 đã hoàn thành. Bạn hãy đánh giá sản phẩm trước ngày 10-08-2022 để nhận 200 xu và giúp người dùng khác hiểu hơn về sản phẩm nhé!",
      createdDate: "09:50 05-08-2022",
      image: home,
      isRead: false,
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.bodyWrapper}>
        <FlatList
          ListHeaderComponent={
            <NoticeCartListHeader title={title} badge={badge} />
          }
          data={cartUpdate}
          numColumns={1}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <NoticeCartItem cartUpdate={item} />}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  headerFirstTextWrapper: {
    flex: 1,
    padding: 5,
    alignItems: "flex-start",
  },
  headerFirstText: {
    color: "grey",
    fontWeight: "bold",
  },
  headerSecondTextWrapper: {
    flex: 1,
    padding: 5,
    alignItems: "flex-end",
  },
  headerSecondText: {
    color: "tomato",
  },
  bodyWrapper: {
    flex: 1,
  },
});
