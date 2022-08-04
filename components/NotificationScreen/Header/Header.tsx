import { View, StyleSheet, Text } from "react-native";
import { HeaderIcons } from "../../HeaderIcons";

export const Header = () => {
  return (
    <View style={styles.topHeader}>
      <View style={[, { flexDirection: "row" }]}>
        <View style={styles.topLeftHeader}></View>
        <View style={styles.topCenterHeader}>
          <Text style={styles.topCenterHeaderTitle}>Thông báo</Text>
        </View>
        <View style={styles.topRightHeader}>
          <HeaderIcons iconColor={"tomato"} />
        </View>
      </View>

      {/* <View style={styles.bottomHeader}>
        <View style={styles.bottomLeftHeader}>
          <Image style={styles.avatar} source={Avatar} />
        </View>
        <View style={styles.bottomRightHeader}>
          <Text style={styles.bottomRightName}>zyxell</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.bottomRightRoleBadge}>
              <Text style={[styles.tomatoText, { fontSize: 11 }]}>
                Thành Viên
              </Text>
              <Ionicons name={"arrow-forward"} size={16} color={"tomato"} />
            </View>
          </View>
          <View style={[, { flexDirection: "row" }]}>
            <Text style={styles.bottomRightFollow}>
              Người theo dõi{" "}
              <Text style={styles.bottomRightFollowNumber}>2</Text>
            </Text>
            <Text> | </Text>
            <Text style={styles.bottomRightFollow}>
              Đang theo dõi{" "}
              <Text style={styles.bottomRightFollowNumber}>8</Text>
            </Text>
          </View>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  topHeader: {
    flexDirection: "column",
    backgroundColor: "white",
    paddingTop: 50,
  },
  topLeftHeader: {
    flex: 1 / 3,
  },
  topLeftHeaderItems: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 7,
    paddingLeft: 20,
    marginRight: 10,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  topCenterHeader: {
    flex: 1 / 3,
    alignItems: "center",
    justifyContent: "center",
  },
  topCenterHeaderTitle: {
    fontSize: 20,
  },
  topRightHeader: {
    flexDirection: "row-reverse",
    flex: 1 / 3,
    paddingLeft: 10,
  },
});
