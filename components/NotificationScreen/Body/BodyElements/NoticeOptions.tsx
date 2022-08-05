import { StyleSheet, View, Text, Image } from "react-native";
import home from "../../../../assets/home.png";
import {
  Foundation,
  AntDesign,
  FontAwesome,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export const NoticeOptions = () => {
  return (
    <View style={styles.container}>
      {/* Section 1 */}
      <View style={styles.optionRowWrapper}>
        <View style={styles.iconWrapper}>
          <Foundation name="pricetag-multiple" size={26} color="#ffb640" />
        </View>
        <View style={styles.contentWrapper}>
          <Text numberOfLines={1} style={styles.contentTitle}>
            TITLE 01
          </Text>
          <Text numberOfLines={1} style={styles.mainContent}>
            Dit me may test
          </Text>
        </View>
        <View style={styles.arrowWrapper}>
          <View style={styles.redNumberWrapper}>
            <Text style={styles.redNumber}>31</Text>
          </View>

          <AntDesign
            style={styles.arrow}
            name="right"
            size={14}
            color="black"
          />
        </View>
      </View>
      {/* Section 2 */}
      <View style={styles.optionRowWrapper}>
        <View style={styles.iconWrapper}>
          <Foundation name="pricetag-multiple" size={26} color="#ffb640" />
        </View>
        <View style={styles.contentWrapper}>
          <Text numberOfLines={1} style={styles.contentTitle}>
            TITLE 01
          </Text>
          <Text numberOfLines={1} style={styles.mainContent}>
            Dit me may test
          </Text>
        </View>
        <View style={styles.arrowWrapper}>
          <View style={styles.redNumberWrapper}>
            <Text style={styles.redNumber}>31</Text>
          </View>

          <AntDesign
            style={styles.arrow}
            name="right"
            size={14}
            color="black"
          />
        </View>
      </View>
      {/* Section 3 */}
      <View style={styles.optionRowWrapper}>
        <View style={styles.iconWrapper}>
          <Foundation name="pricetag-multiple" size={26} color="#ffb640" />
        </View>
        <View style={styles.contentWrapper}>
          <Text numberOfLines={1} style={styles.contentTitle}>
            TITLE 01
          </Text>
          <Text numberOfLines={1} style={styles.mainContent}>
            Dit me may test
          </Text>
        </View>
        <View style={styles.arrowWrapper}>
          <View style={styles.redNumberWrapper}>
            <Text style={styles.redNumber}>31</Text>
          </View>

          <AntDesign
            style={styles.arrow}
            name="right"
            size={14}
            color="black"
          />
        </View>
      </View>
      {/* Section 4 */}
      <View style={styles.optionRowWrapper}>
        <View style={styles.iconWrapper}>
          <Foundation name="pricetag-multiple" size={26} color="#ffb640" />
        </View>
        <View style={styles.contentWrapper}>
          <Text numberOfLines={1} style={styles.contentTitle}>
            TITLE 01
          </Text>
          <Text numberOfLines={1} style={styles.mainContent}>
            Dit me may test
          </Text>
        </View>
        <View style={styles.arrowWrapper}>
          <View style={styles.redNumberWrapper}>
            <Text style={styles.redNumber}>31</Text>
          </View>

          <AntDesign
            style={styles.arrow}
            name="right"
            size={14}
            color="black"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingVertical: 5,
  },
  optionRowWrapper: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    borderBottomColor: "lightgrey",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  iconWrapper: {
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
  },
  arrowWrapper: {
    flex: 1 / 8,
    flexDirection: "row",
    alignItems: "center",
  },
  redNumberWrapper: {
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "tomato",
  },
  redNumber: {
    color: "white",

    justifyContent: "center",
    padding: 2,
    fontSize: 12,
  },
  arrow: { flex: 1, justifyContent: "center" },
});
