import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import {
  FontAwesome,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export const Body = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <ScrollView horizontal={true} style={styles.tabItem}>
          <View style={styles.tabRow}>
            <View style={styles.tabItemContainer}>
              <View style={styles.tabItem}>
                <View style={styles.tabItemIconContainer}>
                  <FontAwesome name="bolt" size={24} color="#ffb640" />
                </View>
                <View style={styles.tabItemTitleContainer}>
                  <Text style={styles.tabItemTitle}>Khung Giờ Săn Sale</Text>
                </View>
              </View>
            </View>
            <View style={styles.tabItemContainer}>
              <View style={styles.tabItem}>
                <View style={styles.tabItemIconContainer}>
                  <MaterialCommunityIcons
                    name="ticket-percent-outline"
                    size={24}
                    color="black"
                  />
                </View>
                <View style={styles.tabItemTitleContainer}>
                  <Text style={styles.tabItemTitle}>
                    Gì Cũng Rẻ - Mua Là Freeship
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.tabItemContainer}>
              <View style={styles.tabItem}>
                <View style={styles.tabItemIconContainer}>
                  <MaterialCommunityIcons
                    name="truck"
                    size={24}
                    color="#11823b"
                  />
                </View>
                <View style={styles.tabItemTitleContainer}>
                  <Text style={styles.tabItemTitle}>Miễn Phí Vận Chuyển</Text>
                </View>
              </View>
            </View>
            <View style={styles.tabItemContainer}>
              <View style={styles.tabItem}>
                <View style={styles.tabItemIconContainer}>
                  <Ionicons name="flame" size={24} color="#CF352E" />
                </View>
                <View style={styles.tabItemTitleContainer}>
                  <Text style={styles.tabItemTitle}>Bắt Trend - Giá Sốc</Text>
                </View>
              </View>
            </View>
            <View style={styles.tabItemContainer}>
              <View style={styles.tabItem}>
                <View style={styles.tabItemIconContainer}>
                  <Entypo name="price-tag" size={24} color="#ffb640" />
                </View>
                <View style={styles.tabItemTitleContainer}>
                  <Text style={styles.tabItemTitle}>Hàng Hiệu Giá Tốt</Text>
                </View>
              </View>
            </View>
            <View style={styles.tabItemContainer}>
              <View style={styles.tabItem}>
                <View style={styles.tabItemIconContainer}>
                  <Entypo name="globe" size={24} color="#11823b" />
                </View>
                <View style={styles.tabItemTitleContainer}>
                  <Text style={styles.tabItemTitle}>
                    Hàng Quốc Tế - Thương Hiệu 59K
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.productsContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: "column",
  },
  tabContainer: {
    padding: 5,
    backgroundColor: "tomato",
  },
  tabRow: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  tabItemContainer: {
    flex: 1,
    padding: 5,
  },
  tabItem: {
    flex: 1,
    flexDirection: "column",
  },
  tabItemIconContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 10,
    aspectRatio: 1,
  },
  tabItemTitleContainer: {
    flex: 1,
    aspectRatio: 1,
  },
  tabItemTitle: {
    textAlign: "center",
    fontSize: 8,
    color: "white",
  },
  productsContainer: {
    flex: 1,
  },
});
