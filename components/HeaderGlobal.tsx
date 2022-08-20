import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { HeaderIcons } from "./HeaderIcons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const ReturnIcon = (props: any) => {
  const { haveIcon } = props;
  const navigation = useNavigation();
  if (haveIcon == true) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name={"ios-search-outline"} color={"tomato"} size={24} />
      </TouchableOpacity>
    );
  } else {
    return null;
  }
};

export const HeaderGlobal = (props: any) => {
  const { headerTitle, iconColor, haveIcon } = props;

  return (
    <View style={styles.topHeader}>
      <View style={[, { flexDirection: "row" }]}>
        <View style={styles.topLeftHeader}>
          <ReturnIcon haveIcon={haveIcon} />
        </View>
        <View style={styles.topCenterHeader}>
          <Text style={styles.topCenterHeaderTitle}>{headerTitle}</Text>
        </View>
        <View style={styles.topRightHeader}>
          <HeaderIcons iconColor={iconColor} />
        </View>
      </View>
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
    paddingLeft: 10,
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
    fontWeight: "400",
    paddingBottom: 5,
  },
  topRightHeader: {
    flexDirection: "row-reverse",
    flex: 1 / 3,
    paddingLeft: 10,
  },
});
