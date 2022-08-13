import { StyleSheet, View, Text } from "react-native";
import { Badge } from "react-native-elements";
import {
  Foundation,
  AntDesign,
  FontAwesome5,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export const NoticeOptions = (props: any) => {
  const { icon, iconColor, title, desc, badge } = props;
  return (
    <View style={styles.container}>
      <View style={styles.optionRowWrapper}>
        <View style={styles.iconWrapper}>
          <FontAwesome5 name={icon} size={20} color={iconColor} />
        </View>
        <View style={styles.contentWrapper}>
          <Text numberOfLines={1} style={styles.contentTitle}>
            {title}
          </Text>
          <Text numberOfLines={1} style={styles.mainContent}>
            {badge > 0 ? desc : "Chưa có thông báo nào"}
          </Text>
        </View>
        <View style={styles.arrowWrapper}>
          {badge != null ? <Badge value={badge} status="error" /> : null}
          <AntDesign name="right" size={14} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  optionRowWrapper: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "white",
    borderBottomColor: "lightgrey",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  iconWrapper: {
    borderWidth: 1,
    borderColor: "lightgrey",
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    marginRight: 5,
    flex: 1 / 8,
    justifyContent: "center",
    alignItems: "center",
  },
  contentWrapper: {
    flex: 6 / 8,
    justifyContent: "center",
    flexDirection: "column",
  },
  contentTitle: {
    justifyContent: "flex-start",
    fontWeight: "600",
    fontSize: 16,
  },
  mainContent: {
    justifyContent: "flex-end",
    color: "grey",
    fontSize: 11,
  },
  arrowWrapper: {
    flex: 1 / 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
