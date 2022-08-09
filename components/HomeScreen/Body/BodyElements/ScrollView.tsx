import { StyleSheet, View, Text, ScrollView } from "react-native";
import {
  FontAwesome,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";

export const ScrollViewElements = () => {
  return (
    <View style={styles.tabContainer}>
      <View style={styles.wrapperTop}>
        <View style={styles.wrapperTopLeft}>
          <MaterialCommunityIcons name="line-scan" size={22} color="grey" />
        </View>
        <View style={styles.wrapperTopCenter}>
          <View style={styles.centerRow}>
            <Ionicons name="wallet-outline" size={16} color="tomato" />
            <Text style={styles.wrapperTopText}>Ví ShopeePay</Text>
          </View>
          <Text style={styles.wrapperTopSmallText}>Voucher giảm đến 90K</Text>
        </View>
        <View style={styles.wrapperTopCenter}>
          <View style={styles.centerRow}>
            <Foundation name="bitcoin-circle" size={16} color="tomato" />
            <Text style={styles.wrapperTopText}>0</Text>
          </View>
          <Text style={styles.wrapperTopSmallText}>Voucher giảm đến 90K</Text>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.tabScroll}
        indicatorStyle={"white"}
      >
        <View style={styles.tabRow}>
          <View style={styles.tabItemContainer}>
            <View style={styles.tabItem}>
              <View style={styles.tabItemIconContainer}>
                <FontAwesome name="bolt" size={26} color="#ffb640" />
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
                  size={26}
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
                  size={26}
                  color="#10bc9c"
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
                <Ionicons name="flame" size={26} color="#CF352E" />
              </View>
              <View style={styles.tabItemTitleContainer}>
                <Text style={styles.tabItemTitle}>Bắt Trend - Giá Sốc</Text>
              </View>
            </View>
          </View>
          <View style={styles.tabItemContainer}>
            <View style={styles.tabItem}>
              <View style={styles.tabItemIconContainer}>
                <Entypo name="price-tag" size={26} color="#ffb640" />
              </View>
              <View style={styles.tabItemTitleContainer}>
                <Text style={styles.tabItemTitle}>Hàng Hiệu Giá Tốt</Text>
              </View>
            </View>
          </View>
          <View style={styles.tabItemContainer}>
            <View style={styles.tabItem}>
              <View style={styles.tabItemIconContainer}>
                <Entypo name="globe" size={26} color="#10bc9c" />
              </View>
              <View style={styles.tabItemTitleContainer}>
                <Text style={styles.tabItemTitle}>
                  Hàng Quốc Tế - Thương Hiệu 59K
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tabRow}>
          <View style={styles.tabItemContainer}>
            <View style={styles.tabItem}>
              <View style={styles.tabItemIconContainer}>
                <FontAwesome name="bolt" size={26} color="#ffb640" />
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
                  size={26}
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
                  size={26}
                  color="#10bc9c"
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
                <Entypo name="globe" size={24} color="#10bc9c" />
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
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: "#f19a6f",
  },
  wrapperTop: {
    flexDirection: "row",
    marginHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "white",
    borderRadius: 3,
    top: -10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    justifyContent: "center",
    alignItems: "center",
  },
  hr: {},
  wrapperTopLeft: { flex: 1, justifyContent: "center", alignItems: "center" },
  centerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapperTopCenter: {
    flex: 4,
    borderLeftWidth: 1,
    borderColor: "lightgrey",
    paddingLeft: 10,
  },
  wrapperTopText: { paddingLeft: 5 },
  wrapperTopSmallText: { color: "grey", fontSize: 10 },
  tabScroll: {
    flexDirection: "column",
    flexGow: 1,
  },
  tabRow: {
    // height: 150,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tabItemContainer: {
    flex: 1,
    paddingTop: 10,
    width: 80,
    height: 80,
  },
  tabItem: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
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
    aspectRatio: 2,
  },
  tabItemTitle: {
    textAlign: "center",
    fontSize: 10,
    color: "white",
    paddingTop: 5,
  },
});
