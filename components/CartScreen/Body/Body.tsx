import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Body = () => {
  return (
    <View style={styles.container}>
      <View style={styles.discountNoticeWrapper}>
        <View style={styles.discountNoticeIconWrapper}>
          <MaterialCommunityIcons
            style={styles.discountNoticeIcon}
            name="truck-check"
            size={24}
            color="#10bc9c"
          />
        </View>
        <Text style={styles.discountNoticeText} numberOfLines={2}>
          Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn
          nhé!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 5 },
  discountNoticeWrapper: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "center",
    backgroundColor: "#fff7e4",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -3 },
  },
  discountNoticeIconWrapper: { justifyContent: "center" },
  discountNoticeIcon: {},
  discountNoticeText: { paddingLeft: 5, fontWeight: "400" },
});
