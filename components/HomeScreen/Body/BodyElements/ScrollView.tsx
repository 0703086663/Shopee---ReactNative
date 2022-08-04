import { StyleSheet, View, Text, ScrollView } from "react-native";
import {
  FontAwesome,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export const ScrollViewElements = () => {
  return (
    <View style={styles.tabContainer}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.tabScroll}
        indicatorStyle={"white"}
      >
        <View style={styles.tabRow}>
          <View style={styles.tabItemContainer}>
            <View style={styles.tabItem}>
              <View style={styles.tabItemIconContainer}>
                <FontAwesome name="bolt" size={32} color="#ffb640" />
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
                  size={32}
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
                  size={32}
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
                <Ionicons name="flame" size={32} color="#CF352E" />
              </View>
              <View style={styles.tabItemTitleContainer}>
                <Text style={styles.tabItemTitle}>Bắt Trend - Giá Sốc</Text>
              </View>
            </View>
          </View>
          <View style={styles.tabItemContainer}>
            <View style={styles.tabItem}>
              <View style={styles.tabItemIconContainer}>
                <Entypo name="price-tag" size={32} color="#ffb640" />
              </View>
              <View style={styles.tabItemTitleContainer}>
                <Text style={styles.tabItemTitle}>Hàng Hiệu Giá Tốt</Text>
              </View>
            </View>
          </View>
          <View style={styles.tabItemContainer}>
            <View style={styles.tabItem}>
              <View style={styles.tabItemIconContainer}>
                <Entypo name="globe" size={32} color="#11823b" />
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
                <FontAwesome name="bolt" size={32} color="#ffb640" />
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
                  size={32}
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
                  size={32}
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
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    paddingHorizontal: 5,
    backgroundColor: "#f19a6f",
  },
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
    width: 100,
    height: 100,
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
